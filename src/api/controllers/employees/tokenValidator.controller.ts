import { Employee } from "../../modals/employee.model";
import { BadRequestError } from "../../errors/bad-request-error";
import { tokenValidatorHandler } from "../../types/enpoints/auth.endpoints";

export const tokenValidator: tokenValidatorHandler = async (req, res, next) => {
  const [email, code] = Buffer.from(
    (req.headers["token"] || "").toString(),
    "base64"
  )
    .toString()
    .split(":");

  const employee = await Employee.findOne({ email });

  if (
    !employee ||
    !employee.verificationCode?.code ||
    employee?.verificationCode.code !== code
  )
    return next(new BadRequestError("invalid token"));

  const currentTime = Date.now();
  const expireTime = new Date(
    employee?.verificationCode.expireAt || "0"
  ).getTime();

  if (currentTime > expireTime)
    return next(new BadRequestError("token expired"));

  res.json({ message: "success" });
};
