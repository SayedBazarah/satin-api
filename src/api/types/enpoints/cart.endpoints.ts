import { RequestHandler } from "express";
import { SuccessResponse } from "../SuccessResponse";
import { IProduct } from "../../modals/product.model";

type CartResponse = {
  cart: {
    id: string;
    subTotal: number;
    activeStep: number;
    products: {
      quantity: number;
      subTotal: number;
      product: IProduct;
    }[];
  };
};

export interface GetUserCart extends RequestHandler<unknown, CartResponse> {}

export interface UpdateUserCart
  extends RequestHandler<unknown, SuccessResponse> {}
