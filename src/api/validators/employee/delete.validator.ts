import { body, header, param } from "express-validator";

import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";

export const deleteEmployee = [
  header("authorization").exists().withMessage("Access token required"),
  param("id"),
  globalValidatorMiddleware,
];
