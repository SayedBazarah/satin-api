import { BadRequestError } from "../../errors/bad-request-error";
import { tokenValidatorHandler } from "../../types/enpoints/auth.endpoints";
import { User } from "../../modals/user.model";

export const tokenValidator: tokenValidatorHandler = async (req, res, next) => {
  const [email, code] = Buffer.from(
    (req.headers["token"] || "").toString(),
    "base64"
  )
    .toString()
    .split(":");

  const user = await User.findOne({ email });

  if (
    !user ||
    !user.verificationCode?.code ||
    user?.verificationCode.code !== code
  )
    return next(new BadRequestError("invalid token"));

  const currentTime = Date.now();
  const expireTime = new Date(user?.verificationCode.expireAt || "0").getTime();

  if (currentTime > expireTime)
    return next(new BadRequestError("token expired"));

  res.json({ message: "success" });
};
