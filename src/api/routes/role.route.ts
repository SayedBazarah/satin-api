import { Router } from "express";

import * as controllers from "../controllers/roles";
import * as val from "../validators/role";
import { tokenValidator } from "../validators/auth";

const router = Router();

//endpoint: /api/roles

router.get("/permissions", controllers.GetPermissions);
router
  .route("/")
  .get(tokenValidator, controllers.GetRoles)
  .post(val.createRole, controllers.CreateRole)
  .put(val.updateRole, controllers.UpdateRole)
  .delete(val.deleteRole, controllers.DeleteRole);

export { router as RoleRoute };
