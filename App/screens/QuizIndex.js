import React from 'react';
import {
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Image
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
  scrollView: {
    backgroundColor: '#FFFFFF'
  },
  floatingButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3D3D3D',
    width: 200,
    height: 50,
    right: 30,
    bottom: 30,
    borderRadius: 50
  },
  floatingText: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 21
  },
  copyrightText: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 0,
    fontSize: 12.5,
    letterSpacing: 1.5
  },
  logoImgContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImg: {
    width: 90,
    height: 120
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
            {'\u00A9'} 2020 Developed by Andrés Davidovich for
          </Text>
          <View style={styles.logoImgContainer}>
            <Image
              style={styles.logoImg}
              source={require('../assets/logo-tcu-501.jpg')}
            />
          </View>
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
