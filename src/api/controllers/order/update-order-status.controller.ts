import { BadRequestError } from "../../errors/bad-request-error";
import { IOrder, Order, OrderStatus } from "../../modals/order.model";
import { Product } from "../../modals/product.model";
import { UpdateOrderHandler } from "../../types/enpoints/order.endpoints";

export const UpdateOrderStatus: UpdateOrderHandler = async (req, res, next) => {
  const status = req.body.status.value;
  const order = await Order.findOneAndUpdate(
    { _id: req.params.id },
    {
      status: status,
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

  if (status === OrderStatus.COMPLETED) {
    order.history.completionTime = new Date();
    await order.save();
  }

  await UpdateProductCount(order, status);

  return res.status(200).json({ message: "success" });
};

const UpdateProductCount = async (order: IOrder, newStatus: string) => {
  const decreaseStatus: string[] = [
    OrderStatus.CANCELLED,
    OrderStatus.REFUNDED,
  ];
  const increaseStatus: any[] = [OrderStatus.COMPLETED, OrderStatus.PENDING];

  if (
    decreaseStatus.includes(newStatus) &&
    increaseStatus.includes(order.status)
  ) {
    order.items.forEach(
      async (item) =>
        await Product.findOneAndUpdate(
          { _id: item.id },
          {
            $inc: { totalSold: item.quantity * -1 },
          }
        ).then((res) => {
          console.log("Product");
          console.log(res);
        })
    );
  }

  if (
    increaseStatus.includes(newStatus) &&
    decreaseStatus.includes(order.status)
  ) {
    order.items.forEach(
      async (item) =>
        await Product.findOneAndUpdate(
          { _id: item.id },
          {
            $inc: { totalSold: item.quantity },
          }
        )
    );
  }
};
