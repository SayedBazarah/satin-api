import { BadRequestError } from "../../errors/bad-request-error";
import { Role } from "../../modals/roles.model";
import { UpdateRoleHandler } from "../../types/enpoints/role.endpoints";

export const UpdateRole: UpdateRoleHandler = async (req, res, next) => {
  const { code, label, permissions } = req.body;

  const role = await Role.findOneAndUpdate(
    {
      code,
    },
    {
      label,
      permissions,
    },
    {
      runValidators: true,
    }
  );

  if (!role)
    return next(
      new BadRequestError("Can not create the role, something went wrong. ")
    );

  return res.json({ message: "success" });
};
