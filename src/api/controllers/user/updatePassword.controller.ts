import { Employee } from "../../modals/employee.model";
import { UpdatePasswordHandler } from "../../types/enpoints/auth.endpoints";

import { hashCode } from "../../utils/crypto";

import { BadRequestError } from "../../errors/bad-request-error";
import { UnauthorizedError } from "../../errors/unauthorized-error";
import { hashPwd } from "../../utils/bcrypt";
import { User } from "../../modals/user.model";

export const UpdatePassword: UpdatePasswordHandler = async (req, res, next) => {
  const [email, code] = Buffer.from(
    (req.headers["token"] || "").toString(),
    "base64"
  )
    .toString()
    .split(":");

  const user = await User.findOne({ email });
  if (!user) return next(new BadRequestError("user not found"));
  if (!user.verificationCode?.code) return next(new UnauthorizedError());
  console.log(user.verificationCode);
  const currentTime = Date.now();
  const expireTime = new Date(user.verificationCode.expireAt || "0").getTime();
  if (currentTime > expireTime)
    return next(new BadRequestError("token expired"));
  if (user.verificationCode.code !== code)
    return next(new BadRequestError("invalid code"));

  user.verificationCode.code = undefined;
  user.verificationCode.expireAt = undefined;
  if (user.verificationCode?.reason === "update-password")
    user.verificationCode.reason = "update-password-verified";

  const { password, confirm } = req.body;

  if (password !== confirm)
    return next(new BadRequestError("password must be matched"));

  user.password = await hashPwd(password);

  await user.save();

  res.json({ message: "success" });
};
