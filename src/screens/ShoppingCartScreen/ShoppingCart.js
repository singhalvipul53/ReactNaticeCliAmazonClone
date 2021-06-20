import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CartProductItem from './../../Components/CartProductItem/CartProductItem';
import Button from './../../Components/Button/Button';
import products from '../../data/cart';

const ShoppingCart = () => {
  const navigation = useNavigation();
  const totalPrice = products.reduce(
    (summedPrice, product) =>
      summedPrice + product.item.price * product.quantity,
    0,
  );

  const onCheckout = () => {
    navigation.navigate('Address');
  };
  return (
    <View style={styles.page}>
      {/* Render Product Component */}
      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartitem={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <Text style={{fontSize: 18}}>
              Subtotal ({products.length} items):{' '}
              <Text style={{color: '#e47911', fontWeight: 'bold'}}>
                ${totalPrice}
              </Text>
            </Text>
            <Button
              text="Proceed to Checkout"
              containerStyle={{
                backgroundColor: '#f7e380',
                borderColor: '#e7b782',
              }}
              onPress={onCheckout}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
export default ShoppingCart;
