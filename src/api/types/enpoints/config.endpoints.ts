import { RequestHandler } from "express";
import { SuccessResponse } from "../SuccessResponse";
import { IConfig, INavItem } from "../../modals/config.model";

type NavItemResponse = {
  nav: {
    subheader: string;
    items: INavItem[];
  }[];
};
type ConfigResponse = {
  config: IConfig | null;
};

export interface UpdateNavItem
  extends RequestHandler<unknown, SuccessResponse> {}

export interface GetCongif extends RequestHandler<unknown, ConfigResponse> {}

export interface GetNavItem extends RequestHandler<unknown, NavItemResponse> {}
