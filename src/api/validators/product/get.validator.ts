import { header, param } from "express-validator";

export const getProduct = [header("x-access-token").exists()];
