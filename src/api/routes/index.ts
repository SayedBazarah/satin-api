import { Router } from "express";
import { AuthRoute } from "./auth.route";
import { RoleRoute } from "./role.route";
import { EmployeeRoute } from "./employee.route";
import {
  profileImagePath,
  uploadEmployeeResourses,
  uploadProductsResourses,
} from "../utils/multer";

// Main: /api

const router = Router();
router.use("/auth", AuthRoute);
router.use("/employee", EmployeeRoute);
router.use("/role", RoleRoute);

// ---------------------------------------

router.post(
  "/test",
  uploadProductsResourses.single("image"),
  (req, res, next) => {
    console.log("req.file?.path");
    console.log(req.file);
    console.log(req.file?.path);
    console.log("profileImagePath");
    console.log(profileImagePath);

    res.send("TEST ENDPOINT");
  }
);

export default router;
