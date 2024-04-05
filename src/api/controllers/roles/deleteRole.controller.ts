import { BadRequestError } from "../../errors/bad-request-error";
import { Role } from "../../modals/roles.model";
import { DeleteRoleHandler } from "../../types/enpoints/role.endpoints";

export const DeleteRole: DeleteRoleHandler = async (req, res, next) => {
  const role = await Role.findOneAndDelete({ _id: req.params.id });
  if (!role) return next(new BadRequestError("something went wrong."));

  return res.json({ message: "success" });
};
