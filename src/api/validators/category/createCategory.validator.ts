import { body, header } from "express-validator";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";
import { Category } from "../../modals/category.model";

export const createCategory = [
  header("authorization"),
  body("title").exists().isString(),
  body("slug")
    .exists()
    .isString()
    .custom(async (value) => {
      const category = await Category.findOne({ slug: value });
      console.log(category);
      if (category) throw new Error("there is a category with the same slug.");
    }),
  globalValidatorMiddleware,
];
