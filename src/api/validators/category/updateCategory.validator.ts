import { body, header, param } from "express-validator";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";
import { Category } from "../../modals/category.model";

export const updateCategory = [
  header("authorization"),
  param("id"),
  body("title"),
  body("slug"),
  globalValidatorMiddleware,
];
