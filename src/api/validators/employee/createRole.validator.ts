import { body, header } from "express-validator";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";

export const createRole = [
  header("authorization").exists(),
  body("code").isString().exists(),
  body("label").isString().exists(),
  body("permissions").isArray().exists(),
  body("permissions.*").isString().exists(),
  globalValidatorMiddleware,
];
