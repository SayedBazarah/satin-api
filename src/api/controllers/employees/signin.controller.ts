import { BadRequestError } from "../../errors/bad-request-error";
import { Employee } from "../../modals/employee.model";
import { SinginHandler } from "../../types/enpoints/auth.endpoints";
import { comparePwd } from "../../utils/bcrypt";
import { generateToken } from "../../utils/token";

export const SigninHandler: SinginHandler = async (req, res, next) => {
  const employee = await Employee.findOne({
    email: req.body.email,
  });

  const isMatch = await comparePwd(req.body.password, employee?.password || "");

  if (!employee || !isMatch)
    return next(new BadRequestError("Email or password is wrong"));

  const token = generateToken({
    email: employee.email,
    id: employee._id.toString(),
    name: employee.name,
    profileImage: employee?.profileImage || "",
  });
  employee.token = token;
  employee.ipAddress = req.ip || employee.ipAddress;
  await employee.save();

  res.json({
    accessToken: token,
    user: {
      _id: employee._id,
      email: employee.email,
      name: employee.name,
      profileImage: employee.profileImage,
      role: employee.role,
      area: employee.area,
      state: employee.state,
      isOnline: employee.isOnline,
      phone: employee.phone,
    },
  });
};
