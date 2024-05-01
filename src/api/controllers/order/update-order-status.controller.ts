import { BadRequestError } from "../../errors/bad-request-error";
import { Order, OrderStatus } from "../../modals/order.model";
import { UpdateOrderHandler } from "../../types/enpoints/order.endpoints";

export const UpdateOrderStatus: UpdateOrderHandler = async (req, res, next) => {
  const order = await Order.findOneAndUpdate(
    { _id: req.params.id },
    {
      status: req.body.status.value,
      $push: {
        "history.timeline": {
          $each: [
            { title: `تم تعديل حالة الطلب الي ${req.body.status.label} ` },
          ],
          $position: 0,
        },
      },
    },
    {
      runValidators: true,
    }
  );
  if (!order) return next(new BadRequestError("something want wrong"));
  if (req.body.status.value === OrderStatus.COMPLETED) {
    order.history.completionTime = new Date();
    await order.save();
  }

  return res.status(201).json({ message: "success" });
};
