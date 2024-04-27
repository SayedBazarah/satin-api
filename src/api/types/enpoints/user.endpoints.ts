import { RequestHandler } from "express";
import { SuccessResponse } from "../SuccessResponse";
import { AccessableUserData } from "../../modals/user.model";

type AuthSuccessResponse = {
  accessToken: string;
  user: AccessableUserData;
};

type GetUserResponse = {
  user: AccessableUserData;
};

type GetAllUsersResponse = {
  users: AccessableUserData[];
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

export interface GetUserHandler
  extends RequestHandler<{ id: string }, GetUserResponse> {}

export interface GetAllUsersHandler
  extends RequestHandler<unknown, GetAllUsersResponse> {}

export interface UpdateUserHandler
  extends RequestHandler<unknown, SuccessResponse> {}
export interface DeleteUserHandler
  extends RequestHandler<{ id: string }, SuccessResponse> {}
export interface DeleteUsersHandler
  extends RequestHandler<unknown, SuccessResponse> {}
