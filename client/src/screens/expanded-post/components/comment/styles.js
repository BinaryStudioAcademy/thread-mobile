import { StyleSheet } from 'react-native';
import { AppColor } from 'config/config';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: AppColor.BORDER
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 25
  },
  content: {
    flex: 1,
    marginLeft: 10
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  body: {
    fontSize: 14
  }
});

export default styles;
