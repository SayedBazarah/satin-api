import webpush, { PushSubscription } from "web-push";
import { Employee } from "../../modals/employee.model";
import { INotification } from "../../modals/user.model";

/**
 * A create notification sent notification employess .
 *
 * @param {INotification} notification - notification.
 * @param {Object} filter - filter the employees, default all.
 */

export const CreateEmployeeNotification = async (
  notification: INotification,
  filter: object = {}
) => {
  const employees = await Employee.find(filter);

  employees.map(async (employee) => {
    employee.notification.unshift(notification);

    await employee.save();

    PushWebNotification(
      {
        title: notification.title,
        message: "اضغط هنا للوصول السريع ",
      },
      employee.notificationSubscription as PushSubscription,
      {},
      async () => {
        employee.notificationSubscription = undefined;
        await employee.save();
      }
    );
  });
};

/**
 * Push web notification .
 *
 * @param {String} title - notification.
 * @param {Array} clients - filter the employees, default all.
 * @param {Object} options - filter the employees, default all.
 * @param {Function} callback - if the user unsubscribe.
 */

export const PushWebNotification = (
  payload: object,
  client: PushSubscription,
  options: {} = {},
  cb: VoidFunction
) =>
  webpush.sendNotification(client, JSON.stringify(payload), options).then(
    () => {},
    (error) => error.statusCode === 410 && cb()
  );

export const PushMultiWebNotification = (
  title: string,
  clients: [] = [],
  options: {} = {}
) => clients.map((client) => webpush.sendNotification(client, title, options));
