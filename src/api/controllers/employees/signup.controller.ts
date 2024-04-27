import { Employee } from "../../modals/employee.model";
import { SingupHandler } from "../../types/enpoints/auth.endpoints";
import { hashPwd } from "../../utils/bcrypt";
import { generateCode } from "../../utils/crypto";
import { sendMail } from "../../utils/mail";
import { forgetPasswordTemplate } from "../../utils/emailTemplates";
import { saveFiles } from "../../utils/file";
import { BadRequestError } from "../../errors/bad-request-error";

export const SignupHandler: SingupHandler = async (req, res, next) => {
  if (req.file) {
    saveFiles("images/profiles", req.file);
  }

  const password = generateCode(8);
  const employee = await Employee.create({
    ipAddress: req.ip,
    name: req.body.name,
    email: req.body.email,
    state: req.body.state,
    phone: req.body.phone,
    area: req.body.area,
    role: req.body.role,
    password: await hashPwd(password),
    profileImage: req.file && `media/images/profiles/${req.file?.filename}`,
  });

  if (!employee) {
    return next(
      new BadRequestError("Something want wrong while trying add new employee")
    );
  }

  sendMail({
    to: employee.email,
    subject: "request to change your account password",
    html: forgetPasswordTemplate(password),
  });

  res.status(201).json({ message: "success" });
};
