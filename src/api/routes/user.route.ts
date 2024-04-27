import { Router } from "express";
import * as controllers from "../controllers/user";
import * as val from "../validators/user";

const router = Router();

// endpoint: /api/user

// Auth
router.route("/me").get(val.tokenValidator, controllers.AuthMe);
router.route("/signin").post(val.signin, controllers.SigninHandler);
router.route("/signup").post(val.signup, controllers.SignupHandler);

router
  .route("/forgot-password")
  .post(val.forgotPassword, controllers.ForgotPassword);
router
  .route("/update-password")
  .post(val.updatePassword, controllers.UpdatePassword);
router
  .route("/token-validator")
  .get(val.tokenValidator, controllers.tokenValidator);

export { router as UserRoute };
