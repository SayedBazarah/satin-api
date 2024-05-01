import { body, header } from "express-validator";

import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";

export const createOrder = [
  header("authorization").exists(),
  body("subTotal").isNumeric().exists(),
  body("shipping").isNumeric().exists(),
  body("discount").isNumeric().exists(),
  body("totalAmount").isNumeric().exists(),
  body("items").isArray().exists(),
  body("billing").isObject().exists(),
  body("customer"),
  globalValidatorMiddleware,
];
