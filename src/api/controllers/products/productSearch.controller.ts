import { Product } from "../../modals/product.model";
import { BadRequestError } from "../../errors/bad-request-error";
import { ProductSearchHandler } from "../../types/enpoints/product.endpoints";
import { env } from "../../config/env";

export const ProductSearch: ProductSearchHandler = async (req, res, next) => {
  try {
    const products = await Product.aggregate([
      {
        $match: { publish: true, name: new RegExp(req.params.query, "i") },
      },
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
    ]);

    return res.status(200).json({ products });
  } catch (error) {
    return next(new BadRequestError(`${error}`));
  }
};
