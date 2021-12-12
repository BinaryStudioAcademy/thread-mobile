import Toast from 'react-native-toast-message';
import { NotificationType } from 'common/enums/enums';

class Notification {
  info(message) {
    this._show({ type: NotificationType.INFO, message });
  }

  error(message) {
    this._show({ type: NotificationType.ERROR, message });
  }

  _show({ type, message: text1 }) {
    Toast.show({ type, text1 });
  }
}

export { Notification };
