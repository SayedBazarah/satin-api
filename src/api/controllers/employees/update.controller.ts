import { Employee } from "../../modals/employee.model";
import { BadRequestError } from "../../errors/bad-request-error";
import { UpdateEmployeeHandler } from "../../types/enpoints/auth.endpoints";

import { removeFiles, saveFiles } from "../../utils/file";

export const UpdateEmployee: UpdateEmployeeHandler = async (req, res, next) => {
  const employee = await Employee.findOneAndUpdate(
    { _id: req.body._id },
    {
      ...req.body,
      profileImage: req.file && `media/images/profiles/${req.file?.filename}`,
    },
    { runValidators: true }
  );

  if (!employee)
    return next(new BadRequestError("something want wrong while updating."));

  if (req.file) {
    if (employee.profileImage) {
      removeFiles(employee.profileImage);
    }
    saveFiles("images/profiles", req.file);
  }
  res.json({
    message: "success",
  });
};
