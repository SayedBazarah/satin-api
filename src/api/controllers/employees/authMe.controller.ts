import { Employee } from "../../modals/employee.model";
import { GetEmployeeHandler } from "../../types/enpoints/auth.endpoints";

export const AuthMe: GetEmployeeHandler = async (req, res, next) => {
  const employee = await Employee.findOne({
    token: req.headers["authorization"]?.split(" ")[1],
  }).populate("role");

  if (!employee) {
    res.status(401);
    return next(new Error("token expired"));
  }

  res.status(200).json({
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
      notification: employee.notification,
    },
  });
};
