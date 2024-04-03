import { BadRequestError } from "../../errors/bad-request-error";
import { Role } from "../../modals/roles.model";
import { DeleteRoleHandler } from "../../types/enpoints/role.endpoints";

export const DeleteRole: DeleteRoleHandler = async (req, res, next) => {
  const { id } = req.params;
  console.log("id");
  console.log(id);
  const role = await Role.findOneAndDelete({ _id: id });

  if (!role) return next(new BadRequestError("something went wrong."));

  return res.json({ message: "success" });
};
