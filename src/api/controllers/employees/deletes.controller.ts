import { Employee } from "../../modals/employee.model";
import { BadRequestError } from "../../errors/bad-request-error";
import { DeleteEmployeesHandler } from "../../types/enpoints/auth.endpoints";

export const DeleteEmployees: DeleteEmployeesHandler = async (
  req,
  res,
  next
) => {
  const employees = await Employee.deleteMany({
    _id: { $in: req.body.employees },
  });

  if (!employees)
    return next(new BadRequestError("something want wrong while updating."));

  res.json({
    message: "success",
  });
};
