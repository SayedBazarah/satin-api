import { env } from "../../config/env";
import { Category } from "../../modals/category.model";
import { GetCategoryHandler } from "../../types/enpoints/category.endpoints";

export const getCategory: GetCategoryHandler = async (req, res, next) => {
  console.log("req.params");
  console.log(req.params.id);
  const categories = await Category.aggregate([
    { $match: { slug: req.params.id } },
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
          $concat: [`${env.apiUrl}/`, "$profileImage"],
        },
        products: 1,
      },
    },
  ]);
  res.status(200).json({ categories: categories[0] });
};
