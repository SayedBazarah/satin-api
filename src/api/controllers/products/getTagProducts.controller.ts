import { BadRequestError } from "../../errors/bad-request-error";
import { Product } from "../../modals/product.model";
import { GetTagProductsHandler } from "../../types/enpoints/product.endpoints";

export const GetTagProduct: GetTagProductsHandler = async (req, res, next) => {
  try {
    // const products = await Product.find({ tags: { $in: req.params.tag } });

    const searchTerm = req.params.tag;
    const regex = new RegExp(searchTerm.replace(/-/g, " "), "i");

    const products = await Product.aggregate([
      { $match: { locale: req.headers["accept-language"] } },
      {
        $unwind: "$tags", // Deconstruct the tags array
      },
      {
        $match: {
          tags: { $regex: regex }, // Case-insensitive regex match
        },
      },
    ]);

    return res.status(200).json({ products });
  } catch (error) {
    return next(new BadRequestError(`${error}`));
  }
};
