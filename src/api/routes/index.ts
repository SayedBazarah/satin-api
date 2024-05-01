import { Router } from "express";

import { AuthRoute } from "./auth.route";
import { RoleRoute } from "./role.route";
import { UserRoute } from "./user.route";
import { OrderRoute } from "./orders.route";
import { ConfigRoute } from "./config.route";
import { GeneralRoute } from "./general.route";
import { ProductRoute } from "./products.route";
import { CategoryRoute } from "./category.route";
import { EmployeeRoute } from "./employee.route";

import { globalUploadMiddleware } from "../middleware/global-upload.middleware";

// Main: /api

const router = Router();
router.use("/auth", AuthRoute);
router.use("/role", RoleRoute);
router.use("/user", UserRoute);
router.use("/order", OrderRoute);
router.use("/config", ConfigRoute);
router.use("/general", GeneralRoute);
router.use("/product", ProductRoute);
router.use("/category", CategoryRoute);
router.use("/employee", EmployeeRoute);

// ---------------------------------------

router.get("/test", globalUploadMiddleware().any(), (req, res, next) => {
  console.log("req.ip");
  console.log(req.ip);
  console.log(req.ips);

  res.status(200).send("TEST ENDPOINT");
});

export default router;
