import { BadRequestError } from "../../errors/bad-request-error";
import { Product } from "../../modals/product.model";
import { GetNavLinksHandler } from "../../types/enpoints/product.endpoints";

export const GetNavLinks: GetNavLinksHandler = async (req, res, next) => {
  try {
    // const products = await Product.find({ tags: { $in: req.params.tag } });

    const products = await Product.aggregate([
      { $match: { locale: req.headers["accept-language"] } },
      { $unwind: "$tags" }, // Deconstruct the array 'tags' into separate documents
      { $group: { _id: null, tags: { $addToSet: "$tags" } } },
      { $project: { _id: 0, tags: 1 } },
    ]);

    const tags = products[0].tags.map((item: string) => ({
      title: item,
      slug: item.replace(/\s/g, "-").toLowerCase().toString(),
    }));

    return res.status(200).json({ tags });
  } catch (error) {
    return next(new BadRequestError(`${error}`));
  }
};
