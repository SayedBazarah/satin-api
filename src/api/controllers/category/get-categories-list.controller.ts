import { env } from "../../config/env";
import { Category } from "../../modals/category.model";
import { GetCategoriesHandler } from "../../types/enpoints/category.endpoints";

export const getCategoriesList: GetCategoriesHandler = async (
  req,
  res,
  next
) => {
  const categories = await Category.aggregate([
    {
      $match: { locale: req.headers["accept-language"] || "ar" },
    },

    {
      $project: {
        slug: 1,
        title: 1,
        coverImage: {
          $concat: [`${env.apiUrl}/`, "$coverImage"],
        },
        icon: {
          $concat: [`${env.apiUrl}/`, "$icon"],
        },
      },
    },
  ]);
  res.status(200).json({ categories });
};
