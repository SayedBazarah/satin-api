import { Employee } from "../../modals/employee.model";
import { BadRequestError } from "../../errors/bad-request-error";
import { UpdateEmployeeHandler } from "../../types/enpoints/auth.endpoints";
import { storeBase64File } from "../../utils/write-files";
import { profileImagePath } from "../../utils/multer";
import path from "path";
import { env } from "../../config/env";

export const UpdateEmployee: UpdateEmployeeHandler = async (req, res, next) => {
  console.log("req.body");
  console.log(req.body);

  // const employee = await Employee.findOneAndUpdate(
  //   { _id: req.body._id },
  //   {
  //     name: req.body.name,
  //     email: req.body.email,
  //     state: req.body.state,
  //     phone: req.body.phone,
  //     area: req.body.area,
  //     role: req.body.role,
  //     profileImage:
  //       req.file?.path &&
  //       `${env.apiUrl}/${req.file?.destination}/${req.file.filename}`,
  //   },
  //   { runValidators: true }
  // );

  // if (!employee)
  //   return next(new BadRequestError("something want wrong while updating."));
  return next();
  res.json({
    message: "success",
  });
};
