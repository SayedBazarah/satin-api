import { Router } from "express";
import * as controllers from "../controllers/products";
import * as val from "../validators/product";
import { globalUploadMiddleware } from "../middleware/global-upload.middleware";

const router = Router();
// endpoint: /api/product

router.get("/search/:query", val.getProduct, controllers.ProductSearch);
router.get("/details/:slug", val.getProduct, controllers.GetSingleProduct);
router.get("/shop", val.getProduct, controllers.GetShopProductsProduct);
router.get("/list", val.getProduct, controllers.GetProductsList);
router.get("/slugs", val.getProduct, controllers.getProductsSlug);
router.get("/tags/slugs", val.getProduct, controllers.GetNavLinks);
router.get("/tags/:tag", val.getProduct, controllers.GetTagProduct);

router.get("/categories-tags", val.getProduct, controllers.GetCategoriesTags);

router.get("/tags", val.getProduct, controllers.GetTag);

router.post(
  "/",
  globalUploadMiddleware().array("images", 10),
  val.createProduct,
  controllers.CreateProduct
);

router.delete("/rows", val.deleteProducts, controllers.DeleteProducts);

router
  .route("/:id")
  .patch(
    globalUploadMiddleware().array("images", 10),
    val.updateProduct,
    controllers.UpdateProduct
  )
  .delete(val.deleteProduct, controllers.DeleteProduct);

export { router as ProductRoute };
