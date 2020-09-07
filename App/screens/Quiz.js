import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  SafeAreaView,
  ImageBackground
} from 'react-native';
import CountDown from 'react-native-countdown-component';

import AsyncStorage from '@react-native-community/async-storage';

import {Audio} from 'expo-av';
import {Button, ButtonContainer, ButtonImg} from '../components/Button';
import {Alert} from '../components/Alert';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#36B1F0',
    flex: 1,
    paddingHorizontal: 10
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    letterSpacing: -0.05,
    fontWeight: '500'
  },
  bottomViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15
  },
  safearea: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'space-between'
  },
  imgContainer: {
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgQ: {
    borderRadius: 10,
    overflow: 'hidden',
    width: 175,
    height: undefined,
    aspectRatio: 4 / 3,
    position: 'relative',
    top: 0,
    left: 0
  },
  txtOverlay: {
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    bottom: 5,
    left: 5,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5
  },
  textQ: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    letterSpacing: 0.25,
    fontWeight: '500'
  }
});

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.playbackInstance = null;

    this.state = {
      correctCount: 0,
      totalCount: this.props.navigation.getParam('questions', []).length,
      activeQuestionIndex: 0,
      score: 0,
      answered: false,
      answerCorrect: false,
      imgOrFnc: false,
      preparing: false,
      idCC: 1,
      timeLeft: 20
    };
  }

  componentDidMount = async () => {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: false,
      shouldDuckAndroid: true,
      playsInBackgroundModeIOS: true,
      playsInBackgroundModeAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false
    });
    //  This function will be called
    this._loadNewPlaybackInstance();
  };

  componentWillUnmount() {
    this.playbackInstance.unloadAsync();
  }

  setValue = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log('Save Error.');
    }
    console.log('Value saved.');
  };

  answer = (correct) => {
    let timeBasedScore;
    this.setState(
      (state) => {
        const nextState = {answered: true};
        nextState.preparing = true;
        nextState.idCC += 1;
        timeBasedScore = state.timeLeft * 25;
        nextState.timeLeft = 20;

        if (correct) {
          nextState.correctCount = state.correctCount + 1;
          nextState.score = state.score + 500 + timeBasedScore;
          nextState.answerCorrect = true;
        } else {
          nextState.answerCorrect = false;
        }

        return nextState;
      },
      () => {
        setTimeout(() => this.nextQuestion(), 1000);
      }
    );
  };

  nextQuestion = () => {
    this.setState((state) => {
      const nextIndex = state.activeQuestionIndex + 1;

      if (nextIndex >= state.totalCount) {
        // return this.props.navigation.popToTop();
        const scoreString = state.score.toString();
        this.setValue(
          this.props.navigation.getParam('title', 'error'),
          scoreString
        );

        return this.props.navigation.navigate('QuizIndex');
      }

      return {
        imgOrFnc: !state.imgOrFnc,
        activeQuestionIndex: nextIndex,
        answered: false,
        preparing: false,
        untilActual: 20
      };
    });
  };

  shuffleAnswers = (answers) => {
    let shuffle;
    if (!this.state.preparing) {
      shuffle = require('shuffle-array');
      shuffle(answers);
    }
    return answers;
  };

  async _loadNewPlaybackInstance() {
    if (this.playbackInstance != null) {
      await this.playbackInstance.unloadAsync();
      this.playbackInstance.setOnPlaybackStatusUpdate(null);
      this.playbackInstance = null;
    }
    const source = require('../assets/bensound-smallguitar2.mp3');
    const initialStatus = {
      //        Play by default
      shouldPlay: true,
      //        Control the speed
      rate: 1.0,
      //        Correct the pitch
      shouldCorrectPitch: true,
      //        Control the Volume
      volume: 1.0,
      //        mute the Audio
      isMuted: false
    };
    const {sound} = await Audio.Sound.createAsync(source, initialStatus);
    //  Save the response of sound in playbackInstance
    this.playbackInstance = sound;
    //  Make the loop of Audio
    this.playbackInstance.setIsLoopingAsync(true);
    // Empieza en cierto ms
    // this.playbackInstance.setPositionAsync(103000);
    //  Play the Music
    this.playbackInstance.playAsync();
  }

  changeTimeLeft() {
    this.state.timeLeft -= 1;
  }

  renderCD() {
    if (!this.state.preparing) {
      return (
        <CountDown
          id={this.state.idCC.toString()}
          size={30}
          until={20}
          onChange={() => this.changeTimeLeft()}
          onFinish={() => this.answer(false)}
          digitStyle={{
            backgroundColor: this.props.navigation.getParam('color'),
            borderWidth: 0
          }}
          digitTxtStyle={{color: '#FFFFFF'}}
          timeToShow={['S']}
          timeLabels={{s: null}}
        />
      );
    }
    // podria devolver el color final como un
    // cuadrado verde, amarillo o rojo
    return null;
  }

  renderBody(question) {
    if (this.state.imgOrFnc) {
      // picture question
      return (
        <View>
          <View style={styles.imgContainer}>
            <ImageBackground style={styles.imgQ} source={question.correctImg}>
              <Text style={styles.txtOverlay}>{question.correctOrgan}</Text>
            </ImageBackground>
          </View>

          <Text style={styles.text}> Which function matches the picture?</Text>

          <ButtonContainer>
            {this.shuffleAnswers(question.answers).map((answer) => (
              <Button
                key={answer.id}
                text={answer.desc}
                onPress={() => this.answer(answer.correct)}
              />
            ))}
          </ButtonContainer>
        </View>
      );
    }
    // function question
    return (
      <View>
        <View style={styles.txtContainer}>
          <Text style={styles.textQ}>{question.correctDesc}</Text>
        </View>

        <Text style={styles.text}> Which picture matches the function? </Text>

        <ButtonContainer>
          {this.shuffleAnswers(question.answers).map((answer) => (
            <ButtonImg
              key={answer.id}
              text={answer.desc}
              imgAnswer={answer.img}
              imgTxt={answer.organ}
              onPress={() => this.answer(answer.correct)}
            />
          ))}
        </ButtonContainer>
      </View>
    );
  }

  render() {
    const questions = this.props.navigation.getParam('questions', []);
    const question = questions[this.state.activeQuestionIndex];

    return (
      <View
        style={[
          styles.container,
          {backgroundColor: this.props.navigation.getParam('color')}
          // eslint-disable-next-line react/jsx-closing-bracket-location
        ]}
      >
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safearea}>
          {this.renderBody(question)}

          <View style={styles.bottomViewStyle}>
            <Text style={styles.text}>
              {`${this.state.correctCount}/${this.state.totalCount}`}
            </Text>
            {this.renderCD()}
            <Text style={styles.text}>
              {this.state.score}
              pts
            </Text>
          </View>
        </SafeAreaView>
        <Alert
          correct={this.state.answerCorrect}
          visible={this.state.answered}
        />
      </View>
    );
  }
}

export default Quiz;
