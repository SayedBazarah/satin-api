import { Role } from "../../modals/roles.model";
import { BadRequestError } from "../../errors/bad-request-error";
import { DeleteRolesHandler } from "../../types/enpoints/role.endpoints";

export const DeleteRoles: DeleteRolesHandler = async (req, res, next) => {
  console.log("DeleteRole");
  console.log(req.body.roles);
  const roles = await Role.deleteMany({
    _id: { $in: req.body.roles },
  });

  if (!roles)
    return next(new BadRequestError("something want wrong while updating."));

  res.json({
    message: "success",
  });
};
