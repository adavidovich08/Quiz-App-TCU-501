import wildlife from './wildlife';

/**
 * correctImg: the image corresponding to the correst answer or question
 * correctShortType: usually what goes as txtOverlay of the image but could be the sole answer or question
 * correctLongType: the question or the correct answer
 * Naming conventions left ambiguous so they can be reused in other quizzes
 */
avalanche = {
  img: require('../../assets/disasters/avalanche.jpg'),
  long: 'Avalanche'
};

drought = {
  img: require('../../assets/disasters/drought.jpg'),
  long: 'Drought'
};

earthquake = {
  img: require('../../assets/disasters/earthquake.jpg'),
  long: 'Earthquake'
};

flood = {
  img: require('../../assets/disasters/flood.jpg'),
  long: 'Flood'
};

hurricane = {
  img: require('../../assets/disasters/hurricane.jpg'),
  long: 'Hurricane'
};

thunderstorm = {
  img: require('../../assets/disasters/thunderstorm.jpg'),
  long: 'Thunderstorm'
};

tornado = {
  img: require('../../assets/disasters/tornado.jpg'),
  long: 'Tornado'
};

tsunami = {
  img: require('../../assets/disasters/tsunami.jpg'),
  long: 'Tsunami'
};

volcanic_eruption = {
  img: require('../../assets/disasters/volcanic-eruption.jpg'),
  long: 'Volcanic Eruption'
};

wildfire = {
  img: require('../../assets/disasters/wildfire.jpg'),
  long: 'Wildfire'
};

const disasters = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this natural disaster?',
    imgQtxtA: 'Which natural disaster matches this picture?'
  },
  {
    correctImg: avalanche.img,
    correctShortType: '',
    correctLongType: avalanche.long,
    answers: [
      {
        id: '1',
        img: avalanche.img,
        shortType: '',
        longType: avalanche.long,
        correct: true
      },
      {
        id: '2',
        img: tsunami.img,
        shortType: '',
        longType: tsunami.long
      },
      {
        id: '3',
        img: flood.img,
        shortType: '',
        longType: flood.long
      },
      {
        id: '4',
        img: drought.img,
        shortType: '',
        longType: drought.long
      }
    ]
  },
  {
    correctImg: drought.img,
    correctShortType: '',
    correctLongType: drought.long,
    answers: [
      {
        id: '1',
        img: drought.img,
        shortType: '',
        longType: drought.long,
        correct: true
      },
      {
        id: '2',
        img: wildfire.img,
        shortType: '',
        longType: wildfire.long
      },
      {
        id: '3',
        img: flood.img,
        shortType: '',
        longType: flood.long
      },
      {
        id: '4',
        img: volcanic_eruption.img,
        shortType: '',
        longType: volcanic_eruption.long
      }
    ]
  },
  {
    correctImg: earthquake.img,
    correctShortType: '',
    correctLongType: earthquake.long,
    answers: [
      {
        id: '1',
        img: earthquake.img,
        shortType: '',
        longType: earthquake.long,
        correct: true
      },
      {
        id: '2',
        img: hurricane.img,
        shortType: '',
        longType: hurricane.long
      },
      {
        id: '3',
        img: thunderstorm.img,
        shortType: '',
        longType: thunderstorm.long
      },
      {
        id: '4',
        img: tornado.img,
        shortType: '',
        longType: tornado.long
      }
    ]
  },
  {
    correctImg: flood.img,
    correctShortType: '',
    correctLongType: flood.long,
    answers: [
      {
        id: '1',
        img: flood.img,
        shortType: '',
        longType: flood.long,
        correct: true
      },
      {
        id: '2',
        img: tsunami.img,
        shortType: '',
        longType: tsunami.long
      },
      {
        id: '3',
        img: hurricane.img,
        shortType: '',
        longType: hurricane.long
      },
      {
        id: '4',
        img: drought.img,
        shortType: '',
        longType: drought.long
      }
    ]
  },
  {
    correctImg: hurricane.img,
    correctShortType: '',
    correctLongType: hurricane.long,
    answers: [
      {
        id: '1',
        img: hurricane.img,
        shortType: '',
        longType: hurricane.long,
        correct: true
      },
      {
        id: '2',
        img: tornado.img,
        shortType: '',
        longType: tornado.long
      },
      {
        id: '3',
        img: avalanche.img,
        shortType: '',
        longType: avalanche.long
      },
      {
        id: '4',
        img: thunderstorm.img,
        shortType: '',
        longType: thunderstorm.long
      }
    ]
  },
  {
    correctImg: thunderstorm.img,
    correctShortType: '',
    correctLongType: thunderstorm.long,
    answers: [
      {
        id: '1',
        img: thunderstorm.img,
        shortType: '',
        longType: thunderstorm.long,
        correct: true
      },
      {
        id: '2',
        img: earthquake.img,
        shortType: '',
        longType: earthquake.long
      },
      {
        id: '3',
        img: volcanic_eruption.img,
        shortType: '',
        longType: volcanic_eruption.long
      },
      {
        id: '4',
        img: wildfire.img,
        shortType: '',
        longType: wildfire.long
      }
    ]
  },
  {
    correctImg: tornado.img,
    correctShortType: '',
    correctLongType: tornado.long,
    answers: [
      {
        id: '1',
        img: tornado.img,
        shortType: '',
        longType: tornado.long,
        correct: true
      },
      {
        id: '2',
        img: hurricane.img,
        shortType: '',
        longType: hurricane.long
      },
      {
        id: '3',
        img: volcanic_eruption.img,
        shortType: '',
        longType: volcanic_eruption.long
      },
      {
        id: '4',
        img: earthquake.img,
        shortType: '',
        longType: earthquake.long
      }
    ]
  },
  {
    correctImg: tsunami.img,
    correctShortType: '',
    correctLongType: tsunami.long,
    answers: [
      {
        id: '1',
        img: tsunami.img,
        shortType: '',
        longType: tsunami.long,
        correct: true
      },
      {
        id: '2',
        img: avalanche.img,
        shortType: '',
        longType: avalanche.long
      },
      {
        id: '3',
        img: thunderstorm.img,
        shortType: '',
        longType: thunderstorm.long
      },
      {
        id: '4',
        img: drought.img,
        shortType: '',
        longType: drought.long
      }
    ]
  },
  {
    correctImg: volcanic_eruption.img,
    correctShortType: '',
    correctLongType: volcanic_eruption.long,
    answers: [
      {
        id: '1',
        img: volcanic_eruption.img,
        shortType: '',
        longType: volcanic_eruption.long,
        correct: true
      },
      {
        id: '2',
        img: wildfire.img,
        shortType: '',
        longType: wildfire.long
      },
      {
        id: '3',
        img: tornado.img,
        shortType: '',
        longType: tornado.long
      },
      {
        id: '4',
        img: earthquake.img,
        shortType: '',
        longType: earthquake.long
      }
    ]
  },
  {
    correctImg: wildfire.img,
    correctShortType: '',
    correctLongType: wildfire.long,
    answers: [
      {
        id: '1',
        img: wildfire.img,
        shortType: '',
        longType: wildfire.long,
        correct: true
      },
      {
        id: '2',
        img: tsunami.img,
        shortType: '',
        longType: tsunami.long
      },
      {
        id: '3',
        img: flood.img,
        shortType: '',
        longType: flood.long
      },
      {
        id: '4',
        img: avalanche.img,
        shortType: '',
        longType: avalanche.long
      }
    ]
  }
];

export default disasters;
