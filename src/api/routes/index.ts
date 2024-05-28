import { Router } from "express";

import { AuthRoute } from "./auth.route";
import { RoleRoute } from "./role.route";
import { UserRoute } from "./user.route";
import { OrderRoute } from "./orders.route";
import { CommonRoute } from "./common.route";
import { GeneralRoute } from "./general.route";
import { ProductRoute } from "./products.route";
import { CategoryRoute } from "./category.route";
import { EmployeeRoute } from "./employee.route";

import { globalUploadMiddleware } from "../middleware/global-upload.middleware";
import { getCountry } from "../utils/get-geo";
import { NotFoundError } from "../errors/notfound-error";

// Main: /api

const router = Router();
router.use("/auth", AuthRoute);
router.use("/role", RoleRoute);
router.use("/user", UserRoute);
router.use("/order", OrderRoute);
router.use("/common", CommonRoute);
router.use("/general", GeneralRoute);
router.use("/product", ProductRoute);
router.use("/category", CategoryRoute);
router.use("/employee", EmployeeRoute);

// ---------------------------------------

router.get("/test", globalUploadMiddleware().any(), async (req, res, next) => {
  const locale = req.headers["accept-language"];

  res.status(200).send(locale);
});

export default router;
