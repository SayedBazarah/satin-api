import { body, header } from "express-validator";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";

export const deleteRoles = [
  header("authorization").exists().withMessage("Access token required"),
  body("roles").isArray(),
  globalValidatorMiddleware,
];
