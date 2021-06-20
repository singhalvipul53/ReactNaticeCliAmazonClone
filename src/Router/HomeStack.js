import React, {useState} from 'react';
import {Text, View, TextInput, SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProductScreen from '../screens/ProductScreen/ProductScreen';
import Feather from 'react-native-vector-icons/Feather';
const Stack = createStackNavigator();

const HeaderComponent = ({searchvalue, setsearchvalue}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#22e3dd'}}>
      <View
        style={{
          backgroundColor: 'white',
          margin: 10,
          padding: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Feather name="search" size={20} />
        <TextInput
          style={{
            height: 40,
            marginLeft: 10,
          }}
          placeholder="Search.."
          value={searchvalue}
          onChangeText={setsearchvalue}
        />
      </View>
    </SafeAreaView>
  );
};
const HomeStack = () => {
  const [searchvalue, setsearchvalue] = useState('');
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent
            searchvalue={searchvalue}
            setsearchvalue={setsearchvalue}
          />
        ),
      }}>
      <Stack.Screen
        name="HomeScreen"
        // component={HomeScreen}
        options={{title: 'Home'}}>
        {() => <HomeScreen searchvalue={searchvalue} />}
      </Stack.Screen>
      <Stack.Screen name="ProductDetail" component={ProductScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
