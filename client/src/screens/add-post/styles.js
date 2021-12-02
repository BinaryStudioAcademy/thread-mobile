import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#079AE4',
    paddingBottom: 15
  },
  input: {
    height: 200,
    padding: 10,
    fontSize: 16,
    color: '#02324B',
    backgroundColor: '#F4F4F4',
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
    borderRadius: 5
  }
});

export default styles;
