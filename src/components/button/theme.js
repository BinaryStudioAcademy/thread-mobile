import { ButtonVariant } from 'common/enums/enums';
import { AppColor } from 'config/config';

const theme = {
  [ButtonVariant.SOLID]: {
    color: AppColor.WHITE,
    backgroundColor: AppColor.PRIMARY,
    padding: 10
  },
  [ButtonVariant.TEXT]: {
    color: AppColor.PRIMARY,
    backgroundColor: 'transparent',
    padding: 6,
    underlayColor: 'hsla(0, 0%, 0%, 0.1)'
  }
};

export { theme };
