import { header } from "express-validator";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";

export const me = [header("authorization").exists(), globalValidatorMiddleware];
