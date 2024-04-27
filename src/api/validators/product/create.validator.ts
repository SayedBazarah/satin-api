import { body, header } from "express-validator";

import { Product } from "../../modals/product.model";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";
import { Category } from "../../modals/category.model";

export const createProduct = [
  header("authorization").exists(),
  body("sku"),
  body("name").exists(),
  body("code"),
  body("slug")
    .exists()
    .custom(async (value: string) => {
      const product = await Product.findOne({ slug: value });
      console.log(product);
      if (product) throw new Error("product already exist");
    }),
  body("price").exists(),
  body("category").custom(async (value) => {
    console.log("value");
    console.log(value);
    const category = await Category.findOne({ _id: value });
    console.log("category");
    console.log(category);
    if (!category) throw new Error("no category found with this Id");
  }),
  body("taxes"),
  body("tags"),
  body("gender"),
  body("sizes"),
  body("publish"),
  body("colors"),
  body("quantity"),
  body("available"),
  body("description"),
  body("subDescription"),
  body("priceSale"),
  body("saleLabel"),
  body("newLabel"),
  globalValidatorMiddleware,
];
