import { body, header } from "express-validator";
import { isObjectIdOrHexString } from "mongoose";

import { Role } from "../../modals/roles.model";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";

export const update = [
  header("authorization").isString().exists().withMessage("token is required"),
  body("_id")
    .exists()
    .withMessage("Employee Id is missed")
    .custom((value) => isObjectIdOrHexString(value)),
  body("name").optional().isString(),
  body("email").optional().isString(),
  body("phone").optional().isString(),
  body("profileImage").optional(),
  body("state").optional().isString(),
  body("area").optional().isString(),
  body("isOnline").optional().isBoolean(),
  body("branch").optional().isString(),
  body("role")
    .isString()
    .custom(async (value) => {
      const role = await Role.findOne({ _id: value });
      if (!role) throw new Error("There is no Role with this id");
    })
    .optional(),
  globalValidatorMiddleware,
];
