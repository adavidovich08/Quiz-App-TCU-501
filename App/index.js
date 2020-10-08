import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import QuizIndex from './screens/QuizIndex';
import Quiz from './screens/Quiz';
import HighScore from './screens/HighScore';
import Corrections from './screens/Corrections';

const MainStack = createStackNavigator({
  QuizIndex: {
    screen: QuizIndex,
    backgroundColor: '#fff',
    navigationOptions: {
      headerTitle: 'Quizzes'
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({navigation}) => ({
      headerTitle: navigation.getParam('title'),
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: navigation.getParam('color'),
        borderBottomColor: navigation.getParam('color')
      }
    })
  },
  HighScore: {
    screen: HighScore,
    navigationOptions: {
      headerTitle: 'High Scores',
      headerTintColor: '#000',
      headerStyle: {
        backgroundColor: '#FFF',
        borderBottomColor: '#FFF'
      }
    }
  },
  Corrections: {
    screen: Corrections,
    navigationOptions: {
      headerTitle: 'Corrections',
      headerTintColor: '#000',
      headerStyle: {
        backgroundColor: '#FFF',
        borderBottomColor: '#FFF'
      },
      headerLeft: () => null
    }
  }
});

export default createAppContainer(MainStack);
