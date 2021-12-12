import { StyleSheet } from 'react-native';
import { AppColor } from 'config/config';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: AppColor.INPUT
  },
  input: {
    padding: 10,
    fontSize: 16,
    color: AppColor.TEXT
  },
  icon: {
    position: 'absolute',
    left: 10
  }
});

export default styles;
