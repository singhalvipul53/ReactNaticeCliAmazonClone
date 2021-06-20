import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ProductItem from './../../Components/ProductItem/index';
import products from '../../data/products';
const HomeScreen = ({searchvalue}) => {
  console.log(searchvalue);
  return (
    <View style={styles.page}>
      {/* Render Product Component */}
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default HomeScreen;
