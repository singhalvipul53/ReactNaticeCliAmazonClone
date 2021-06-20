import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ShoppingCart from '../screens/ShoppingCartScreen/ShoppingCart';
import AddressScreen from '../screens/AddressScreen/Address';

const Stack = createStackNavigator();

const ShoppingCartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="cart"
        component={ShoppingCart}
        options={{title: 'Shopping Cart'}}
      />
      <Stack.Screen
        name="Address"
        component={AddressScreen}
        options={{title: 'Address'}}
      />
    </Stack.Navigator>
  );
};

export default ShoppingCartStack;
