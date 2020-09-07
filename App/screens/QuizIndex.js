import React from 'react';
import {ScrollView, StatusBar} from 'react-native';

import organsQuestions from '../data/organs';
import {RowItem} from '../components/RowItem';

const shuffleQuestions = (questions) => {
  const shuffle = require('shuffle-array');
  shuffle(questions);
  return questions;
};

export default ({navigation}) => (
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
          title: 'Organs',
          questions: organsQuestions,
          color: '#bad2ad'
        })
      }
    />
  </ScrollView>
);
