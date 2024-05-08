import { body, header, param } from "express-validator";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";

export const subscribeValidator = [
  header("authorization").exists(),
  param("id").exists(),
  body("subscribe").exists(),
  globalValidatorMiddleware,
];
