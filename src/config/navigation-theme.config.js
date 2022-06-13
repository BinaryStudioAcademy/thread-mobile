import { DefaultTheme } from '@react-navigation/native';
import { AppColor } from './app-color.config';

const NavigationTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: AppColor.PRIMARY,
    background: AppColor.BACKGROUND,
    text: AppColor.TEXT
  }
};

export { NavigationTheme };
