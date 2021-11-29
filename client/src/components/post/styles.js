import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0'
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
  username: {
    fontSize: 18,
    color: '#03557F',
    fontWeight: '600'
  },
  date: {
    fontSize: 14,
    color: '#B9C2C6'
  },
  image: {
    marginVertical: 5,
    height: 170,
    width: '100%',
    borderRadius: 5
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
