import { Schema, Types, model } from "mongoose";
import { IProduct } from "./product.model";
import { IUser } from "./user.model";

// Define Order Interface
export type IOrderProductItem = {
  id: string;
  name: string;
  price: number;
  salePrice: number;
  coverUrl: string;
  quantity: number;
};

export type IBilling = {
  name: string;
  address: string;
  phone: string;
};

export type IOrderHistory = {
  orderTime: Date;
  paymentTime: Date;
  deliveryTime: Date;
  completionTime: Date;
  timeline: {
    title: string;
    time: Date;
  }[];
};

export type IOrderDelivery = {
  shipBy: string;
  speedy: string;
  trackingNumber: string;
};

export type IOrderAddress = {
  address: string;
  phone: string;
};

export interface IOrder {
  _id: string;
  status: string;
  subTotal: number;
  shipping: number;
  discount: number;
  billing: IBilling;
  taxes: number;
  orderNumber: number;
  totalAmount: number;
  // totalQuantity: number;
  history: IOrderHistory;
  customer: string | IUser;
  delivery: IOrderDelivery;
  items: IOrderProductItem[];
}

export const OrderStatus = {
  PENDING: "pending",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
  REFUNDED: "refunded",
} as const;

// Define Order Schema
const OrderSchema = new Schema<IOrder>(
  {
    status: {
      type: String,
      enum: Object.values(OrderStatus),
    },
    subTotal: { type: Number },
    shipping: { type: Number },
    discount: { type: Number },
    taxes: { type: Number },
    orderNumber: { type: Number },
    totalAmount: { type: Number },
    history: new Schema<IOrderHistory>({
      orderTime: { type: Date, default: Date.now }, // Set default value to current date and time
      paymentTime: { type: Date },
      deliveryTime: { type: Date },
      completionTime: { type: Date },
      timeline: [
        {
          title: { type: String },
          time: { type: Date, default: Date.now },
        },
      ],
    }),
    customer: {
      type: Schema.Types.ObjectId,
    },
    billing: { type: Object },
    delivery: new Schema<IOrderDelivery>({
      shipBy: { type: String },
      speedy: { type: String },
      trackingNumber: { type: String },
    }),
    items: { type: Array.of<IOrderProductItem>() },
  },
  {
    timestamps: true,
    collection: "order",
  }
);

// Export Order Modal
export const Order = model<IOrder>("order", OrderSchema);
