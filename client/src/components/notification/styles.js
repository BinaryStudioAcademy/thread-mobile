import { StyleSheet } from 'react-native';
import { AppColor } from 'config/config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    width: '90%',
    borderRadius: 5,
    borderLeftWidth: 5,
    backgroundColor: AppColor.BACKGROUND_DARK,
    opacity: 0.9,
    elevation: 3,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  content: {
    marginLeft: 20
  },
  title: {
    fontWeight: '700'
  }
});

export default styles;
