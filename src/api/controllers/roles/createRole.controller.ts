import { Types } from "mongoose";
import { BadRequestError } from "../../errors/bad-request-error";
import { Role } from "../../modals/roles.model";
import { CreateRoleHandler } from "../../types/enpoints/role.endpoints";

export const CreateRole: CreateRoleHandler = async (req, res, next) => {
  const { label, permissions } = req.body;

  const role = await Role.create({
    label,
    permissions,
  });

  if (!role)
    return next(
      new BadRequestError("Can not create the role, something went wrong. ")
    );

  return res.status(201).json({ message: "success" });
};
