import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import countryList from 'country-list';
import styles from './styles';
import Button from './../../Components/Button/Button';

const countries = countryList.getData();
const Address = () => {
  const [country, setcountry] = useState(countries[0].code);
  const [fullname, setfullname] = useState('');
  const [phone, setphone] = useState('');
  const [address, setaddress] = useState('');
  const [addresserror, setaddresserror] = useState('Invalid Address');
  const [city, setcity] = useState('');

  const validateaddress = () => {
    if (address.length < 3) {
      setaddresserror('Address is too short');
    }
  };
  const onCheckout = () => {
    if (!!addresserror) {
      Alert.alert('Fix all fields error before submitting');
      return;
    }
    if (!fullname) {
      Alert.alert('Please fill in the fullname field');
      return;
    }
    if (!phone) {
      Alert.alert('Please fill in the phone field');
      return;
    }
    console.warn('Sucess, Checkout');
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={90}>
      <ScrollView style={styles.root}>
        <View style={styles.row}>
          <Picker selectedValue={country} onValueChange={setcountry}>
            {countries.map((country, index) => (
              <Picker.Item
                key={index + 1}
                value={country.code}
                label={country.name}
              />
            ))}
          </Picker>
        </View>

        {/* Full Name */}
        <View style={styles.row}>
          <Text style={styles.label}>Full name (First and Last name)</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullname}
            onChangeText={setfullname}
          />
        </View>

        {/* Phone Number */}
        <View style={styles.row}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            keyboardType={'phone-pad'}
            placeholder="Phone Number"
            value={phone}
            onChangeText={setphone}
          />
        </View>

        {/* Address */}
        <View style={styles.row}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onEndEditing={validateaddress}
            onChangeText={text => {
              setaddress(text);
              setaddresserror('');
            }}
          />
          {!!addresserror && <Text style={styles.error}>{addresserror}</Text>}
        </View>

        {/* City */}
        <View style={styles.row}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={styles.input}
            placeholder="City"
            value={city}
            onChangeText={setcity}
          />
        </View>

        <Button text="Checkout" onPress={onCheckout} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Address;
