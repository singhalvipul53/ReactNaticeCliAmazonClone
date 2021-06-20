import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

// interface ButtonProps{
//     text:String;
//     onPress:()=>void;
// containerStyle?:object
// }
const Button = ({text, onPress, containerStyle}) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, containerStyle]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#e47911',
    marginVertical: 10,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#a15e1b',
  },
  text: {
    fontSize: 16,
  },
});
export default Button;
