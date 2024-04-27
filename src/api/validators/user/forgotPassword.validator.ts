import { body } from "express-validator";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";

export const forgotPassword = [
  body("email").toLowerCase(),
  body("phone"),
  globalValidatorMiddleware,
];
