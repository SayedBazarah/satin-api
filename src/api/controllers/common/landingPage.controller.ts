import { env } from "../../config/env";
import { Category } from "../../modals/category.model";
import { Product } from "../../modals/product.model";
import { LandingPageHandle } from "../../types/enpoints/general.endpoints";

export const LandingPage: LandingPageHandle = async (req, res, next) => {
  const locale = req.headers["accept-language"] || "ar";

  //  Trendy Products
  const bestSelling = await Product.aggregate([
    { $match: { locale } },
    {
      $sort: { totalSolid: -1 },
    },
    {
      $limit: 6,
    },
    {
      $project: {
        _id: 1,
        newLabel: 1,
        saleLabel: 1,
        createdAt: 1,
        priceSale: 1,
        category: 1,
        tags: 1,
        publish: 1,
        quantity: 1,
        totalSold: 1,
        price: 1,
        name: 1,
        slug: 1,
        images: 1,
        available: {
          $subtract: ["$quantity", "$totalSold"],
        },
        inventoryType: {
          $switch: {
            branches: [
              {
                case: {
                  $lte: [{ $subtract: ["$quantity", "$totalSold"] }, 0],
                },
                then: "out of stock",
              },
              {
                case: {
                  $lt: [{ $subtract: ["$quantity", "$totalSold"] }, 10],
                },
                then: "low stock",
              },
            ],
            default: "in stock",
          },
        },
        coverUrl: {
          $concat: [
            `${env.apiUrl}/`,
            {
              $arrayElemAt: ["$images", 0],
            },
          ],
        },
      },
    },
  ]);

  // Categories Data
  const categories = await Category.aggregate([
    { $match: { locale } },
    {
      $lookup: {
        from: "product", // Name of the collection to join with
        localField: "_id", // Field from the local collection (categories)
        foreignField: "category", // Field from the foreign collection (products)
        let: { id: "$_id" },
        pipeline: [
          {
            $project: {
              _id: 1,
              priceSale: 1,
              subDescription: 1,
              category: 1,
              tags: 1,
              totalSold: 1,
              price: 1,
              name: 1,
              slug: 1,
              newLabel: 1,
              saleLabel: 1,
              available: {
                $subtract: ["$quantity", "$totalSold"],
              },
              inventoryType: {
                $switch: {
                  branches: [
                    {
                      case: {
                        $lte: [{ $subtract: ["$quantity", "$totalSold"] }, 0],
                      },
                      then: "out of stock",
                    },
                    {
                      case: {
                        $lt: [{ $subtract: ["$quantity", "$totalSold"] }, 10],
                      },
                      then: "low stock",
                    },
                  ],
                  default: "in stock",
                },
              },
              coverUrl: {
                $concat: [
                  `${env.apiUrl}/`,
                  {
                    $arrayElemAt: ["$images", 0],
                  },
                ],
              },
            },
          },
        ],

        as: "products", // Name of the field to add to each document
      },
    },
    {
      $project: {
        slug: 1,
        title: 1,
        coverImage: {
          $concat: [`${env.apiUrl}/`, "$coverImage"],
        },
        icon: {
          $concat: [`${env.apiUrl}/`, "$icon"],
        },
        products: 1,
      },
    },
  ]);

  return res.status(200).json({
    bestSelling,
    categories,
  });
};
