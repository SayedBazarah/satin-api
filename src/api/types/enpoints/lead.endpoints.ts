import { RequestHandler } from "express";

type GetLeadsResponse = {
  leads: {
    columns: {};
    ordered: [];
    leads: {};
  };
};

export interface GetLeadsHandler
  extends RequestHandler<unknown, GetLeadsResponse> {}
