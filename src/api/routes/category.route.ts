import { Router } from "express";

import * as controllers from "../controllers/category";
import * as val from "../validators/category";
import { globalUploadMiddleware } from "../middleware/global-upload.middleware";

const router = Router();

//endpoint: /api/category

router.get("/list", val.getCategories, controllers.getCategoriesList);
router
  .route("/")
  .get(val.getCategories, controllers.getCategories)
  .post(
    globalUploadMiddleware().fields([
      { name: "coverImage", maxCount: 1 },
      { name: "icon", maxCount: 1 },
    ]),
    val.createCategory,
    controllers.createCategory
  )
  .delete(val.DeleteCategories, controllers.DeleteCategories);

router
  .route("/:id")
  .get(val.SingleCategory, controllers.getCategory)
  .patch(
    globalUploadMiddleware().fields([{ name: "coverImage" }, { name: "icon" }]),
    val.updateCategory,
    controllers.updateCategory
  )
  .delete(val.SingleCategory, controllers.deleteCategory);

export { router as CategoryRoute };
