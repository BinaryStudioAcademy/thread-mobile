import { StyleSheet } from 'react-native';
import { AppColor } from 'config/config';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: AppColor.TEXT
  },
  link: {
    fontSize: 16,
    color: AppColor.PRIMARY,
    textDecorationLine: 'underline'
  },
  headline: {
    fontSize: 24,
    color: AppColor.HEADLINE,
    fontWeight: '700'
  },
  title: {
    fontSize: 16,
    color: AppColor.TITLE,
    fontWeight: '700'
  },
  subtitle: {
    fontSize: 14,
    color: AppColor.SUBTITLE
  }
});

export { styles };
