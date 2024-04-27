import { body, header } from "express-validator";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";
import { Category } from "../../modals/category.model";

export const updateCategory = [
  header("authorization"),
  body("_id"),
  body("title"),
  body("slug"),
  globalValidatorMiddleware,
];
