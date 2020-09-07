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
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10
  },
  textScore: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
    marginRight: 25,
    textAlign: 'right',
    marginTop: 10
  },
  row: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#80a9ba',
    marginBottom: 2,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

class HighScore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
    this.getValue('Organs');
    this.getValue('Placeholder');
  }

  getIconName = (quizName) => {
    switch (quizName) {
      case 'Organs':
        return 'brain';
      default:
        return 'pencil';
    }
  };

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
