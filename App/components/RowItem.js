import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: '#00C0F3',
    paddingHorizontal: 10,
    paddingVertical: 25,
    marginBottom: 2
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 22.5,
    marginLeft: 10,
    marginTop: 10
  }
});

// Row items of the home screen
export const RowItem = ({onPress = () => {}, name, color, iconName}) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.75} delayPressIn={0}>
    <View style={[styles.row, {backgroundColor: color}]}>
      <MaterialCommunityIcons // https://icons.expo.fyi/
        name={iconName}
        size={30}
        color="white"
        style={{paddingHorizontal: 10, marginTop: 10}}
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  </TouchableOpacity>
);
