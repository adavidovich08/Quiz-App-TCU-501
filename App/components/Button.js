import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '47.5%',
    borderRadius: 10,
    paddingVertical: 5,
    marginTop: 20
  },
  txtAnswer: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 15,
    paddingVertical: 7.5,
    paddingHorizontal: 5
  },
  shortTxtAnswer: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 2.5
  },
  imgAnswer: {
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

// Used when answers are in long text form
export const Button = ({txtAnswer, onPress = () => {}}) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.75}
    delayPressIn={0}
    style={styles.button}
  >
    <Text style={styles.txtAnswer}>{txtAnswer}</Text>
  </TouchableOpacity>
);

// Used when answers are in short text form
export const ButtonShortText = ({txtAnswer, onPress = () => {}}) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.75}
    delayPressIn={0}
    style={styles.button}
  >
    <Text style={styles.shortTxtAnswer}>{txtAnswer}</Text>
  </TouchableOpacity>
);

// Used when answers are in image form
export const ButtonImg = ({imgAnswer, imgTxt, onPress = () => {}}) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.75}
    delayPressIn={0}
    style={styles.button}
  >
    <ImageBackground style={styles.imgAnswer} source={imgAnswer}>
      <Text style={styles.txtOverlay}>{imgTxt}</Text>
    </ImageBackground>
  </TouchableOpacity>
);

export const ButtonContainer = ({children}) => (
  <View style={styles.buttonContainer}>{children}</View>
);
