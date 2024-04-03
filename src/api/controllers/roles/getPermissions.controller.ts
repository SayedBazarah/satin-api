import { BadRequestError } from "../../errors/bad-request-error";
import { PERMISSIONS, Role } from "../../modals/roles.model";
import { RolePermissionsHandler } from "../../types/enpoints/role.endpoints";

export const GetPermissions: RolePermissionsHandler = async (req, res, next) =>
  res.json({ permissions: Object.values(PERMISSIONS) });
