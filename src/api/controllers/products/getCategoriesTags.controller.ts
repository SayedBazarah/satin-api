import { BadRequestError } from "../../errors/bad-request-error";
import { Category } from "../../modals/category.model";
import { Product } from "../../modals/product.model";
import { GetCategoriesTagsHandler } from "../../types/enpoints/product.endpoints";

export const GetCategoriesTags: GetCategoriesTagsHandler = async (
  req,
  res,
  next
) => {
  try {
    const tags = await Product.aggregate([
      { $unwind: "$tags" }, // Deconstruct the array 'tags' into separate documents
      { $group: { _id: null, tags: { $addToSet: "$tags" } } },
      { $project: { _id: 0, tags: 1 } },
    ]);
    const categories = await Category.find({}).select("title");
    return res.status(200).json({ tags: tags[0]?.tags || [], categories });
  } catch (error) {
    return next(new BadRequestError(`${error}`));
  }
};
