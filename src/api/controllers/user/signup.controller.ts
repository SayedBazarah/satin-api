import { SingupHandler } from "../../types/enpoints/auth.endpoints";
import { hashPwd } from "../../utils/bcrypt";
import { generateCode } from "../../utils/crypto";
import { sendMail } from "../../utils/mail";
import { forgetPasswordTemplate } from "../../utils/emailTemplates";
import { BadRequestError } from "../../errors/bad-request-error";
import { User } from "../../modals/user.model";

export const SignupHandler: SingupHandler = async (req, res, next) => {
  const user = await User.create({
    ...req.body,
    password: await hashPwd(req.body.password),
  });

  if (!user) {
    return next(
      new BadRequestError("Something want wrong while trying add new user")
    );
  }

  sendMail({
    to: user.email,
    subject: "request to change your account password",
    html: forgetPasswordTemplate(""),
  });

  res.status(201).json({ message: "success" });
};
