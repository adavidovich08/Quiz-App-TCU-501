import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export const Alert = ({correct, visible}) => {
  if (!visible) return null;

  let iconName = '';
  let iconColor = '';
  if (correct) {
    iconName = 'check-circle';
    iconColor = '#6DC067';
  } else {
    iconName = 'close-circle';
    iconColor = '#FF0A3F';
  }

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons // https://icons.expo.fyi/
        name={iconName}
        size={screen.width / 2}
        color={iconColor}
      />
    </View>
  );
};
