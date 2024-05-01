import { Order } from "../../modals/order.model";
import { GetOrdersHandler } from "../../types/enpoints/order.endpoints";

export const GetOrderList: GetOrdersHandler = async (req, res, next) => {
  //   const orders = await Order.find({});

  const orders = await Order.aggregate([
    {
      $addFields: {
        totalQuantity: { $sum: "$items.quantity" },
      },
    },
  ]);
  return res.status(200).json({ orders });
};
