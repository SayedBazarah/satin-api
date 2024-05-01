import { Router } from "express";

import * as controllers from "../controllers/order";
import * as val from "../validators/order";

const router = Router();

// endpoint: /api/orders
router
  .route("/")
  .get(val.getOrders, controllers.GetOrderList)
  .post(val.createOrder, controllers.createOrder);

router
  .route("/:id")
  .get(val.getOrderDetails, controllers.GetOrderDetails)
  .patch(val.updateOrder, controllers.UpdateOrderStatus);

export { router as OrderRoute };
