import { Schema, Types, model } from "mongoose";
import { IProduct } from "./product.model";

export interface IUser {
  name: string;
  email: string;
  profileImage?: string;
  phone: string;
  password?: string;
  address: string[];
  favorite: string[] | IProduct[];
  cart: any; // Notes: ICART -------
  ipAddress: string;
  isOnline: boolean;
  token: string;
  verificationCode?: {
    code?: string;
    expireAt?: Date;
    reason?:
      | "update-email"
      | "update-password"
      | "update-password-verified"
      | "signup";
  };
}

export type AccessableUserData = {
  _id: Types.ObjectId;
  name: string;
  email: string;
  phone: string;
  favorite: string[] | IProduct[];
  cart: string;
  profileImage?: string;
};

export const UserSchema = new Schema<IUser>(
  {
    name: String,
    email: { type: String, unique: true },
    profileImage: String,
    password: String,
    phone: String,
    address: Array.of(Types.ObjectId),
    favorite: Array.of(Types.ObjectId),
    cart: Types.ObjectId,

    //

    ipAddress: String,
    isOnline: { type: Boolean, default: false },
    token: String,
    verificationCode: {
      code: String,
      expireAt: Date,
      reason: String,
    },
  },
  { timestamps: true, collection: "user" }
);

UserSchema.index({ createdAt: 1, updatedAt: -1 });

export const User = model<IUser>("user", UserSchema);
