import { header } from "express-validator";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";

export const tokenValidator = [
  header("token").exists(),
  globalValidatorMiddleware,
];
