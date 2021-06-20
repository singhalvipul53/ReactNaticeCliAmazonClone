import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useRoute} from '@react-navigation/native';
import styles from './styles';
import product from './../../data/product';
import QuantitySelector from './../../Components/QuantitySelector/index';
import Button from '../../Components/Button/Button';
import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel';

const ProductScreen = () => {
  const [selectedoption, setselectedoption] = useState(
    product.options ? product.options[0] : null,
  );
  const [quantity, setquantity] = useState(1);
  const route = useRoute();
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>

      {/* Image Container  */}

      <ImageCarousel images={product.images} />
      {/* Option Selector */}

      <Picker
        selectedValue={selectedoption}
        onValueChange={itemvalue => setselectedoption(itemvalue)}>
        {product.options.map((option, index) => (
          <Picker.Item key={index + 1} label={option} value={option} />
        ))}
      </Picker>

      {/* Price  */}
      <Text style={styles.price}>
        from ${product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> ${product.oldPrice}</Text>
        )}
      </Text>

      {/* Description  */}
      <Text style={styles.description}>{product.description}</Text>
      {/* Quantity Selector  */}
      <QuantitySelector quantity={quantity} setquantity={setquantity} />
      {/* Button */}
      <Button
        text={'Add to Cart'}
        onPress={() => console.warn('Added')}
        containerStyle={{
          backgroundColor: '#e3c985',
        }}
      />
      <Button text={'Buy Now'} onPress={() => console.warn('Buy')} />
    </ScrollView>
  );
};

export default ProductScreen;
