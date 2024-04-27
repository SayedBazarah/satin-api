import { Router } from "express";

import * as controllers from "../controllers/category";
import * as val from "../validators/category";
import { globalUploadMiddleware } from "../middleware/global-upload.middleware";

const router = Router();

//endpoint: /api/category

router
  .route("/")
  .get(val.getCategories, controllers.getCategories)
  .post(
    globalUploadMiddleware().single("profileImage"),
    val.createCategory,
    controllers.createCategory
  )
  .patch(
    globalUploadMiddleware().single("profileImage"),
    val.updateCategory,
    controllers.updateCategory
  )
  .delete(val.deleteCategory, controllers.deleteCategory);

router.route("/:id").get(controllers.getCategory);

export { router as CategoryRoute };
