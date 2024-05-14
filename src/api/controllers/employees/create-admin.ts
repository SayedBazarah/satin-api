import { Employee } from "../../modals/employee.model";
import { PERMISSIONS, Role } from "../../modals/roles.model";
import { hashPwd } from "../../utils/bcrypt";

export const CreateAdmin = async () => {
  const admin = await Employee.findOne({
    email: "sayed@multisystem-eg.com",
  });

  if (!admin) {
    const role = await Role.create({
      label: "admin",
      permissions: [PERMISSIONS.SUPER],
    });
    await Employee.create({
      name: "admin",
      email: "sayed@multisystem-eg.com",
      role: role._id,
      password: await hashPwd("demo1234"),
    });
  }
};
