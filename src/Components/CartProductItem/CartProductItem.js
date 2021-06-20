import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import QuantitySelector from './../../Components/QuantitySelector/index';

const CartProductItem = ({cartitem}) => {
  const {item, quantity} = cartitem; //better way
  // const item=props.item
  const [countquantity, setcountquantity] = useState(quantity);
  return (
    <View style={styles.root}>
      <View style={styles.row}>
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
      </View>
      <View style={styles.quantitycontainer}>
        <QuantitySelector
          quantity={countquantity}
          setquantity={setcountquantity}
        />
      </View>
    </View>
  );
};

export default CartProductItem;
