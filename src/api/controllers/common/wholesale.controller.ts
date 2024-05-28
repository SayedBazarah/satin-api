import { Employee } from "../../modals/employee.model";
import { SingupHandler } from "../../types/enpoints/auth.endpoints";
import { hashPwd } from "../../utils/bcrypt";
import { generateCode } from "../../utils/crypto";
import { sendMail } from "../../utils/mail";
import {
  forgetPasswordTemplate,
  wholesaleRequestTemplate,
} from "../../utils/emailTemplates";
import { saveFiles } from "../../utils/file";
import { BadRequestError } from "../../errors/bad-request-error";
import { env } from "../../config/env";

export const WholesaleHandler: SingupHandler = async (req, res, next) => {
  sendMail({
    to: env.mail.user,
    subject: `Wholesale Request from ${req.body.name}`,
    html: wholesaleRequestTemplate({ ...req.body }),
  });

  res.status(201).json({ message: "success" });
};
