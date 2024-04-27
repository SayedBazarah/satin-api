import { body, header, param } from "express-validator";

import { Product } from "../../modals/product.model";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";

export const updateProduct = [
  header("authorization").exists(),
  param("id"),
  body("sku"),
  body("name"),
  body("code"),
  body("price"),
  body("tags"),
  body("taxes"),
  body("sizes"),
  body("gender"),
  body("publish"),
  body("coverUrl"),
  body("images"),
  body("colors"),
  body("quantity"),
  body("category"),
  body("available"),
  body("description"),
  body("subDescription"),
  body("priceSale"),
  body("saleLabel"),
  body("newLabel"),
  globalValidatorMiddleware,
];
