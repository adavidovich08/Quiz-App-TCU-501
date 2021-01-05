/**
 * correctImg: the image corresponding to the correst answer or question
 * correctShortType: usually what goes as txtOverlay of the image but could be the sole answer or question
 * correctLongType: the question or the correct answer
 * Naming conventions left ambiguous so they can be reused in other quizzes
 */
cloudy = {
  img: require('../../assets/weather/cloudy.jpg'),
  long: 'Cloudy'
};

partly_cloudy = {
  img: require('../../assets/weather/partly-cloudy.jpg'),
  long: 'Partly-Cloudy'
};

rainy = {
  img: require('../../assets/weather/rainy.jpg'),
  long: 'Rainy'
};

snowy = {
  img: require('../../assets/weather/snowy.jpg'),
  long: 'Snowy'
};

stormy = {
  img: require('../../assets/weather/stormy.jpg'),
  long: 'Stormy'
};

sunny = {
  img: require('../../assets/weather/sunny.jpg'),
  long: 'Sunny'
};

windy = {
  img: require('../../assets/weather/windy.jpg'),
  long: 'Windy'
};

const weather = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this weather condition?',
    imgQtxtA: 'Which weather condition matches this picture?'
  },
  {
    correctImg: rainy.img,
    correctShortType: '',
    correctLongType: rainy.long,
    answers: [
      {
        id: '1',
        img: rainy.img,
        shortType: '',
        longType: rainy.long,
        correct: true
      },
      {
        id: '2',
        img: cloudy.img,
        shortType: '',
        longType: cloudy.long
      },
      {
        id: '3',
        img: sunny.img,
        shortType: '',
        longType: sunny.long
      },
      {
        id: '4',
        img: windy.img,
        shortType: '',
        longType: windy.long
      }
    ]
  },
  {
    correctImg: snowy.img,
    correctShortType: '',
    correctLongType: snowy.long,
    answers: [
      {
        id: '1',
        img: snowy.img,
        shortType: '',
        longType: snowy.long,
        correct: true
      },
      {
        id: '2',
        img: cloudy.img,
        shortType: '',
        longType: cloudy.long
      },
      {
        id: '3',
        img: sunny.img,
        shortType: '',
        longType: sunny.long
      },
      {
        id: '4',
        img: windy.img,
        shortType: '',
        longType: windy.long
      }
    ]
  },
  {
    correctImg: cloudy.img,
    correctShortType: '',
    correctLongType: cloudy.long,
    answers: [
      {
        id: '1',
        img: cloudy.img,
        shortType: '',
        longType: cloudy.long,
        correct: true
      },
      {
        id: '2',
        img: partly_cloudy.img,
        shortType: '',
        longType: partly_cloudy.long
      },
      {
        id: '3',
        img: sunny.img,
        shortType: '',
        longType: sunny.long
      },
      {
        id: '4',
        img: stormy.img,
        shortType: '',
        longType: stormy.long
      }
    ]
  },
  {
    correctImg: partly_cloudy.img,
    correctShortType: '',
    correctLongType: partly_cloudy.long,
    answers: [
      {
        id: '1',
        img: partly_cloudy.img,
        shortType: '',
        longType: partly_cloudy.long,
        correct: true
      },
      {
        id: '2',
        img: cloudy.img,
        shortType: '',
        longType: cloudy.long
      },
      {
        id: '3',
        img: snowy.img,
        shortType: '',
        longType: snowy.long
      },
      {
        id: '4',
        img: stormy.img,
        shortType: '',
        longType: stormy.long
      }
    ]
  },
  {
    correctImg: stormy.img,
    correctShortType: '',
    correctLongType: stormy.long,
    answers: [
      {
        id: '1',
        img: stormy.img,
        shortType: '',
        longType: stormy.long,
        correct: true
      },
      {
        id: '2',
        img: sunny.img,
        shortType: '',
        longType: sunny.long
      },
      {
        id: '3',
        img: rainy.img,
        shortType: '',
        longType: rainy.long
      },
      {
        id: '4',
        img: partly_cloudy.img,
        shortType: '',
        longType: partly_cloudy.long
      }
    ]
  },
  {
    correctImg: sunny.img,
    correctShortType: '',
    correctLongType: sunny.long,
    answers: [
      {
        id: '1',
        img: sunny.img,
        shortType: '',
        longType: sunny.long,
        correct: true
      },
      {
        id: '2',
        img: stormy.img,
        shortType: '',
        longType: stormy.long
      },
      {
        id: '3',
        img: rainy.img,
        shortType: '',
        longType: rainy.long
      },
      {
        id: '4',
        img: cloudy.img,
        shortType: '',
        longType: cloudy.long
      }
    ]
  },
  {
    correctImg: windy.img,
    correctShortType: '',
    correctLongType: windy.long,
    answers: [
      {
        id: '1',
        img: windy.img,
        shortType: '',
        longType: windy.long,
        correct: true
      },
      {
        id: '2',
        img: sunny.img,
        shortType: '',
        longType: sunny.long
      },
      {
        id: '3',
        img: snowy.img,
        shortType: '',
        longType: snowy.long
      },
      {
        id: '4',
        img: partly_cloudy.img,
        shortType: '',
        longType: partly_cloudy.long
      }
    ]
  }
];

export default weather;
