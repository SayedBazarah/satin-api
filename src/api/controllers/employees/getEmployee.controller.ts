import { NotFoundError } from "../../errors/notfound-error";
import { Employee } from "../../modals/employee.model";
import { GetEmployeeHandler } from "../../types/enpoints/auth.endpoints";
import { generateToken } from "../../utils/token";

export const GetEmployee: GetEmployeeHandler = async (req, res, next) => {
  const employee = await Employee.findOne({
    _id: req.params.id,
  }).populate("role");

  if (!employee) return next(new NotFoundError("no employee with this is."));

  res.json({
    user: {
      _id: employee._id,
      email: employee.email,
      name: employee.name,
      profileImage: employee.profileImage,
      role: employee.role,
      isOnline: employee.isOnline,
      phone: employee.phone,
      area: employee.area,
      state: employee.state,
    },
  });
};
