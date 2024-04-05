import { body, header } from "express-validator";

import { PERMISSIONS } from "../../modals/roles.model";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";

export const updateRole = [
  header("authorization").exists().withMessage("token required"),
  body("_id").isString(),
  body("label").isString(),
  body("permissions").isArray(),
  body("permissions.*")
    .custom((value) => Object.values(PERMISSIONS).includes(value))
    .isString(),
  globalValidatorMiddleware,
];
