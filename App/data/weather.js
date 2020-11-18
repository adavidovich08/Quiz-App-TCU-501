/**
 * correctImg: the image corresponding to the correst answer or question
 * correctShortType: usually what goes as txtOverlay of the image but could be the sole answer or question
 * correctLongType: the question or the correct answer
 * Naming conventions left ambiguous so they can be reused in other quizzes
 */
const weather = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches the weather condition?',
    imgQtxtA: 'Which weather condition matches the picture?'
  },
  {
    correctImg: require('../assets/weather/rainy.jpg'),
    correctLongType: 'Rainy',
    correctShortType: '',
    answers: [
      {
        id: '1',
        shortType: '',
        img: require('../assets/weather/rainy.jpg'),
        longType: 'Rainy',
        correct: true
      },
      {
        id: '2',
        shortType: '',
        img: require('../assets/weather/cloudy.jpg'),
        longType: 'Cloudy'
      },
      {
        id: '3',
        shortType: '',
        img: require('../assets/weather/sunny.jpg'),
        longType: 'Sunny'
      },
      {
        id: '4',
        shortType: '',
        img: require('../assets/weather/windy.jpg'),
        longType: 'Windy'
      }
    ]
  },
  {
    correctImg: require('../assets/weather/snowy.jpg'),
    correctLongType: 'Snowy',
    correctShortType: '',
    answers: [
      {
        id: '1',
        shortType: '',
        img: require('../assets/weather/snowy.jpg'),
        longType: 'Snowy',
        correct: true
      },
      {
        id: '2',
        shortType: '',
        img: require('../assets/weather/cloudy.jpg'),
        longType: 'Cloudy'
      },
      {
        id: '3',
        shortType: '',
        img: require('../assets/weather/sunny.jpg'),
        longType: 'Sunny'
      },
      {
        id: '4',
        shortType: '',
        img: require('../assets/weather/windy.jpg'),
        longType: 'Windy'
      }
    ]
  }
];

export default weather;
