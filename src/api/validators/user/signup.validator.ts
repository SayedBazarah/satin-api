import { body, header } from "express-validator";
import { globalValidatorMiddleware } from "../../middleware/globalValidator.middleware";
import { User } from "../../modals/user.model";
import phoneChecker from "../../utils/phoneChecker";

export const signup = [
  body("name").exists(),
  body("email").custom(async (value) => {
    const user = await User.findOne({ email: value });
    if (user) throw new Error("already exist");
  }),
  body("phone")
    .custom(async (value) => {
      const isPhoneNumber = phoneChecker(value);
      if (!isPhoneNumber) throw new Error("is not a correct phone number");
      const user = await User.findOne({ phone: value });
      if (user) throw new Error("already exist");
    })
    .exists()
    .isString(),
  body("password").exists(),
  globalValidatorMiddleware,
];
