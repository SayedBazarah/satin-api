import { body } from "express-validator";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";
import { Employee } from "../../modals/employee.model";
import { Role } from "../../modals/roles.model";
import { Request, Response, NextFunction } from "express";

export const signup = [
  (req: Request, res: Response, next: NextFunction) => {
    console.log("req.body");
    console.log(req.body);
    console.log(req.files);
    next();
  },
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
  body("state").isString(),
  body("phone").isString(),
  body("area").isString(),
  body("role")
    .isString()
    .custom(async (value) => {
      const role = await Role.findOne({ _id: value });
      if (!role) throw new Error("There is no Role with this id");
    }),
  globalValidatorMiddleware,
];
