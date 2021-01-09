/**
 * correctImg: the image corresponding to the correst answer or question
 * correctShortType: usually what goes as txtOverlay of the image but could be the sole answer or question
 * correctLongType: the question or the correct answer
 * Naming conventions left ambiguous so they can be reused in other quizzes
 */
brush_teeth = {
  img: require('../../assets/healthy/brush-teeth.jpg'),
  long: 'Brushing your teeth'
};

dental_floss = {
  img: require('../../assets/healthy/dental-floss.jpg'),
  long: 'Using dental floss'
};

drink_water = {
  img: require('../../assets/healthy/drink-water.jpg'),
  long: 'Drinking water'
};

eating_healthy = {
  img: require('../../assets/healthy/eating-healthy.jpg'),
  long: 'Eating healthy'
};

exercise = {
  img: require('../../assets/healthy/exercise.jpg'),
  long: 'Doing exercise'
};

learn_instrument = {
  img: require('../../assets/healthy/learn-instrument.jpg'),
  long: 'Learning an instrument'
};

not_smoking = {
  img: require('../../assets/healthy/not-smoking.jpg'),
  long: 'Not smoking'
};

taking_shower = {
  img: require('../../assets/healthy/taking-shower.jpg'),
  long: 'Taking a shower'
};

washing_hands = {
  img: require('../../assets/healthy/washing-hands.jpg'),
  long: 'Washing your hands'
};

const healthy = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this healthy activity?',
    imgQtxtA: 'Which healthy activity matches this picture?'
  },
  {
    correctImg: brush_teeth.img,
    correctShortType: '',
    correctLongType: brush_teeth.long,
    answers: [
      {
        id: '1',
        img: brush_teeth.img,
        shortType: '',
        longType: brush_teeth.long,
        correct: true
      },
      {
        id: '2',
        img: dental_floss.img,
        shortType: '',
        longType: dental_floss.long
      },
      {
        id: '3',
        img: eating_healthy.img,
        shortType: '',
        longType: eating_healthy.long
      },
      {
        id: '4',
        img: taking_shower.img,
        shortType: '',
        longType: taking_shower.long
      }
    ]
  },
  {
    correctImg: dental_floss.img,
    correctShortType: '',
    correctLongType: dental_floss.long,
    answers: [
      {
        id: '1',
        img: dental_floss.img,
        shortType: '',
        longType: dental_floss.long,
        correct: true
      },
      {
        id: '2',
        img: brush_teeth.img,
        shortType: '',
        longType: brush_teeth.long
      },
      {
        id: '3',
        img: drink_water.img,
        shortType: '',
        longType: drink_water.long
      },
      {
        id: '4',
        img: washing_hands.img,
        shortType: '',
        longType: washing_hands.long
      }
    ]
  },
  {
    correctImg: drink_water.img,
    correctShortType: '',
    correctLongType: drink_water.long,
    answers: [
      {
        id: '1',
        img: drink_water.img,
        shortType: '',
        longType: drink_water.long,
        correct: true
      },
      {
        id: '2',
        img: taking_shower.img,
        shortType: '',
        longType: taking_shower.long
      },
      {
        id: '3',
        img: exercise.img,
        shortType: '',
        longType: exercise.long
      },
      {
        id: '4',
        img: learn_instrument.img,
        shortType: '',
        longType: learn_instrument.long
      }
    ]
  },
  {
    correctImg: eating_healthy.img,
    correctShortType: '',
    correctLongType: eating_healthy.long,
    answers: [
      {
        id: '1',
        img: eating_healthy.img,
        shortType: '',
        longType: eating_healthy.long,
        correct: true
      },
      {
        id: '2',
        img: exercise.img,
        shortType: '',
        longType: exercise.long
      },
      {
        id: '3',
        img: not_smoking.img,
        shortType: '',
        longType: not_smoking.long
      },
      {
        id: '4',
        img: learn_instrument.img,
        shortType: '',
        longType: learn_instrument.long
      }
    ]
  },
  {
    correctImg: exercise.img,
    correctShortType: '',
    correctLongType: exercise.long,
    answers: [
      {
        id: '1',
        img: exercise.img,
        shortType: '',
        longType: exercise.long,
        correct: true
      },
      {
        id: '2',
        img: eating_healthy.img,
        shortType: '',
        longType: eating_healthy.long
      },
      {
        id: '3',
        img: not_smoking.img,
        shortType: '',
        longType: not_smoking.long
      },
      {
        id: '4',
        img: dental_floss.img,
        shortType: '',
        longType: dental_floss.long
      }
    ]
  },
  {
    correctImg: learn_instrument.img,
    correctShortType: '',
    correctLongType: learn_instrument.long,
    answers: [
      {
        id: '1',
        img: learn_instrument.img,
        shortType: '',
        longType: learn_instrument.long,
        correct: true
      },
      {
        id: '2',
        img: brush_teeth.img,
        shortType: '',
        longType: brush_teeth.long
      },
      {
        id: '3',
        img: exercise.img,
        shortType: '',
        longType: exercise.long
      },
      {
        id: '4',
        img: washing_hands.img,
        shortType: '',
        longType: washing_hands.long
      }
    ]
  },
  {
    correctImg: not_smoking.img,
    correctShortType: '',
    correctLongType: not_smoking.long,
    answers: [
      {
        id: '1',
        img: not_smoking.img,
        shortType: '',
        longType: not_smoking.long,
        correct: true
      },
      {
        id: '2',
        img: learn_instrument.img,
        shortType: '',
        longType: learn_instrument.long
      },
      {
        id: '3',
        img: eating_healthy.img,
        shortType: '',
        longType: eating_healthy.long
      },
      {
        id: '4',
        img: dental_floss.img,
        shortType: '',
        longType: dental_floss.long
      }
    ]
  },
  {
    correctImg: taking_shower.img,
    correctShortType: '',
    correctLongType: taking_shower.long,
    answers: [
      {
        id: '1',
        img: taking_shower.img,
        shortType: '',
        longType: taking_shower.long,
        correct: true
      },
      {
        id: '2',
        img: washing_hands.img,
        shortType: '',
        longType: washing_hands.long
      },
      {
        id: '3',
        img: drink_water.img,
        shortType: '',
        longType: drink_water.long
      },
      {
        id: '4',
        img: brush_teeth.img,
        shortType: '',
        longType: brush_teeth.long
      }
    ]
  },
  {
    correctImg: washing_hands.img,
    correctShortType: '',
    correctLongType: washing_hands.long,
    answers: [
      {
        id: '1',
        img: washing_hands.img,
        shortType: '',
        longType: washing_hands.long,
        correct: true
      },
      {
        id: '2',
        img: not_smoking.img,
        shortType: '',
        longType: not_smoking.long
      },
      {
        id: '3',
        img: taking_shower.img,
        shortType: '',
        longType: taking_shower.long
      },
      {
        id: '4',
        img: drink_water.img,
        shortType: '',
        longType: drink_water.long
      }
    ]
  }
];

export default healthy;
