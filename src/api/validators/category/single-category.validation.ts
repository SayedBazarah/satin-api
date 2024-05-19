import { header, param } from "express-validator";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";

export const SingleCategory = [
  header("authorization"),
  param("id"),
  globalValidatorMiddleware,
];
