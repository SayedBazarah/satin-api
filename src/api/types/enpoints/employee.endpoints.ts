import { RequestHandler } from "express";
import { AccessableEmployeeData } from "../../modals/employee.model";
import { SuccessResponse } from "../SuccessResponse";

export type GetAllEmployeesResponse = {
  users: AccessableEmployeeData[];
};

export type GetAllRolesResponse = {
  roles: AccessableEmployeeData[];
};
