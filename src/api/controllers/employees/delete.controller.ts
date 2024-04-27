import { Employee } from "../../modals/employee.model";
import { BadRequestError } from "../../errors/bad-request-error";
import { DeleteEmployeeHandler } from "../../types/enpoints/auth.endpoints";
import { removeFiles } from "../../utils/file";

export const DeleteEmployee: DeleteEmployeeHandler = async (req, res, next) => {
  const employee = await Employee.findOneAndDelete({ _id: req.params.id });

  if (!employee)
    return next(new BadRequestError("something want wrong while updating."));

  removeFiles(employee.profileImage);

  res.json({
    message: "success",
  });
};
