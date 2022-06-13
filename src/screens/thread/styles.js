import { StyleSheet } from 'react-native';
import { AppColor } from 'config/config';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: AppColor.BORDER
  },
  logoText: {
    marginLeft: 5
  },
  filter: {
    padding: 15,
    backgroundColor: AppColor.BACKGROUND_DARK
  }
});

export { styles };
