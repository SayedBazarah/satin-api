import { Schema, model } from "mongoose";

// Define Order Interface
export type ICategory = {
  slug: string;
  title: string;
  profileImage: string;
};

// Define Order Schema
export const CategorySchema = new Schema<ICategory>(
  {
    title: {
      type: String,
    },
    slug: {
      type: String,
    },
    profileImage: {
      type: String,
    },
  },
  { collection: "category" }
);

// Export Order Modal
export const Category = model<ICategory>("category", CategorySchema);
