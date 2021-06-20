import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
const ProductItem = props => {
  const {item} = props; //better way
  // const item=props.item
  const navigation = useNavigation();
  const onPress = () => {
    console.warn('Item Pressed');
    navigation.navigate('ProductDetail', {id: item.id});
  };
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.rightcontainer}>
        <Text numberOfLines={3} style={styles.title}>
          {item.title}
        </Text>
        {/* Ratings */}
        <View style={styles.ratingContainer}>
          {[0, 0, 0, 0, 0].map((el, index) => (
            <FontAwesome
              key={`${item.id}-${index}`}
              style={styles.star}
              name={index < Math.floor(item.avgRating) ? 'star' : 'star-o'}
              size={18}
              color={'#e47911'}
            />
          ))}
          <Text>{item.ratings}</Text>
        </View>
        {/* Price */}
        <Text style={styles.price}>
          from ${item.price}
          {item.oldPrice && (
            <Text style={styles.oldPrice}> ${item.oldPrice}</Text>
          )}
        </Text>
      </View>
    </Pressable>
  );
};

export default ProductItem;
