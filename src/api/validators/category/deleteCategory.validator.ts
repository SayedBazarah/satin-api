import { body, header, param } from "express-validator";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";

export const DeleteCategories = [
  header("authorization"),
  body("categories").isArray().exists(),
  globalValidatorMiddleware,
];
