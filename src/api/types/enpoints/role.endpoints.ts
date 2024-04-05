import { RequestHandler } from "express";
import { SuccessResponse } from "../SuccessResponse";
import { IRole, PERMISSIONS } from "../../modals/roles.model";

type GetAllRolesResponse = {
  roles: IRole[];
};

type GetAllPermissionsResponse = {
  permissions: Array<PERMISSIONS>;
};

export interface GetAllRoleHandler
  extends RequestHandler<unknown, GetAllRolesResponse> {}

export interface CreateRoleHandler
  extends RequestHandler<unknown, SuccessResponse> {}

export interface RolePermissionsHandler
  extends RequestHandler<unknown, GetAllPermissionsResponse> {}

export interface UpdateRoleHandler
  extends RequestHandler<unknown, SuccessResponse> {}

export interface DeleteRoleHandler
  extends RequestHandler<{ id: string }, SuccessResponse> {}

export interface DeleteRolesHandler
  extends RequestHandler<unknown, SuccessResponse> {}
