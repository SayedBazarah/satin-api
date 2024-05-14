import { ObjectId, Schema, Types, model } from "mongoose";

export interface IRole {
  _id: string;
  label: string;
  permissions: string[];
}

export enum PERMISSIONS {
  SUPER = "Super",
  REPORTS = "Reports",
  PRODUCTS = "Products",
  CATEGORIES = "Categories",
  PROMOTIONS = "Promotions",
  INVENTORY = "Inventory",
  ORDERS = "Orders",
  INVOICES = "Invoices",
  LOGISTICS = "Logistics",
  EMPLOYEES = "Employees",
  CUSTOMERS = "Customers",
  NOTIFICATION = "Notification",
  BLOG = "Blog",
}

export const RoleSchema = new Schema<IRole>(
  {
    label: { type: String, unique: true },
    permissions: {
      type: Array.of(String),
      enum: PERMISSIONS,
    },
  },
  { timestamps: false, collection: "role" }
);

export const Role = model<IRole>("role", RoleSchema);
