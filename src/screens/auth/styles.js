import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    maxWidth: 330,
    paddingTop: 20,
    paddingBottom: 60,
    paddingHorizontal: 15
  },
  logoWrapper: {
    marginBottom: 40,
    alignItems: 'center'
  },
  logo: {
    width: 120,
    height: 120
  }
});

export { styles };
