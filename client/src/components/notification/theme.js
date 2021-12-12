import { IconName, NotificationType } from 'common/enums/enums';
import { AppColor } from 'config/config';

const theme = {
  [NotificationType.INFO]: {
    title: 'Info',
    icon: IconName.INFO,
    color: AppColor.PRIMARY
  },
  [NotificationType.ERROR]: {
    title: 'Error',
    icon: IconName.EXCLAMATION_TRIANGLE,
    color: AppColor.ERROR
  }
};

export default theme;
