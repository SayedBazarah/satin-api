import { BadRequestError } from "../../errors/bad-request-error";
import { Category } from "../../modals/category.model";
import { CreateCategoryHandler } from "../../types/enpoints/category.endpoints";
import { saveFiles } from "../../utils/file";

export const createCategory: CreateCategoryHandler = async (req, res, next) => {
  const { title, slug } = req.body;
  console.log("req.file");
  console.log(req.file);
  const category = await Category.create({
    title: title,
    slug: (slug as string).replace(/ /g, "-").toLowerCase(),
    coverImage: req.file && `media/images/categories/${req.file?.filename}`,
  });

  if (!category) return next(new BadRequestError("something want wrong"));

  if (req.file) saveFiles("images/categories", req.file);

  return res.status(201).json({ message: "success" });
};
