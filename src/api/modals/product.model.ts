import { Schema, Types, ObjectId, model } from "mongoose";
import { ICategory } from "./category.model";

export interface IProduct {
  locale: string;
  _id: string;
  sku: string;
  name: string;
  code: string;
  slug: string;
  price: number;
  taxes: number;
  tags: Array<String>;
  gender: string;
  sizes: string[];
  publish: boolean;
  coverUrl: string;
  images: string[];
  colors: string[];
  quantity: number;
  category: string | ICategory;
  available: number;
  totalSold: number;
  description: string;
  totalRatings: number;
  totalReviews: number;
  inventoryType: string;
  subDescription: string;
  priceSale: number | null;
  reviews: IProductReview[];
  createdAt: Date;
  ratings: {
    name: string;
    starCount: number;
    reviewCount: number;
  }[];
  saleLabel: {
    enabled: boolean;
    content: string;
  };
  newLabel: {
    enabled: boolean;
    content: string;
  };
}

export type IProductReview = {
  _id: string;
  name: string;
  rating: number;
  comment: string;
  helpful: number;
  isPurchased: boolean;
  attachments?: string[];
};

export interface AccessableProductData {
  id: string;
  sku: string;
  name: string;
  price: number;
  coverUrl: string;
  quantity: number;
}

const ProductSchema = new Schema<IProduct>(
  {
    locale: { type: String },
    name: { type: String },
    sku: { type: String },
    code: { type: String },
    slug: { type: String, unique: true },
    price: { type: Number },
    taxes: { type: Number },
    tags: { type: [String] },
    gender: {
      type: String,
    },
    sizes: { type: [String] },
    publish: { type: Boolean },
    coverUrl: { type: String },
    images: { type: [String] },
    colors: { type: [String] },
    quantity: { type: Number },
    category: { type: Types.ObjectId, ref: "category" },
    totalSold: { type: Number },
    description: { type: String },
    subDescription: { type: String },
    priceSale: { type: Number },
    ratings: {
      name: {
        type: String,
      },
      starCount: {
        type: Number,
      },
      reviewCount: {
        type: Number,
      },
    },
    saleLabel: {
      enabled: {
        type: Boolean,
      },
      content: {
        type: String,
      },
    },
    newLabel: {
      enabled: {
        type: Boolean,
      },
      content: {
        type: String,
      },
    },
    reviews: {
      name: { type: String },
      rating: { type: Number },
      comment: { type: String },
      helpful: { type: Number },
      isPurchased: { type: Boolean },
      attachments: { type: [String] },
    },
    totalRatings: { type: Number },
    totalReviews: { type: Number },
  },
  { timestamps: true, collection: "product" }
);

ProductSchema.index({ createdAt: 1, updatedAt: -1 });

export const Product = model<IProduct>("product", ProductSchema);
