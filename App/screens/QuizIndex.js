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

  constructor(props) {
    super(props);

    this.state = {
      quizArray: this.props.navigation.getParam('grade', [])
    }
  }

  returnQuestions = (name) => {
    if(name === 'Organs'){
      return organsQuestions;
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
                    questions: shuffleQuestions(this.returnQuestions(quiz.name).slice(1)),
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
