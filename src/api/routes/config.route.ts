import { Router } from "express";
import * as controllers from "../controllers/config";
import * as val from "../validators/config";

const router = Router();

// endpoint: /api/product

router
  .route("/nav")
  .get(controllers.GetConfigHandler)
  .patch(val.updateNav, controllers.UpdateNavItemHandler);

export { router as ConfigRoute };
