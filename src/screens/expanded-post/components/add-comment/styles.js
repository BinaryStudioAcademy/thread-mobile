import { StyleSheet } from 'react-native';
import { AppColor } from 'config/config';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingTop: 13,
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderColor: AppColor.BORDER
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 0,
    marginRight: 10,
    fontSize: 16,
    color: AppColor.TEXT,
    borderBottomWidth: 1,
    borderColor: AppColor.PRIMARY
  }
});

export { styles };
