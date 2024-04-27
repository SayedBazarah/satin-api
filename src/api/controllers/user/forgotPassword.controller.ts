import { env } from "../../config/env";
import { ForgotPasswordHandler } from "../../types/enpoints/auth.endpoints";
import { forgetPasswordTemplate } from "../../utils/emailTemplates";
import { generateCode } from "../../utils/crypto";
import { NotFoundError } from "../../errors/notfound-error";
import { sendMail } from "../../utils/mail";
import { User } from "../../modals/user.model";

export const ForgotPassword: ForgotPasswordHandler = async (req, res, next) => {
  const user = await User.findOne({
    $or: [{ email: req.body.email }],
  });

  if (!user) return next(new NotFoundError("not found"));

  const code = generateCode(6);

  user.verificationCode = {
    code: code,
    expireAt: new Date(Date.now() + 10 * 60 * 1000),
    reason: "update-password",
  };
  await user.save();

  const token = Buffer.from(`${user.email}:${code}`).toString("base64");
  const link = `${env.frontUrl}/auth/jwt/reset-password?token=${token}`;

  sendMail({
    to: user.email,
    subject: "request to change your account password",
    html: forgetPasswordTemplate(link),
  });

  res.json({
    message: "success",
  });
};
