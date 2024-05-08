import { env } from "../../config/env";
import { Employee } from "../../modals/employee.model";
import { ForgotPasswordHandler } from "../../types/enpoints/auth.endpoints";
import { forgetPasswordTemplate } from "../../utils/emailTemplates";
import { generateCode } from "../../utils/crypto";
import { NotFoundError } from "../../errors/notfound-error";
import { sendMail } from "../../utils/mail";

export const ForgotPassword: ForgotPasswordHandler = async (req, res, next) => {
  const employee = await Employee.findOne({
    email: req.body.email,
  });

  if (!employee) return next(new NotFoundError("not found"));

  const code = generateCode(6);

  employee.verificationCode = {
    code: code,
    expireAt: new Date(Date.now() + 100 * 60 * 1000),
    reason: "update-password",
  };
  await employee.save();

  const token = Buffer.from(`${employee.email}:${code}`).toString("base64");
  const link = `${env.dashboardUrl}/auth/jwt/reset-password?token=${token}`;

  sendMail({
    to: employee.email,
    subject: "request to change your account password",
    html: forgetPasswordTemplate(link),
  });

  console.log("ForgotPassword: employee");
  console.log(employee);
  res.json({
    message: "success",
  });
};
