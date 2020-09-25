import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  SafeAreaView
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: '#000',
    fontWeight: '600',
    fontSize: 20,
    marginTop: 10
  },
  textScore: {
    textAlign: 'right',
    color: '#000',
    fontWeight: '600',
    fontSize: 20,
    marginTop: 10,
    marginRight: 25
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#80a9ba',
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 2
  }
});

class HighScore extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };

    this.getValue('Organs');
    this.getValue('Placeholder');
  }

  /**
   * Function returns name of icon asset depending on quiz name
   * @param {string} quizName
   */
  getIconName = (quizName) => {
    switch (quizName) {
      case 'Organs':
        return 'brain';
      default:
        return 'pencil';
    }
  };

  /**
   * Gets the highscore of the quiz with this key
   * and pushes it to the data array displayed on screen
   * @param {string} key
   */
  getValue = async (key) => {
    try {
      let scoreDB = await AsyncStorage.getItem(key);
      if (scoreDB === null) {
        scoreDB = '0';
      }
      const iconString = this.getIconName(key);
      const obj = {quizName: key, score: scoreDB, icon: iconString};
      this.state.data.push(obj);
      return 1;
    } catch (e) {
      console.log('Read Error.');
      return 0;
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <View style={styles.row}>
              <MaterialCommunityIcons // https://icons.expo.fyi/
                name={item.icon}
                size={30}
                color="black"
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
