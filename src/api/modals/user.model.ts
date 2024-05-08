import { Schema, Types, model } from "mongoose";
import { IProduct } from "./product.model";

export interface INotification {
  title: string;
  category: string;
  isUnRead?: boolean;
}

export const NotificationCategories = {
  ORDER: "order",
};
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
  notification?: INotification[];
  notificationSubscription: object;
}

export type AccessableUserData = {
  _id: Types.ObjectId;
  name: string;
  email: string;
  phone: string;
  favorite: string[] | IProduct[];
  cart: string;
  profileImage?: string;
  notification?: INotification[];
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
    notification: {
      type: Array.of(
        new Schema<INotification>(
          {
            title: String,
            category: String,
            isUnRead: { type: Boolean, default: false },
          },
          {
            timestamps: true,
          }
        )
      ),
    },
    notificationSubscription: Object,
  },
  { timestamps: true, collection: "user" }
);

UserSchema.index({ createdAt: 1, updatedAt: -1 });

export const User = model<IUser>("user", UserSchema);
