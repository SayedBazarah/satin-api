import { env } from "../../config/env";
import { Category } from "../../modals/category.model";
import { Product } from "../../modals/product.model";
import { LandingPageHandle } from "../../types/enpoints/general.endpoints";

export const LandingPage: LandingPageHandle = async (req, res, next) => {
  //  Carosoul Products
  const carsoul = await Product.aggregate([
    { $match: { tags: { $regex: "carsoul" } } },
    {
      $project: {
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

  //  Trendy Products
  const trendy = await Product.aggregate([
    { $match: { tags: { $regex: "trendy" } } },
    {
      $project: {
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
    {
      $lookup: {
        from: "product", // Name of the collection to join with
        localField: "_id", // Field from the local collection (categories)
        foreignField: "category", // Field from the foreign collection (products)
        let: { id: "$_id" },
        pipeline: [
          {
            $project: {
              priceSale: 1,
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
        products: 1,
      },
    },
  ]);

  return res.status(200).json({
    carosoul: carsoul,
    trendy: trendy,
    categories: categories,
  });
};
