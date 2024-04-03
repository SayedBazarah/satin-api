import { body, header } from "express-validator";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";

export const signin = [
  body("email").exists().isString().trim().toLowerCase().isEmail(),
  body("password").exists().isString(),
  globalValidatorMiddleware,
];
