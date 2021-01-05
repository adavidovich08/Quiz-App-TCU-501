import React from 'react';
import {ScrollView, StatusBar, View, StyleSheet} from 'react-native';

import organsQuestions from '../data/fifth/organs';
import weatherQuestions from '../data/fourth/weather';
import wearQuestions from '../data/fourth/whatToWear';
import outdoorQuestions from '../data/fourth/outdoor';
import indoorQuestions from '../data/fourth/indoor';
import wildlifeQuestions from '../data/fourth/wildlife';
import cropsQuestions from '../data/fourth/crops';
import disastersQuestions from '../data/fourth/disasters';
import vacationQuestions from '../data/fourth/vacation';
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
  constructor(props) {
    super(props);

    this.state = {
      quizArray: this.props.navigation.getParam('grade', [])
    };
  }

  returnQuestions = (name) => {
    if (name === 'Organs') {
      return organsQuestions;
    } else if (name === 'Weather Conditions') {
      return weatherQuestions;
    } else if (name === 'What to Wear?') {
      return wearQuestions;
    } else if (name === 'Outdoor Activities') {
      return outdoorQuestions;
    } else if (name === 'Indoor Activities') {
      return indoorQuestions;
    } else if (name === 'Wildlife at the Park') {
      return wildlifeQuestions;
    } else if (name === 'Costa Rican Crops') {
      return cropsQuestions;
    } else if (name === 'Natural Disasters') {
      return disastersQuestions;
    } else if (name === 'Vacation Activities') {
      return vacationQuestions;
    }
    return pruebaQuestions;
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <StatusBar barStyle="dark-content" />

          {this.state.quizArray.map((quiz) => {
            return (
              <RowItem
                key={quiz.name}
                name={quiz.name}
                color={quiz.color}
                iconName={quiz.icon}
                onPress={() =>
                  this.props.navigation.navigate('Quiz', {
                    title: quiz.name,
                    questions: shuffleQuestions(
                      this.returnQuestions(quiz.name).slice(1)
                    ),
                    quizData: this.returnQuestions(quiz.name)[0],
                    color: quiz.color
                  })
                }
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

export default QuizIndex;
