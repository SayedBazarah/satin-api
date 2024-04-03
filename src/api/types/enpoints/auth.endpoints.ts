import { RequestHandler } from "express";
import { SuccessResponse } from "../SuccessResponse";
import { AccessableEmployeeData } from "../../modals/employee.model";

type AuthSuccessResponse = {
  accessToken: string;
  user: AccessableEmployeeData;
};

type GetEmployeeResponse = {
  user: AccessableEmployeeData;
};

type GetAllEmployeesResponse = {
  users: AccessableEmployeeData[];
};

export interface SingupHandler
  extends RequestHandler<unknown, SuccessResponse> {}

export interface SinginHandler
  extends RequestHandler<unknown, AuthSuccessResponse> {}

export interface LogoutHandler
  extends RequestHandler<unknown, SuccessResponse> {}

export interface ForgotPasswordHandler
  extends RequestHandler<unknown, SuccessResponse> {}

export interface UpdatePasswordHandler
  extends RequestHandler<unknown, SuccessResponse> {}

export interface tokenValidatorHandler
  extends RequestHandler<unknown, SuccessResponse> {}

export interface GetEmployeeHandler
  extends RequestHandler<{ id: string }, GetEmployeeResponse> {}

export interface GetAllEmployeesHandler
  extends RequestHandler<unknown, GetAllEmployeesResponse> {}

export interface UpdateEmployeeHandler
  extends RequestHandler<unknown, SuccessResponse> {}
export interface DeleteEmployeeHandler
  extends RequestHandler<{ id: string }, SuccessResponse> {}
export interface DeleteEmployeesHandler
  extends RequestHandler<unknown, SuccessResponse> {}
