import { RequestHandler } from "express";
import { SuccessResponse } from "../SuccessResponse";
import { IOrder } from "../../modals/order.model";

type OrderDetailsResponse = { order: IOrder };
type OrdersResponse = { orders: IOrder[] };

export interface CreateOrderHandler
  extends RequestHandler<unknown, SuccessResponse> {}

export interface GetOrdersHandler
  extends RequestHandler<unknown, OrdersResponse> {}

export interface GetOrderDetailsHandler
  extends RequestHandler<{ id: string }, OrderDetailsResponse> {}

export interface UpdateOrderHandler
  extends RequestHandler<{ id: string }, SuccessResponse> {}
