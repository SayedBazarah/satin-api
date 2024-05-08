import { User } from "../../modals/user.model";
import { BadRequestError } from "../../errors/bad-request-error";

import { removeFiles, saveFiles } from "../../utils/file";
import { UpdateUserHandler } from "../../types/enpoints/user.endpoints";

export const UpdateUser: UpdateUserHandler = async (req, res, next) => {
  const user = await User.findOneAndUpdate(
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

  if (!user)
    return next(new BadRequestError("something want wrong while updating."));

  if (req.file) {
    if (user.profileImage) {
      removeFiles(user.profileImage);
    }
    saveFiles("images/profiles", req.file);
  }
  res.status(200).json({
    message: "success",
  });
};
