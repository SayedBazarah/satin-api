import { Schema, model } from "mongoose";

// Define Order Interface
export type ICategory = {
  locale: string;
  slug: string;
  title: string;
  coverImage: string;
  icon: string;
};

// Define Order Schema
export const CategorySchema = new Schema<ICategory>(
  {
    locale: {
      type: String,
    },
    title: {
      type: String,
    },
    slug: {
      type: String,
    },
    coverImage: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
  { collection: "category" }
);

// Export Order Modal
export const Category = model<ICategory>("category", CategorySchema);
