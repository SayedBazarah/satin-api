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
  .patch(val.updateRole, controllers.UpdateRole);

router.delete("/delete/rows", val.deleteRoles, controllers.DeleteRoles);
router.delete("/delete/:id", val.deleteRole, controllers.DeleteRole);

export { router as RoleRoute };
