import { header } from "express-validator";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";

export const authorizationValidator = [
  header("authorization").exists(),
  globalValidatorMiddleware,
];
