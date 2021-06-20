import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: 'white',
  },
  description: {
    marginVertical: 10,
    lineHeight: 20,
  },
  title: {},
  price: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
});

export default styles;
