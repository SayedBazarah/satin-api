import { NextFunction, Request, Response, Router } from "express";

import * as controllers from "../controllers/employees";
import * as val from "../validators/employee";
import { globalUploadMiddleware } from "../middleware/global-upload.middleware";

const router = Router();

//endpoint: /api/employee

router
  .route("/")
  .get(val.tokenValidator, controllers.AllEmployeesHandler)
  .patch(
    globalUploadMiddleware().single("profileImage"),
    val.update,
    controllers.UpdateEmployee
  )
  .delete(val.deleteEmployees, controllers.DeleteEmployees);
router
  .route("/delete/:id")
  .delete(val.deleteEmployee, controllers.DeleteEmployee);
router.route("/ids").get(val.tokenValidator, controllers.AllEmployeesIdHandler);

router.route("/single/:id").get(val.me, controllers.GetEmployee);

router
  .route("/create")
  .post(
    globalUploadMiddleware().single("profileImage"),
    val.signup,
    controllers.SignupHandler
  );

router
  .route("/forgot-password")
  .post(val.forgotPassword, controllers.ForgotPassword);

router
  .route("/update-password")
  .post(val.updatePassword, controllers.UpdatePassword);

router
  .route("/token-validator")
  .get(val.tokenValidator, controllers.tokenValidator);

export { router as EmployeeRoute };
