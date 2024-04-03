import { Employee } from "../../modals/employee.model";
import { GetAllEmployeesHandler } from "../../types/enpoints/auth.endpoints";

export const AllEmployeesHandler: GetAllEmployeesHandler = async (
  req,
  res,
  next
) => {
  const users = await Employee.find({})
    .select("id name email phone profileImage region city isOnline role")
    .populate("role");

  res.status(200).json({ users });
};
