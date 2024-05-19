import { Category } from "../../modals/category.model";

import { DeleteCategoryHandler } from "../../types/enpoints/category.endpoints";

import { removeFiles } from "../../utils/file";
import { BadRequestError } from "../../errors/bad-request-error";

export const DeleteCategories: DeleteCategoryHandler = async (
  req,
  res,
  next
) => {
  try {
    const categories = await Category.find({
      _id: { $in: req.body.categories },
    });

    await Category.deleteMany(
      {
        _id: { $in: req.body.categories },
      },
      {}
    ).exec();

    // remove categories resourses
    categories.forEach((category) => {
      removeFiles(category.coverImage);
    });

    return res.status(200).json({ message: "success" });
  } catch (error) {
    return next(new BadRequestError(`${error}`));
  }
};
