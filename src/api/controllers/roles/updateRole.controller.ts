import { BadRequestError } from "../../errors/bad-request-error";
import { Role } from "../../modals/roles.model";
import { UpdateRoleHandler } from "../../types/enpoints/role.endpoints";

export const UpdateRole: UpdateRoleHandler = async (req, res, next) => {
  try {
    const { _id, label, permissions } = req.body;
    await Role.findOneAndUpdate(
      {
        _id,
      },
      {
        label,
        permissions,
      },
      {
        runValidators: true,
      }
    );
    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    return next(new BadRequestError("Could not update the role"));
  }
};
