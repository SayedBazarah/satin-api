import { RequestHandler } from "express";
import { IProduct } from "../../modals/product.model";

type LandingPageResponse = {
  carosoul: IProduct[];
  trendy: IProduct[];
  categories: {
    title: string;
    slug: string;
    coverImage: string;
    products: IProduct[];
  }[];
};

export interface LandingPageHandle
  extends RequestHandler<unknown, LandingPageResponse> {}
