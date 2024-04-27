import { Schema, model } from "mongoose";

// Define Order Interface
export type IConfig = {
  slug: number;
  data: object;
};

export type INavItem = {
  subheader: string;
  items: { title: string; path: string }[];
};

// Define Order Schema
export const ConfigSchema = new Schema<IConfig>(
  {
    slug: String,
    data: {
      type: Object,
    },
  },
  { collection: "config", _id: false }
);

// Export Order Modal
export const Config = model<IConfig>("config", ConfigSchema);
