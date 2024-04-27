import { body, header } from "express-validator";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";
import { Employee } from "../../modals/employee.model";
import { Role } from "../../modals/roles.model";

export const signup = [
  header("authorization").exists(),
  body("name").exists(),
  body("email")
    .custom(async (value) => {
      const employee = await Employee.findOne({ email: value });
      console.log(employee);
      if (employee) throw new Error("already exist");
    })
    .exists()
    .isString()
    .trim()
    .toLowerCase()
    .isEmail(),
  body("profileImage").not().exists(),
  body("state").isString(),
  body("area").isString(),
  body("role")
    .isString()
    .custom(async (value) => {
      const role = await Role.findOne({ _id: value });
      if (!role) throw new Error("There is no Role with this id");
    }),
  globalValidatorMiddleware,
];
