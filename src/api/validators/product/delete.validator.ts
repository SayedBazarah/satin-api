import { header, param } from "express-validator";

export const deleteProduct = [
  header("authorization").exists(),
  param("id").exists(),
];
