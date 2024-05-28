import { env } from "../../config/env";
import { BadRequestError } from "../../errors/bad-request-error";
import { Product } from "../../modals/product.model";
import { GetProductsSlugHandler } from "../../types/enpoints/product.endpoints";

export const getProductsSlug: GetProductsSlugHandler = async (
  req,
  res,
  next
) => {
  try {
    const locale = req.headers["accept-language"];

    const slugs = await Product.aggregate([
      {
        $match: {
          publish: true,
          locale,
        },
      },
      {
        $unwind: "$slug",
      },
      {
        $project: {
          _id: 0,
          slug: 1,
        },
      },
    ]);

    return res.status(200).json({ slugs });
  } catch (error) {
    return next(new BadRequestError(`${error}`));
  }
};
