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

import AsyncStorage from '@react-native-async-storage/async-storage';

import {Audio} from 'expo-av';

import {
  Button,
  ButtonContainer,
  ButtonImg,
  ButtonShortText
} from '../components/Button';
import {Alert} from '../components/Alert';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#36B1F0',
    flex: 1,
    paddingHorizontal: 10
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 20,
    letterSpacing: -0.05
  },
  bottomViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15
  },
  safeArea: {
    justifyContent: 'space-between',
    flex: 1,
    marginTop: 10
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  txtContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    padding: 20
  },
  imgQuestion: {
    position: 'relative',
    overflow: 'hidden',
    height: undefined,
    width: 175,
    aspectRatio: 4 / 3,
    borderRadius: 10,
    top: 0,
    left: 0
  },
  txtQuestion: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 20,
    letterSpacing: 0.25
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
  }
});

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.playbackInstance = null;
    this.currentHighscore = '0';

    // this.clearAll();
    this.getValue(this.props.navigation.getParam('title'));

    this.state = {
      correctCount: 0,
      questions: this.props.navigation.getParam('questions', []),
      totalCount: this.props.navigation.getParam('questions', []).length,
      quizData: this.props.navigation.getParam('quizData'),
      quizType: this.props.navigation.getParam('quizData').quizType,
      activeQuestionIndex: 0,
      score: 0,
      answered: false,
      answerCorrect: false,
      imgOrFnc: false, // False = txtQ || shrtQ, True = imgQ || lngQ
      preparing: false,
      idCC: 1, // Countdown doesn't work if I don't change this ID
      timeLeft: 20,
      corrections: [],
      countdownRunning: true
    };

    if (this.state.quizType === 'txtImg') {
      this.txtQimgA = this.state.quizData.txtQimgA;
      this.imgQtxtA = this.state.quizData.imgQtxtA;
    } else if (this.state.quizType === 'txtTxt') {
      this.shrtQlngA = this.state.quizData.shrtQlngA;
      this.lngQshrtA = this.state.quizData.lngQshrtA;
    }
  }

  // Sets the audio player settings
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
    // This function will be called
    this._loadNewPlaybackInstance();
  };

  componentWillUnmount() {
    this.playbackInstance.unloadAsync();
    this.setState({countdownRunning: false});
  }

  /**
   * Gets the highscore of the quiz with this key
   * @param {string} key
   */
  getValue = async (key) => {
    try {
      let scoreDB = await AsyncStorage.getItem(key);
      if (scoreDB === null) {
        scoreDB = '0';
      }
      this.currentHighscore = scoreDB;
      return 1;
    } catch (e) {
      console.log('Read Error.');
      return 0;
    }
  };

  /**
   * Stores a pair of key and value in the local storage
   * @param {string} key
   * @param {string} value
   */
  setValue = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log('Save Error.');
    }
  };

  /**
   * Clears de local storage
   */
  clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.log('Delete Error.');
    }
  };

  /**
   * Receives true if correct answer was selected and false if it wasn't
   * Prepares for next question
   * Updates the score based on time left in countdown
   * Calls nextQuestion()
   * @param {boolean} correct
   */
  answer = (selectedAnswer) => {
    let timeBasedScore;
    this.setState(
      (state) => {
        const nextState = {answered: true};
        nextState.preparing = true;
        nextState.idCC += 1;
        timeBasedScore = state.timeLeft * 25;
        nextState.timeLeft = 20;

        if (selectedAnswer.correct) {
          nextState.correctCount = state.correctCount + 1;
          nextState.score = state.score + 500 + timeBasedScore;
          nextState.answerCorrect = true;
        } else {
          let correctionQuestion =
            state.questions[state.activeQuestionIndex].correctLongType;
          let correctAnswer =
            state.questions[state.activeQuestionIndex].correctImg;
          let incorrectAnswer = '';
          if (selectedAnswer.incorrectAnswer !== '') {
            incorrectAnswer = selectedAnswer.img;
          }
          if (state.quizType === 'txtTxt') {
            correctionQuestion =
              state.questions[state.activeQuestionIndex].correctShortType;
            correctAnswer =
              state.questions[state.activeQuestionIndex].correctLongType;
            if (selectedAnswer.incorrectAnswer !== '') {
              incorrectAnswer = selectedAnswer.longType;
            }
          }
          if (state.imgOrFnc) {
            correctionQuestion =
              state.questions[state.activeQuestionIndex].correctImg;
            correctAnswer =
              state.questions[state.activeQuestionIndex].correctLongType;

            if (selectedAnswer.incorrectAnswer !== '') {
              incorrectAnswer = selectedAnswer.longType;
            }
            if (state.quizType === 'txtTxt') {
              correctionQuestion =
                state.questions[state.activeQuestionIndex].correctLongType;
              correctAnswer =
                state.questions[state.activeQuestionIndex].correctShortType;
              if (selectedAnswer.incorrectAnswer !== '') {
                incorrectAnswer = selectedAnswer.shortType;
              }
            }
          }
          const correctionItem = {
            type: state.imgOrFnc,
            question: correctionQuestion,
            incorrect: incorrectAnswer,
            correct: correctAnswer,
            key: state.questions[state.activeQuestionIndex].correctShortType
          };
          state.corrections.push(correctionItem);
          nextState.answerCorrect = false;
        }

        return nextState;
      },
      () => {
        setTimeout(() => this.nextQuestion(), 1000);
      }
    );
  };

  /**
   * Ends the quiz and returns to home screen
   * or sets the state for next question
   */
  nextQuestion = () => {
    this.setState((state) => {
      const nextIndex = state.activeQuestionIndex + 1;

      if (nextIndex >= state.totalCount) {
        const quizName = this.props.navigation.getParam('title');
        let ifHS = false;
        if (this.currentHighscore < state.score) {
          this.setValue(quizName, state.score.toString());
          ifHS = true;
        }
        // this.playbackInstance.unloadAsync();
        return this.props.navigation.navigate('Corrections', {
          corrections: state.corrections,
          score: state.score,
          ifHighscore: ifHS,
          correct: state.correctCount,
          total: state.totalCount,
          quizType: this.state.quizType
        });
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

  // Function that plays the audio
  async _loadNewPlaybackInstance() {
    if (this.playbackInstance != null) {
      await this.playbackInstance.unloadAsync();
      this.playbackInstance.setOnPlaybackStatusUpdate(null);
      this.playbackInstance = null;
    }
    const source = require('../assets/music/bensound-smallguitar.mp3');
    const initialStatus = {
      shouldPlay: true,
      rate: 1.0, // Control the speed
      shouldCorrectPitch: true,
      volume: 1.0, // Control the volume
      isMuted: false
    };
    const {sound} = await Audio.Sound.createAsync(source, initialStatus);

    // Save the response of sound in playbackInstance
    this.playbackInstance = sound;
    // Make the loop of Audio
    this.playbackInstance.setIsLoopingAsync(true);
    //  Play the Music
    this.playbackInstance.playAsync();
  }

  changeTimeLeft() {
    this.state.timeLeft -= 1;
  }

  renderCountdown() {
    if (!this.state.preparing) {
      return (
        <CountDown
          running={this.state.countdownRunning}
          id={this.state.idCC.toString()}
          size={30}
          until={20}
          onChange={() => this.changeTimeLeft()}
          onFinish={() => this.answer({correct: false, incorrectAnswer: ''})}
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
    return null;
  }

  rendertxtImgQuizBody(question) {
    if (this.state.imgOrFnc) {
      // Picture question
      return (
        <View>
          <View style={styles.imgContainer}>
            <ImageBackground
              style={styles.imgQuestion}
              source={question.correctImg}
            >
              <Text style={styles.txtOverlay}>{question.correctShortType}</Text>
            </ImageBackground>
          </View>

          <Text style={styles.text}> {this.imgQtxtA} </Text>

          <ButtonContainer>
            {this.shuffleAnswers(question.answers).map((answer) => (
              <Button
                key={answer.id}
                txtAnswer={answer.longType}
                onPress={() => this.answer(answer)}
              />
            ))}
          </ButtonContainer>
        </View>
      );
    }
    // Function question
    return (
      <View>
        <View style={styles.txtContainer}>
          <Text style={styles.txtQuestion}>{question.correctLongType}</Text>
        </View>

        <Text style={styles.text}> {this.txtQimgA} </Text>

        <ButtonContainer>
          {this.shuffleAnswers(question.answers).map((answer) => (
            <ButtonImg
              key={answer.id}
              imgAnswer={answer.img}
              imgTxt={answer.shortType}
              onPress={() => this.answer(answer)}
            />
          ))}
        </ButtonContainer>
      </View>
    );
  }

  rendertxtTxtQuizBody(question) {
    if (this.state.imgOrFnc) {
      // Long text question
      return (
        <View>
          <View style={styles.txtContainer}>
            <Text style={styles.txtQuestion}>{question.correctLongType}</Text>
          </View>

          <Text style={styles.text}> {this.lngQshrtA} </Text>

          <ButtonContainer>
            {this.shuffleAnswers(question.answers).map((answer) => (
              <ButtonShortText
                key={answer.id}
                txtAnswer={answer.shortType}
                onPress={() => this.answer(answer)}
              />
            ))}
          </ButtonContainer>
        </View>
      );
    }
    // Short text question
    return (
      <View>
        <View style={styles.txtContainer}>
          <Text style={styles.txtQuestion}>{question.correctShortType}</Text>
        </View>

        <Text style={styles.text}> {this.shrtQlngA} </Text>

        <ButtonContainer>
          {this.shuffleAnswers(question.answers).map((answer) => (
            <Button
              key={answer.id}
              txtAnswer={answer.longType}
              onPress={() => this.answer(answer)}
            />
          ))}
        </ButtonContainer>
      </View>
    );
  }

  renderBody(question) {
    if (this.state.quizType === 'txtImg') {
      return this.rendertxtImgQuizBody(question);
    }
    return this.rendertxtTxtQuizBody(question);
  }

  render() {
    const question = this.state.questions[this.state.activeQuestionIndex];

    return (
      <View
        style={[
          styles.container,
          {backgroundColor: this.props.navigation.getParam('color')}
        ]}
      >
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safeArea}>
          {this.renderBody(question)}
          <View style={styles.bottomViewStyle}>
            <Text style={styles.text}>
              {`${this.state.correctCount}/${this.state.totalCount}`}
            </Text>
            {this.renderCountdown()}
            <Text style={styles.text}>{this.state.score} pts</Text>
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
