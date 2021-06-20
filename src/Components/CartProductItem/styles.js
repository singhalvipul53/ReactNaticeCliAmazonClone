import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
  },
  rightcontainer: {
    padding: 10,
    flex: 3,
  },

  title: {
    fontSize: 18,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  star: {
    margin: 2,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  quantitycontainer: {
    marginVertical: 10,
    marginLeft: 10,
  },
});

export default styles;
