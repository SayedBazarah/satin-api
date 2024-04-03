import { Role } from "../../modals/roles.model";
import { GetAllRoleHandler } from "../../types/enpoints/role.endpoints";

export const GetRoles: GetAllRoleHandler = async (req, res, next) => {
  const roles = await Role.find({});

  res.status(200).json({ roles });
};
