import { body, header } from "express-validator";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";

export const signin = [
  body("email").toLowerCase(),
  body("phone"),
  body("password").exists().isString(),
  globalValidatorMiddleware,
];
