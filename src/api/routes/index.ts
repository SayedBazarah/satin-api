import { Router } from "express";
import { AuthRoute } from "./auth.route";
import { RoleRoute } from "./role.route";
import { EmployeeRoute } from "./employee.route";
import { globalUploadMiddleware } from "../middleware/global-upload.middleware";

// Main: /api

const router = Router();
router.use("/auth", AuthRoute);
router.use("/employee", EmployeeRoute);
router.use("/role", RoleRoute);

// ---------------------------------------

router.post(
  "/test",
  globalUploadMiddleware().any(),
  (req, res, next) => {
    console.log("req.file");
    console.log(req.file);
    console.log("req.body");
    console.log(req.body);

    return next();
  },
  globalUploadMiddleware().single("image"),
  (req, res, next) => {
    console.log("req.file");
    console.log(req.file);
    console.log("req.body");
    console.log(req.body);

    res.send("TEST ENDPOINT");
  }
);

export default router;
