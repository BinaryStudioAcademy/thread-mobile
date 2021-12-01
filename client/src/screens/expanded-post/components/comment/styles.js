import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#FAFAFA',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0'
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
  username: {
    color: '#03557F',
    fontWeight: '600'
  },
  date: {
    fontSize: 14,
    color: '#B9C2C6'
  },
  body: {
    fontSize: 14
  }
});

export default styles;
