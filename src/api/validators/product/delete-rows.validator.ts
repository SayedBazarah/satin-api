import { header, body } from "express-validator";

export const deleteProducts = [
  header("authorization").exists(),
  body("products").isArray().exists(),
];
