import { Employee } from "../../modals/employee.model";
import { BadRequestError } from "../../errors/bad-request-error";
import { UpdateEmployeeHandler } from "../../types/enpoints/auth.endpoints";

import { env } from "../../config/env";
import { removeFiles, saveFiles } from "../../utils/file";

export const UpdateEmployee: UpdateEmployeeHandler = async (req, res, next) => {
  const employee = await Employee.findOneAndUpdate(
    { _id: req.body._id },
    {
      name: req.body.name,
      email: req.body.email,
      state: req.body.state,
      phone: req.body.phone,
      area: req.body.area,
      role: req.body.role,
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
