import { header, param } from "express-validator";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";
import { isObjectIdOrHexString } from "mongoose";

export const me = [
  header("authorization").exists(),
  param("id")
    .exists()
    .withMessage("Employee id is required")
    .custom((value) => isObjectIdOrHexString(value)),
  globalValidatorMiddleware,
];
