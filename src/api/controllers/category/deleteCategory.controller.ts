import { removeFiles } from "../../utils/file";

import { Category } from "../../modals/category.model";

import { BadRequestError } from "../../errors/bad-request-error";
import { DeleteCategoryHandler } from "../../types/enpoints/category.endpoints";

export const deleteCategory: DeleteCategoryHandler = async (req, res, next) => {
  const category = await Category.findOneAndDelete({
    _id: req.params.id,
  });

  if (!category) return next(new BadRequestError("something want wrong"));

  if (category.coverImage) {
    removeFiles(category.coverImage);
  }

  return res.status(200).json({ message: "success" });
};
