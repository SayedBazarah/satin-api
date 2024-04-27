import { BadRequestError } from "../../errors/bad-request-error";
import { Product } from "../../modals/product.model";
import { GetTagsHandler } from "../../types/enpoints/product.endpoints";

export const GetTag: GetTagsHandler = async (req, res, next) => {
  try {
    const tags = await Product.aggregate([
      { $unwind: "$tags" }, // Deconstruct the array 'tags' into separate documents
      { $group: { _id: null, tags: { $addToSet: "$tags" } } },
      { $project: { _id: 0, tags: 1 } },
    ]);

    return res.status(200).json(tags[0].tags);
  } catch (error) {
    return next(new BadRequestError(`${error}`));
  }
};
