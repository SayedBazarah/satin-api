import mongoose, { Types } from "mongoose";
import { Order } from "../../modals/order.model";
import { GetOrderDetailsHandler } from "../../types/enpoints/order.endpoints";

export const GetOrderDetails: GetOrderDetailsHandler = async (
  req,
  res,
  next
) => {
  //   const orders = await Order.find({});
  const orders = await Order.aggregate([
    {
      $match: { _id: new mongoose.Types.ObjectId(req.params.id) },
    },
    {
      $addFields: {
        totalQuantity: { $sum: "$items.quantity" },
      },
    },
  ]);
  return res.status(200).json({ order: orders[0] });
};
