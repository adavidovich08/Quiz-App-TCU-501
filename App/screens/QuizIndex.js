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
  },
  copyrightText: {
    fontSize: 12.5,
    textAlign: 'center',
    marginTop: 10,
    letterSpacing: 1.5
  }
});

class QuizIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      var2: 0
    };
    this.state.var2 = +1;
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar barStyle="dark-content" />
          <RowItem
            name="Organs (5th Grade)"
            color="#00c0f3"
            iconName="brain"
            onPress={() =>
              this.props.navigation.navigate('Quiz', {
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
              this.props.navigation.navigate('Quiz', {
                title: 'Placeholder',
                questions: shuffleQuestions(organsQuestions),
                color: '#bad2ad'
              })
            }
          />
          <Text style={styles.copyrightText}>
            {'\u00A9'} 2020 by TCU-501, UCR
          </Text>
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => this.props.navigation.navigate('HighScore')}
          style={styles.floatingButton}
        >
          <Text style={styles.floatingText}>high scores</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default QuizIndex;
