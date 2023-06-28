import * as notificationsData from '../../Notifications.json';
import { normalize, schema } from 'normalizr';

export const getAllNotificationsByUser = (userId) => {
  const notifications = normalized.entities.notifications;
  const messages = normalized.entities.messages;
  const notificationsByUser = [];

  for (const property in notifications) {
    if (notification[property].author === userId) {
      notificationsByUser.push(messages[notifications[property].context]);
    }
  }
    return notificationsByUser;
};

const user = new schema.Entity('users');

const message = new schema.Entity(
  'mesages',
  {},
  {
    idAttribute: 'guid',
  }
);

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const normalized = normalize(notificationsData.defaul, [notification]);

export { normalized };