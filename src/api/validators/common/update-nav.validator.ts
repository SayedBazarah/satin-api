import { body, header } from "express-validator";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";

export const updateNav = [
  header("authorization"),
  body("nav").custom((value) => {
    if (!value.subheader || typeof value.subheader !== "string") {
      throw new Error("subheader is required and must be a string");
    }

    value.items?.forEach((item: { title: string; path: string }) => {
      if (!item.title || typeof item.title !== "string") {
        throw new Error("Items title must be string and required");
      }

      if (!item.path || typeof item.path !== "string") {
        throw new Error("Items path must be string and required");
      }
    });

    return true;
  }),
  globalValidatorMiddleware,
];
