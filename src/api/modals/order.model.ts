import { IEmployee } from "./employee.model";

// Define Order Interface
export type IOrderProductItem = {
  id: string;
  sku: string;
  name: string;
  price: number;
  coverUrl: string;
  quantity: number;
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

export type IOrderCustomer = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  ipAddress: string;
};

export interface IOrder {
  id: string;
  taxes: number;
  status: string;
  shipping: number;
  discount: number;
  subTotal: number;
  orderNumber: string;
  totalAmount: number;
  totalQuantity: number;
  history: IOrderHistory;
  customer: string | IEmployee;
  delivery: IOrderDelivery;
  items: IOrderProductItem[];
  createdAt: Date;
}

// Define Order Schema

// Export Order Modal
