import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '47.5%',
    marginTop: 20
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600'
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    justifyContent: 'space-between'
  },
  imgA: {
    borderRadius: 10,
    width: 150,
    height: undefined,
    aspectRatio: 4 / 3
  }
});

export const Button = ({text, onPress = () => {}}) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export const ButtonImg = ({imgAnswer, onPress = () => {}}) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Image source={imgAnswer} style={styles.imgA} />
  </TouchableOpacity>
);

export const ButtonContainer = ({children}) => (
  <View style={styles.buttonContainer}>{children}</View>
);
