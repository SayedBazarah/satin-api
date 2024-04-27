import { env } from "../../config/env";
import { BadRequestError } from "../../errors/bad-request-error";
import { Product } from "../../modals/product.model";
import { GetSingleProductHandler } from "../../types/enpoints/product.endpoints";

export const GetSingleProduct: GetSingleProductHandler = async (
  req,
  res,
  next
) => {
  try {
    const product = await Product.aggregate([
      {
        $match: { slug: req.params.slug },
      },
      {
        $lookup: {
          from: "category", // Name of the collection to join with
          localField: "category", // Field from the current collection
          foreignField: "_id", // Field from the collection to join with
          as: "category", // Name of the field to add to each document
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          sku: 1,
          code: 1,
          slug: 1,
          price: 1,
          taxes: 1,
          tags: 1,
          gender: 1,
          sizes: 1,
          publish: 1,
          colors: 1,
          quantity: 1,
          category: 1,

          totalSold: 1,
          description: 1,
          inventoryType: 1,
          subDescription: 1,
          priceSale: 1,
          saleLabel: 1,
          newLabel: 1,
          available: {
            $subtract: ["$quantity", "$totalSold"],
          },
          images: {
            $map: {
              input: "$images", // Input array
              as: "item", // Alias for each array element
              in: {
                // Concatenate "http://" with each item of the array
                $concat: [`${env.apiUrl}`, "/", "$$item"],
              },
            },
          },
        },
      },
    ]);
    return res.status(200).json({ product: product[0] });
  } catch (error) {
    return next(new BadRequestError(`${error}`));
  }
};
