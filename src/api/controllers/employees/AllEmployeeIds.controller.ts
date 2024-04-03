import { Employee } from "../../modals/employee.model";
import { GetAllEmployeesHandler } from "../../types/enpoints/auth.endpoints";

export const AllEmployeesIdHandler: GetAllEmployeesHandler = async (
  req,
  res,
  next
) => {
  const users = await Employee.find({}).select("_id");

  res.status(200).json({ users });
};
