import { Router } from "express";
import * as controllers from "../controllers/common";
import * as val from "../validators/common";

const router = Router();

// endpoint: /api/common
router
  .route("/nav")
  .get(controllers.GetConfigHandler)
  .patch(val.updateNav, controllers.UpdateNavItemHandler);

router.get("/country", val.getCountry, controllers.GetCountry);

router.route("/landing-page").get(controllers.LandingPage);
router
  .route("/wholesale")
  .post(val.wholesaleValidator, controllers.WholesaleHandler);

export { router as CommonRoute };
