import { body, header } from "express-validator";

import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";

export const deleteRole = [
  header("authorization").exists().withMessage("Access token required"),
  body("id").exists().withMessage("Role id is missing"),
  globalValidatorMiddleware,
];
