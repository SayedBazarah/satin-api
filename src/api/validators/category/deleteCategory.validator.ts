import { header } from "express-validator";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";

export const deleteCategory = [
  header("authorization"),
  globalValidatorMiddleware,
];
