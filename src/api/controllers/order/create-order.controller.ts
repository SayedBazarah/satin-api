import { BadRequestError } from "../../errors/bad-request-error";
import { Order, OrderStatus } from "../../modals/order.model";
import { Product } from "../../modals/product.model";
import { NotificationCategories } from "../../modals/user.model";
import { CreateOrderHandler } from "../../types/enpoints/order.endpoints";
import { CreateEmployeeNotification } from "../notification/create-notification";

export const createOrder: CreateOrderHandler = async (req, res, next) => {
  const lastOrder = await Order.findOne().sort({ _id: -1 });

  const order = await Order.create({
    ...req.body,
    status: OrderStatus.PENDING,
    orderNumber: (lastOrder?.orderNumber || 0) + 1,
    history: {
      timeline: [
        {
          title: `العميل ${req.body.billing?.name} اضافة طلب جديد`,
        },
      ],
    },
  });

  if (!order) return next(new BadRequestError("something want wrong"));

  order.items.forEach(
    async (item) =>
      await Product.findOneAndUpdate(
        { _id: item.id },
        {
          $inc: { totalSold: item.quantity },
        }
      )
  );

  CreateEmployeeNotification(
    {
      category: NotificationCategories.ORDER,
      title: `طلب جديد: ${req.body.billing?.name} طلب ${req.body.items?.length} منتج`,
    },
    {}
  );

  return res.status(201).json({ message: "success" });
};
