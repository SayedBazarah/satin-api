import { Router } from "express";

import * as controllers from "../controllers/employees";
import * as val from "../validators/auth";

const router = Router();

//endpoint: /api/auth

router.route("/me").get(val.me, controllers.AuthMe);
router.route("/signin").post(val.signin, controllers.SigninHandler);
router
  .route("/forgot-password")
  .post(val.forgotPassword, controllers.ForgotPassword);
router
  .route("/update-password")
  .post(val.updatePassword, controllers.UpdatePassword);
router
  .route("/token-validator")
  .get(val.tokenValidator, controllers.tokenValidator);

router.patch(
  "/change-password",
  val.updatePassword,
  controllers.ChangePassword
);

export { router as AuthRoute };
