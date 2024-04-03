import { Employee } from "../../modals/employee.model";
import { UpdatePasswordHandler } from "../../types/enpoints/auth.endpoints";

import { hashCode } from "../../utils/crypto";

import { BadRequestError } from "../../errors/bad-request-error";
import { UnauthorizedError } from "../../errors/unauthorized-error";
import { hashPwd } from "../../utils/bcrypt";

export const UpdatePassword: UpdatePasswordHandler = async (req, res, next) => {
  const [email, code] = Buffer.from(
    (req.headers["token"] || "").toString(),
    "base64"
  )
    .toString()
    .split(":");

  const employee = await Employee.findOne({ email });
  if (!employee) return next(new BadRequestError("Employee not found"));
  console.log("UpdatePassword: employee");
  console.log(employee);
  if (!employee.verificationCode?.code) return next(new UnauthorizedError());
  const currentTime = Date.now();
  const expireTime = new Date(
    employee.verificationCode.expireAt || "0"
  ).getTime();
  if (currentTime > expireTime)
    return next(new BadRequestError("token expired"));
  if (employee.verificationCode.code !== code)
    return next(new BadRequestError("invalid code"));

  employee.verificationCode.code = undefined;
  employee.verificationCode.expireAt = undefined;
  if (employee.verificationCode?.reason === "update-password")
    employee.verificationCode.reason = "update-password-verified";

  const { password, confirm } = req.body;

  if (password !== confirm)
    return next(new BadRequestError("password must be matched"));

  employee.password = await hashPwd(password);

  await employee.save();

  res.json({ message: "success" });
};
