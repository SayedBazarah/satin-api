import { body, header } from "express-validator";

import { PERMISSIONS, Role } from "../../modals/roles.model";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";

export const createRole = [
  header("authorization").exists().withMessage("token required"),
  body("label")
    .isString()

    .exists()
    .withMessage("label required")
    .custom(async (value) => {
      console.log(value);
      const role = await Role.findOne({ label: value });
      console.log(role);
      if (role) throw new Error("Role already exist");
    }),
  body("permissions").isArray().exists().withMessage("permissions required"),
  body("permissions.*")
    .custom((value) => Object.values(PERMISSIONS).includes(value))
    .isString(),
  globalValidatorMiddleware,
];
