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

type CountryResponse = {
  code: string;
};

export interface UpdateNavItem
  extends RequestHandler<unknown, SuccessResponse> {}

export interface GetCongif extends RequestHandler<unknown, ConfigResponse> {}

export interface GetCountryHandler
  extends RequestHandler<unknown, CountryResponse> {}

export interface GetNavItem extends RequestHandler<unknown, NavItemResponse> {}
