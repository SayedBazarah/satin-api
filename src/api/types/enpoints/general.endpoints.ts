import { RequestHandler } from "express";
import { IProduct } from "../../modals/product.model";
import { SuccessResponse } from "../SuccessResponse";

type LandingPageResponse = {
  carosoul?: IProduct[];
  newProduct?: IProduct[];
  bestSelling?: IProduct[];
  categories?: {
    title: string;
    slug: string;
    coverImage: string;
    products: IProduct[];
  }[];
};

export interface LandingPageHandle
  extends RequestHandler<unknown, LandingPageResponse> {}

export interface WholesaleHandler
  extends RequestHandler<unknown, SuccessResponse> {}
