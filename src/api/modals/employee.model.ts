import { ObjectId, Schema, Types, model } from "mongoose";
import { INotification } from "./user.model";

export interface IEmployee {
  id: string;
  name: string;
  email: string;
  phone: string;
  password?: string;
  ipAddress: string;
  profileImage?: string;
  state?: string;
  area?: string;
  verificationCode?: {
    code?: string;
    expireAt?: Date;
    reason?:
      | "update-email"
      | "update-password"
      | "update-password-verified"
      | "signup";
  };
  isOnline: boolean;
  branch?: string;
  token: string;
  role?: ObjectId;
  notification: INotification[];
  notificationSubscription?: object;
}

export type AccessableEmployeeData = {
  _id: Types.ObjectId;
  name: string;
  email: string;
  phone: string;
  isOnline: boolean;
  profileImage?: string;
  state?: string;
  area?: string;
  branch?: string;
  role?: ObjectId;
  notification?: INotification[];
};

export const EmployeeSchema = new Schema<IEmployee>(
  {
    name: String,
    email: { type: String, unique: true },
    profileImage: String,
    password: String,
    phone: String,
    verificationCode: {
      code: String,
      expireAt: Date,
      reason: String,
    },
    isOnline: { type: Boolean, default: false },
    token: String,
    state: String,
    area: String,
    ipAddress: String,
    branch: String,
    role: {
      type: Types.ObjectId,
      ref: "role",
    },
    notification: {
      type: Array.of(
        new Schema<INotification>(
          {
            title: String,
            category: String,
            isUnRead: { type: Boolean, default: true },
          },
          {
            timestamps: true,
          }
        )
      ),
    },
    notificationSubscription: Object,
  },
  { timestamps: true, collection: "employee" }
);

EmployeeSchema.index({ createdAt: 1, updatedAt: -1 });

export const Employee = model<IEmployee>("employee", EmployeeSchema);
