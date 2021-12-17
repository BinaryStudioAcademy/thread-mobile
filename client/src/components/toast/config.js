import { NotificationType } from 'common/enums/enums';
import Notification from 'components/notification/notification';

const config = Object.values(NotificationType).reduce(
  (acc, type) => ({ ...acc, [type]: Notification }),
  {}
);

export default config;
