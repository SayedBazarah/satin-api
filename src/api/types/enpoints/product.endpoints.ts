import { RequestHandler } from "express";
import { SuccessResponse } from "../SuccessResponse";
import { IProduct } from "../../modals/product.model";
import { ICategory } from "../../modals/category.model";

type ProductsResponse = {
  products: IProduct[];
};

type ProductResponse = {
  product: IProduct | null;
};

type TagsResponse = {
  tags: string[];
};

type CategoriesTagsResponse = {
  categories: ICategory[];
  tags: string[];
};

type SlugsResponse = {
  slugs: string[];
};

type NavTags = {
  tags: {
    id: string;
    label: string;
  }[];
};

export interface CreateProductHandler
  extends RequestHandler<unknown, SuccessResponse> {}

export interface UpdateProductHandler
  extends RequestHandler<{ id: string }, SuccessResponse> {}

export interface DeleteProductHandler
  extends RequestHandler<{ id: string }, SuccessResponse> {}

export interface DeleteProductsHandler
  extends RequestHandler<unknown, SuccessResponse> {}

export interface ProductSearchHandler
  extends RequestHandler<{ query: string }, ProductsResponse> {}

export interface GetProductsListHandler
  extends RequestHandler<{}, ProductsResponse> {}

export interface GetProductsSlugHandler
  extends RequestHandler<{}, SlugsResponse> {}

export interface GetNavLinksHandler extends RequestHandler<{}, NavTags> {}

export interface GetShopProductsHandler
  extends RequestHandler<{}, ProductsResponse> {}

export interface GetFeaturedProductsHandler
  extends RequestHandler<unknown, ProductsResponse> {}

export interface GetTagProductsHandler
  extends RequestHandler<{ tag: string }, ProductsResponse> {}

export interface GetSingleProductHandler
  extends RequestHandler<{ slug: string }, ProductResponse> {}

export interface GetTagsHandler extends RequestHandler<unknown, TagsResponse> {}

export interface GetCategoriesTagsHandler
  extends RequestHandler<unknown, CategoriesTagsResponse> {}

export interface GetProductDetailsHandler
  extends RequestHandler<{ tag: string }, ProductsResponse> {}
