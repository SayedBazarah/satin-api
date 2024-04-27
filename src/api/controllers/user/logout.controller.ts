import { BadRequestError } from "../../errors/bad-request-error";
import { Employee } from "../../modals/employee.model";
import { LogoutHandler } from "../../types/enpoints/auth.endpoints";

export const Logout: LogoutHandler = async (req, res, next) => {
  const [email] = Buffer.from((req.headers["token"] || "").toString(), "base64")
    .toString()
    .split(":");

  const employee = await Employee.findOne({ email });

  if (!employee)
    return next(new BadRequestError("Token or employee already loged out"));

  employee.token = "";

  await employee.save();

  res.json({ message: "success" });
};
