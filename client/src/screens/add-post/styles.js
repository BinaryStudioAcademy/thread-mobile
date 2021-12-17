import { StyleSheet } from 'react-native';
import { AppColor } from 'config/config';

const styles = StyleSheet.create({
  screen: {
    padding: 15
  },
  input: {
    height: 200,
    padding: 10,
    paddingTop: 10,
    marginTop: 15,
    fontSize: 16,
    color: AppColor.TEXT,
    backgroundColor: AppColor.INPUT,
    textAlignVertical: 'top',
    borderRadius: 5
  },
  buttonWrapper: {
    alignItems: 'flex-start',
    marginVertical: 15
  },
  image: {
    height: 170,
    width: '100%',
    marginBottom: 25,
    borderRadius: 5,
    backgroundColor: AppColor.BACKGROUND_DARK
  }
});

export default styles;
