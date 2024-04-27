import { Router } from "express";

import * as controllers from "../controllers/general";
import * as val from "../validators/employee";
import { globalUploadMiddleware } from "../middleware/global-upload.middleware";

const router = Router();

// endpoint: /api/general
router.route("/landing-page").get(controllers.LandingPage);

export { router as GeneralRoute };
