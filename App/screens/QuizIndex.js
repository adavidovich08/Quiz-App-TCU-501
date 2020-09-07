import React from 'react';
import {
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Text,
  View,
  StyleSheet
} from 'react-native';

import organsQuestions from '../data/organs';
import {RowItem} from '../components/RowItem';

const shuffleQuestions = (questions) => {
  const shuffle = require('shuffle-array');
  shuffle(questions);
  return questions;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  floatingButton: {
    position: 'absolute',
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: '#3D3D3D',
    borderRadius: 50
  },
  floatingText: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 21
  }
});

export default ({navigation}) => (
  <View style={styles.container}>
    <ScrollView>
      <StatusBar barStyle="dark-content" />
      <RowItem
        name="Organs (5th Grade)"
        color="#00c0f3"
        iconName="brain"
        onPress={() =>
          navigation.navigate('Quiz', {
            title: 'Organs',
            questions: shuffleQuestions(organsQuestions),
            color: '#00c0f3'
          })
        }
      />
      <RowItem
        name="Placeholder"
        color="#bad2ad"
        iconName="lead-pencil"
        onPress={() =>
          navigation.navigate('Quiz', {
            title: 'Placeholder',
            questions: shuffleQuestions(organsQuestions),
            color: '#bad2ad'
          })
        }
      />
    </ScrollView>
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={() => navigation.navigate('HighScore')}
      style={styles.floatingButton}
    >
      <Text style={styles.floatingText}>high scores</Text>
    </TouchableOpacity>
  </View>
);
