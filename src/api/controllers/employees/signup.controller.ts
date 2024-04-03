import mongoose from "mongoose";
import { Employee } from "../../modals/employee.model";
import { SingupHandler } from "../../types/enpoints/auth.endpoints";
import { hashPwd } from "../../utils/bcrypt";
import { generateCode } from "../../utils/crypto";
import { sendMail } from "../../utils/mail";
import { forgetPasswordTemplate } from "../../utils/emailTemplates";

export const SignupHandler: SingupHandler = async (req, res, next) => {
  console.log("req.body");
  console.log(req.body);

  const password = generateCode(8);
  const employee = await Employee.create({
    name: req.body.name,
    email: req.body.email,
    state: req.body.state,
    phone: req.body.phone,
    area: req.body.area,
    role: req.body.role,
    password: await hashPwd(password),
  });

  if (!employee)
    return next(
      new Error("Something want wrong while trying add new employee")
    );

  sendMail({
    to: employee.email,
    subject: "request to change your account password",
    html: forgetPasswordTemplate(password),
  });

  res.status(201).json({ message: "success" });
};
