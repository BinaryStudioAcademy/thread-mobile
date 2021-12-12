import { StyleSheet } from 'react-native';
import { AppColor } from 'config/config';

const styles = StyleSheet.create({
  inputWrapper: {
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
  },
  error: {
    flexDirection: 'row',
    marginTop: 3
  },
  errorMessage: {
    fontSize: 14,
    color: AppColor.ERROR,
    marginLeft: 5
  }
});

export default styles;
