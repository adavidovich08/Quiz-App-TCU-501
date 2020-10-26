import React from 'react';
import {
  ScrollView,
  StatusBar,
  View,
  StyleSheet
} from 'react-native';

import organsQuestions from '../data/organs';
import pruebaQuestions from '../data/prueba';
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
  scrollView: {
    backgroundColor: '#FFFFFF'
  }
});

class QuizIndex extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <StatusBar barStyle="dark-content" />
          <RowItem
            name="Organs (5th Grade)"
            color="#00c0f3"
            iconName="brain"
            onPress={() =>
              this.props.navigation.navigate('Quiz', {
                title: 'Organs',
                questions: shuffleQuestions(organsQuestions.slice(1)),
                quizData: organsQuestions[0],
                color: '#00c0f3'
              })
            }
          />
          <RowItem
            name="Placeholder"
            color="#bad2ad"
            iconName="lead-pencil"
            onPress={() =>
              this.props.navigation.navigate('Quiz', {
                title: 'Placeholder',
                questions: shuffleQuestions(pruebaQuestions.slice(1)),
                quizData: pruebaQuestions[0],
                color: '#bad2ad'
              })
            }
          />
        </ScrollView>
      </View>
    );
  }
}

export default QuizIndex;
