import { body, header } from "express-validator";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";

export const deleteEmployees = [
  header("authorization").exists().withMessage("Access token required"),
  body("employees").isArray(),
  globalValidatorMiddleware,
];
