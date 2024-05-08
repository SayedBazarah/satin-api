import { Employee } from "../../modals/employee.model";
import { BadRequestError } from "../../errors/bad-request-error";
import { NotificationSubscribeHandler } from "../../types/enpoints/auth.endpoints";

export const NotificationSubscribe: NotificationSubscribeHandler = async (
  req,
  res,
  next
) => {
  const employee = await Employee.findOneAndUpdate(
    { _id: req.params.id },
    {
      notificationSubscription: req.body.subscribe,
    }
  );

  if (!employee)
    return next(new BadRequestError("something want wrong while updating."));

  res.status(200).json({
    message: "success",
  });
};
