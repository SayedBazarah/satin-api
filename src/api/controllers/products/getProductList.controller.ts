import { env } from "../../config/env";
import { BadRequestError } from "../../errors/bad-request-error";
import { Category } from "../../modals/category.model";
import { Product } from "../../modals/product.model";
import { GetProductsListHandler } from "../../types/enpoints/product.endpoints";

export const GetProductsList: GetProductsListHandler = async (
  req,
  res,
  next
) => {
  try {
    const products = await Product.aggregate([
      {
        $lookup: {
          from: "category",
          localField: "category",
          foreignField: "_id",
          as: "category",
        },
      },
      {
        $project: {
          locale: 1,
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

    // find({}).select({
    //   createdAt: 1,
    //   available: 1,
    //   priceSale: 1,
    //   category: 1,
    //   tags: 1,
    //   publish: 1,
    //   quantity: 1,
    //   images: 1,
    //   price: 1,
    //   name: 1,
    //   slug: 1,
    //   coverUrl: 1,
    // });

    return res.status(200).json({ products });
  } catch (error) {
    return next(new BadRequestError(`${error}`));
  }
};
