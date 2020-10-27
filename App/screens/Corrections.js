import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: '#568A9F',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 5
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#568A9F',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  newHighscoreText: {
    backgroundColor: '#568A9F',
    color: '#6DC067',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '900',
    paddingTop: 20,
    fontSize: 25,
    letterSpacing: 2
  },
  scoreText: {
    backgroundColor: '#568A9F',
    color: '#000',
    textAlign: 'center',
    fontWeight: '600',
    padding: 20,
    fontSize: 25,
    letterSpacing: 0.75
  },
  correctCountText: {
    backgroundColor: '#568A9F',
    color: '#000',
    textAlign: 'center',
    fontWeight: '400',
    paddingBottom: 20,
    fontSize: 20,
    letterSpacing: 2,
    marginBottom: 5
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10
  },
  imgQuestion: {
    position: 'relative',
    overflow: 'hidden',
    height: undefined,
    width: 150,
    aspectRatio: 4 / 3,
    borderRadius: 10,
    top: 0,
    left: 0
  },
  imgContainerSmall: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgQuestionSmall: {
    position: 'relative',
    overflow: 'hidden',
    height: undefined,
    width: 100,
    aspectRatio: 4 / 3,
    borderRadius: 10,
    top: 0,
    left: 0
  },
  txtContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 10,
    padding: 15
  },
  txtQuestion: {
    color: '#000',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 20,
    letterSpacing: 0.25
  },
  txtContainerSmall: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    padding: 10,
    width: 200
  },
  txtQuestionSmall: {
    color: '#000',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 15,
    letterSpacing: 0.1
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
  }
});

class Corrections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      corrections: this.props.navigation.getParam('corrections', []),
      score: this.props.navigation.getParam('score'),
      correct: this.props.navigation.getParam('correct'),
      total: this.props.navigation.getParam('total'),
      quizType: this.props.navigation.getParam('quizType')
    };
  }

  renderSelectedText = (text) => {
    if (text === '') {
      return (
        <View style={styles.txtContainerSmall}>
          <Text style={styles.txtQuestionSmall}>
            You ran out of time before you selected an option.
          </Text>
        </View>
      );
    }
    return (
      <View style={styles.txtContainerSmall}>
        <Text style={styles.txtQuestionSmall}>{text}</Text>
      </View>
    );
  };

  renderSelectedImage = (image) => {
    if (image === '') {
      return (
        <View style={styles.imgContainerSmall}>
          <ImageBackground
            style={styles.imgQuestionSmall}
            source={require('../assets/image-not-found.jpg')}
          />
        </View>
      );
    }
    return (
      <View style={styles.imgContainerSmall}>
        <ImageBackground style={styles.imgQuestionSmall} source={image} />
      </View>
    );
  };

  renderIfHighscore = () => {
    if (this.props.navigation.getParam('ifHighscore')) {
      return <Text style={styles.newHighscoreText}>new high score!!!</Text>;
    }
    return null;
  };

  renderItemTxtImg = (item) => {
    if (item.type) {
      return (
        <View style={styles.item}>
          <View style={styles.imgContainer}>
            <ImageBackground
              style={styles.imgQuestion}
              source={item.question}
            />
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons // https://icons.expo.fyi/
              name="close-circle"
              size={50}
              color="#FF0A3f"
              style={{paddingHorizontal: 15, marginTop: 10}}
            />

            {this.renderSelectedText(item.incorrect)}
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons // https://icons.expo.fyi/
              name="check-circle"
              size={50}
              color="#6DC067"
              style={{paddingHorizontal: 15, marginTop: 10}}
            />

            <View style={styles.txtContainerSmall}>
              <Text style={styles.txtQuestionSmall}>{item.correct}</Text>
            </View>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.item}>
        <View style={styles.txtContainer}>
          <Text style={styles.txtQuestion}>{item.question}</Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons // https://icons.expo.fyi/
            name="close-circle"
            size={50}
            color="#FF0A3f"
            style={{paddingHorizontal: 15, marginTop: 10}}
          />
          {this.renderSelectedImage(item.incorrect)}
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons // https://icons.expo.fyi/
            name="check-circle"
            size={50}
            color="#6DC067"
            style={{paddingHorizontal: 15, marginTop: 10}}
          />
          <View style={styles.imgContainerSmall}>
            <ImageBackground
              style={styles.imgQuestionSmall}
              source={item.correct}
            />
          </View>
        </View>
      </View>
    );
  };

  renderItemTxtTxt = (item) => {
    return (
      <View style={styles.item}>
        <View style={styles.txtContainer}>
          <Text style={styles.txtQuestion}>{item.question}</Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons // https://icons.expo.fyi/
            name="close-circle"
            size={50}
            color="#FF0A3f"
            style={{paddingHorizontal: 15, marginTop: 10}}
          />
          {this.renderSelectedText(item.incorrect)}
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons // https://icons.expo.fyi/
            name="check-circle"
            size={50}
            color="#6DC067"
            style={{paddingHorizontal: 15, marginTop: 10}}
          />

          <View style={styles.txtContainerSmall}>
            <Text style={styles.txtQuestionSmall}>{item.correct}</Text>
          </View>
        </View>
      </View>
    );
  };

  renderItem = (item) => {
    if (this.state.quizType === 'txtImg') {
      return this.renderItemTxtImg(item);
    }
    return this.renderItemTxtTxt(item);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        {this.renderIfHighscore()}
        <Text style={styles.scoreText}>
          You scored {this.state.score} points!
        </Text>
        <Text style={styles.correctCountText}>
          {this.state.correct}/{this.state.total} correct answers
        </Text>
        <FlatList
          data={this.state.corrections}
          renderItem={({item}) => this.renderItem(item)}
          keyExtractor={(item) => item.key}
        />
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => this.props.navigation.navigate('GradeIndex')}
          style={styles.floatingButton}
        >
          <Text style={styles.floatingText}>Back to home</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default Corrections;
