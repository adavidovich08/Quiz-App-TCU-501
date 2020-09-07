import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native';

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
    overflow: 'hidden',
    width: 150,
    height: undefined,
    aspectRatio: 4 / 3,
    position: 'relative',
    top: 0,
    left: 0
  },
  txtOverlay: {
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    bottom: 5,
    left: 5,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5
  }
});

export const Button = ({text, onPress = () => {}}) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export const ButtonImg = ({imgAnswer, imgTxt, onPress = () => {}}) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <ImageBackground style={styles.imgA} source={imgAnswer}>
      <Text style={styles.txtOverlay}>{imgTxt}</Text>
    </ImageBackground>
  </TouchableOpacity>
);

export const ButtonContainer = ({children}) => (
  <View style={styles.buttonContainer}>{children}</View>
);
