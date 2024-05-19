import { BadRequestError } from "../../errors/bad-request-error";
import { Category } from "../../modals/category.model";
import { UpdateCategoryHandler } from "../../types/enpoints/category.endpoints";
import { removeFiles, saveFiles } from "../../utils/file";

export const updateCategory: UpdateCategoryHandler = async (req, res, next) => {
  const category = await Category.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      ...req.body,
      ...(req.body.slug && {
        slug: (req.body.slug as string).replace(/ /g, "-").toLowerCase(),
      }),
      coverImage: req.file && `media/images/categories/${req.file?.filename}`,
    },
    {
      runValidators: true,
    }
  );

  if (!category) return next(new BadRequestError("something want wrong"));

  if (req.file) {
    removeFiles(category.coverImage);
    saveFiles("images/categories", req.file);
  }

  return res.status(200).json({ message: "success" });
};
