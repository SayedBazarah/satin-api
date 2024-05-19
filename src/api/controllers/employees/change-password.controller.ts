import { Employee } from "../../modals/employee.model";
import { UpdatePasswordHandler } from "../../types/enpoints/auth.endpoints";

import { BadRequestError } from "../../errors/bad-request-error";
import { UnauthorizedError } from "../../errors/unauthorized-error";
import { comparePwd, hashPwd } from "../../utils/bcrypt";

export const ChangePassword: UpdatePasswordHandler = async (req, res, next) => {
  const { password, newPassword, confirm } = req.body;

  const employee = await Employee.findOne({
    token: req.headers["authorization"]?.split(" ")[1],
  });

  if (!employee) return next(new BadRequestError("Employee not found"));

  if (newPassword !== confirm)
    return next(new BadRequestError("password must be matched"));

  const isMatch = await comparePwd(password, employee.password || "");

  if (!!!isMatch) return next(new BadRequestError("old password is wrong"));

  employee.password = await hashPwd(newPassword);
  employee.token = "";

  await employee.save();
  console.log("Success Change Password");
  res.json({ message: "success" });
};
