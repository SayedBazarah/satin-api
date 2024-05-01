import { body, header, param } from "express-validator";

import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";

export const updateOrder = [
  header("authorization").exists(),
  param("id"),
  body("status").isObject(),
  globalValidatorMiddleware,
];
