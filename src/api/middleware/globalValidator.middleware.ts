import { RequestHandler } from "express";
import { matchedData, validationResult } from "express-validator";
import { ValidationError } from "../errors/validation-error";

export const globalValidatorMiddleware: RequestHandler = (req, res, next) => {
  const errors = validationResult(req);
  const profileImage = req.body.profileImage;
  req.body = matchedData(req, { locations: ["body"] });
  req.body.profileImage = profileImage;
  req.params = matchedData(req, { locations: ["params"] });
  req.query = matchedData(req, { locations: ["query"] });
  console.log("errors");
  console.log(errors);
  if (!errors.isEmpty()) return next(new ValidationError(errors.array()));

  next();
};
