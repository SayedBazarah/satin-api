import { header, param } from "express-validator";

import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";

export const getOrderDetails = [
  header("authorization").exists(),
  param("id").exists(),
  globalValidatorMiddleware,
];
