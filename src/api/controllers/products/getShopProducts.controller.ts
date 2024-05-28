import { Product } from "../../modals/product.model";
import { BadRequestError } from "../../errors/bad-request-error";
import { GetProductsListHandler } from "../../types/enpoints/product.endpoints";
import { env } from "../../config/env";

export const GetShopProductsProduct: GetProductsListHandler = async (
  req,
  res,
  next
) => {
  try {
    const locale = req.headers["accept-language"];

    const products = await Product.aggregate([
      {
        $match: { publish: true, locale },
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
