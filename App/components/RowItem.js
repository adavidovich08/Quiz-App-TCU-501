import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 10,
    paddingVertical: 25,
    backgroundColor: '#00C0F3',
    marginBottom: 1,
    flexDirection: 'row'
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    marginLeft: 10,
    marginTop: 10
  }
});

export const RowItem = ({onPress = () => {}, name, color, iconName}) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.75}>
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
