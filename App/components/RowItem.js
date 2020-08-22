import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: '#00C0F3',
    marginBottom: 1
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600'
  }
});

export const RowItem = ({onPress = () => {}, name, color}) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.75}>
    <View style={[styles.row, {backgroundColor: color}]}>
      <Text style={styles.text}>{name}</Text>
    </View>
  </TouchableOpacity>
);
