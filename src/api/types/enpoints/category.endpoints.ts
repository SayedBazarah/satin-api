import { RequestHandler } from "express";
import { SuccessResponse } from "../SuccessResponse";
import { ICategory } from "../../modals/category.model";
import { IProduct } from "../../modals/product.model";

type GetCategoriesResponse = {
  categories: ICategory[];
};

type GetCategoryResponse = {
  title: string;
  products: IProduct[];
};

export interface CreateCategoryHandler
  extends RequestHandler<unknown, SuccessResponse> {}

export interface GetCategoriesHandler
  extends RequestHandler<unknown, GetCategoriesResponse> {}

export interface GetCategoryHandler
  extends RequestHandler<{ id: string }, GetCategoriesResponse> {}

export interface UpdateCategoryHandler
  extends RequestHandler<unknown, SuccessResponse> {}

export interface DeleteCategoryHandler
  extends RequestHandler<unknown, SuccessResponse> {}
