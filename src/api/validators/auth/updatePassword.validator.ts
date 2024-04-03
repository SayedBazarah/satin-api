import { header, body } from "express-validator";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";

export const updatePassword = [
  header("token").exists(),
  body("password").exists().isString(),
  body("confirm").exists().isString(),
  globalValidatorMiddleware,
];
