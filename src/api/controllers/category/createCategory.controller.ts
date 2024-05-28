import { BadRequestError } from "../../errors/bad-request-error";
import { Category } from "../../modals/category.model";
import { CreateCategoryHandler } from "../../types/enpoints/category.endpoints";
import { saveFiles } from "../../utils/file";

export const createCategory: CreateCategoryHandler = async (req, res, next) => {
  const { title, slug } = req.body;

  const files = req.files as unknown as {
    [key: string]: Express.Multer.File[];
  };

  const icon = files["icon"][0];

  const coverImage = files["coverImage"][0];

  const locale = req.headers["accept-language"];

  if (!icon || !coverImage)
    return next(new BadRequestError("icon & cover image are needed"));

  const category = await Category.create({
    locale,
    title: title,
    slug: (slug as string).replace(/ /g, "-").toLowerCase(),
    coverImage: `media/images/categories/${files["coverImage"][0].filename}`,
    icon: `media/images/categories/${files["icon"][0].filename}`,
  });

  if (!category) return next(new BadRequestError("something want wrong"));

  saveFiles("images/categories", icon, coverImage);

  return res.status(201).json({ message: "success" });
};
