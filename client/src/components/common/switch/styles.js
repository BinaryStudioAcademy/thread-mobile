import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    marginRight: 10
  },
  switch: {
    transform: Platform.select({
      ios: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
      android: []
    })
  }
});

export default styles;
