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
    width: 45,
    height: 45,
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
  image: {
    marginVertical: 5,
    height: 170,
    width: '100%',
    borderRadius: 5,
    backgroundColor: AppColor.BACKGROUND_DARK
  },
  body: {
    fontSize: 14
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  }
});

export default styles;
