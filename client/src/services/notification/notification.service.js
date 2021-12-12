import Toast from 'react-native-toast-message';
import { NotificationType } from 'common/enums/enums';
import { TOP_OFFSET } from './constants';

class Notification {
  info(message) {
    this._show({ type: NotificationType.INFO, message });
  }

  error(message) {
    this._show({ type: NotificationType.ERROR, message });
  }

  _show({ type, message: text1 }) {
    Toast.show({ type, text1, topOffset: TOP_OFFSET });
  }
}

export { Notification };
