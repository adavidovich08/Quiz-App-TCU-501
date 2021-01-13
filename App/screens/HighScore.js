import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  SafeAreaView
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import fourth from '../data/fourth';
import fifth from '../data/fifth';
import sixth from '../data/sixth';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 20,
    marginTop: 10
  },
  textScore: {
    textAlign: 'right',
    color: '#FFF',
    fontWeight: '600',
    fontSize: 20,
    marginTop: 10,
    marginRight: 25
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 2
  }
});

class HighScore extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true
    };
    this.fillData();
  }

  fillData() {
    fourth.forEach((quiz) => {
      this.getValue(quiz);
    });
    fifth.forEach((quiz) => {
      this.getValue(quiz);
    });
    sixth.forEach((quiz) => {
      this.getValue(quiz);
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false});
    }, 100);
  }

  /**
   * Gets the highscore of the quiz received
   * and pushes it to the data array displayed on screen
   * @param {string} quiz
   */
  getValue = async (quiz) => {
    try {
      let scoreDB = await AsyncStorage.getItem(quiz.name);
      if (scoreDB === null) {
        scoreDB = '0';
      }
      const obj = {
        quizName: quiz.name,
        score: scoreDB,
        icon: quiz.icon,
        color: quiz.color
      };
      this.state.data.push(obj);
      return 1;
    } catch (e) {
      console.log('Read Error.');
      return 0;
    }
  };

  render() {
    if (this.state.loading) {
      return null;
    }
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <View style={styles.row} backgroundColor={item.color}>
              <MaterialCommunityIcons // https://icons.expo.fyi/
                name={item.icon}
                size={30}
                color="white"
                style={{paddingHorizontal: 15, marginTop: 10}}
              />
              <Text style={styles.text}>{item.quizName}</Text>
              <Text style={styles.textScore}>{item.score}</Text>
            </View>
          )}
          keyExtractor={(item) => item.quizName}
        />
      </SafeAreaView>
    );
  }
}

export default HighScore;
