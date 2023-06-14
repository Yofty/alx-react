import * as notificationsData from '../../Notifications.json';
import { normalize, schema } from 'normalizer';

export const getAllNotificationsByUser = (userId) => {
  return notificationsData.default
    .filter((item) => item.author.id === userId)
    .map(({ context }) => context);
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