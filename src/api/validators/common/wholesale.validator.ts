import { body, header } from "express-validator";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";

export const wholesaleValidator = [
  header("authorization"),
  body("name").exists(),
  body("email").exists(),
  body("phone").exists(),
  body("business"),
  body("address").exists(),
  body("message").exists(),
  globalValidatorMiddleware,
];
