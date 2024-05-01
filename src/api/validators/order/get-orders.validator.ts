import { header } from "express-validator";

import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";

export const getOrders = [
  header("authorization").exists(),
  globalValidatorMiddleware,
];
