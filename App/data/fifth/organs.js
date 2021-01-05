/**
 * correctImg: the image corresponding to the correst answer or question
 * correctShortType: usually what goes as txtOverlay of the image but could be the sole answer or question
 * correctLongType: the question or the correct answer
 * Naming conventions left ambiguous so they can be reused in other quizzes
 */
brain = {
  img: require('../../assets/organs/brain.jpg'),
  short: 'Brain',
  long:
    'It is the boss of your body. It controls everything you do, even when you are asleep.'
};

heart = {
  img: require('../../assets/organs/heart.jpg'),
  short: 'Heart',
  long:
    'It sends blood around your body. The blood provides the oxygen and nutrients it needs.'
};

intestines = {
  img: require('../../assets/organs/intestines.jpg'),
  short: 'Intestines',
  long: 'It finishes the process of digesting food. It absorbs water and salts.'
};

kidneys = {
  img: require('../../assets/organs/kidneys.jpg'),
  short: 'Kidneys',
  long: 'It filters waste out of your blood.'
};

liver = {
  img: require('../../assets/organs/liver.jpg'),
  short: 'Liver',
  long:
    'It cleans your blood. It produces an important digestive liquid called bile.'
};

lungs = {
  img: require('../../assets/organs/lungs.jpg'),
  short: 'Lungs',
  long: 'It allows you to breathe. It helps you to inhale and exhale the air.'
};

spinal_cord = {
  img: require('../../assets/organs/spinal_cord.jpg'),
  short: 'Spinal Cord',
  long: 'It protects the main nerves of your body.'
};

stomach = {
  img: require('../../assets/organs/stomach.jpg'),
  short: 'Stomach',
  long:
    'It stores the food you eat. It breaks down the food into a liquid mixture.'
};

const organs = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this function?',
    imgQtxtA: 'Which function matches this picture?'
  },
  {
    correctImg: brain.img,
    correctShortType: brain.short,
    correctLongType: brain.long,
    answers: [
      {
        id: '1',
        img: brain.img,
        shortType: brain.short,
        longType: brain.long,
        correct: true
      },
      {
        id: '2',
        img: intestines.img,
        shortType: intestines.short,
        longType: intestines.long
      },
      {
        id: '3',
        img: heart.img,
        shortType: heart.short,
        longType: heart.long
      },
      {
        id: '4',
        img: liver.img,
        shortType: liver.short,
        longType: liver.long
      }
    ]
  },
  {
    correctImg: heart.img,
    correctShortType: heart.short,
    correctLongType: heart.long,
    answers: [
      {
        id: '1',
        img: heart.img,
        shortType: heart.short,
        longType: heart.long,
        correct: true
      },
      {
        id: '2',
        img: brain.img,
        shortType: brain.short,
        longType: brain.long
      },
      {
        id: '3',
        img: stomach.img,
        shortType: stomach.short,
        longType: stomach.long
      },
      {
        id: '4',
        img: spinal_cord.img,
        shortType: spinal_cord.short,
        longType: spinal_cord.long
      }
    ]
  },
  {
    correctImg: intestines.img,
    correctShortType: intestines.short,
    correctLongType: intestines.long,
    answers: [
      {
        id: '1',
        img: intestines.img,
        shortType: intestines.short,
        longType: intestines.long,
        correct: true
      },
      {
        id: '2',
        img: brain.img,
        shortType: brain.short,
        longType: brain.long
      },
      {
        id: '3',
        img: stomach.img,
        shortType: stomach.short,
        longType: stomach.long
      },
      {
        id: '4',
        img: kidneys.img,
        shortType: kidneys.short,
        longType: kidneys.long
      }
    ]
  },
  {
    correctImg: kidneys.img,
    correctShortType: kidneys.short,
    correctLongType: kidneys.long,
    answers: [
      {
        id: '1',
        img: kidneys.img,
        shortType: kidneys.short,
        longType: kidneys.long,
        correct: true
      },
      {
        id: '2',
        img: liver.img,
        shortType: liver.short,
        longType: liver.long
      },
      {
        id: '3',
        img: lungs.img,
        shortType: lungs.short,
        longType: lungs.long
      },
      {
        id: '4',
        img: heart.img,
        shortType: heart.short,
        longType: heart.long
      }
    ]
  },
  {
    correctImg: liver.img,
    correctShortType: liver.short,
    correctLongType: liver.long,
    answers: [
      {
        id: '1',
        img: liver.img,
        shortType: liver.short,
        longType: liver.long,
        correct: true
      },
      {
        id: '2',
        img: spinal_cord.img,
        shortType: spinal_cord.short,
        longType: spinal_cord.long
      },
      {
        id: '3',
        img: lungs.img,
        shortType: lungs.short,
        longType: lungs.long
      },
      {
        id: '4',
        img: kidneys.img,
        shortType: kidneys.short,
        longType: kidneys.long
      }
    ]
  },
  {
    correctImg: lungs.img,
    correctShortType: lungs.short,
    correctLongType: lungs.long,
    answers: [
      {
        id: '1',
        img: lungs.img,
        shortType: lungs.short,
        longType: lungs.long,
        correct: true
      },
      {
        id: '2',
        img: kidneys.img,
        shortType: kidneys.short,
        longType: kidneys.long
      },
      {
        id: '3',
        img: heart.img,
        shortType: heart.short,
        longType: heart.long
      },
      {
        id: '4',
        img: brain.img,
        shortType: brain.short,
        longType: brain.long
      }
    ]
  },
  {
    correctImg: spinal_cord.img,
    correctShortType: spinal_cord.short,
    correctLongType: spinal_cord.long,
    answers: [
      {
        id: '1',
        img: spinal_cord.img,
        shortType: spinal_cord.short,
        longType: spinal_cord.long,
        correct: true
      },
      {
        id: '2',
        img: kidneys.img,
        shortType: kidneys.short,
        longType: kidneys.long
      },
      {
        id: '3',
        img: lungs.img,
        shortType: lungs.short,
        longType: lungs.long
      },
      {
        id: '4',
        img: brain.img,
        shortType: brain.short,
        longType: brain.long
      }
    ]
  },
  {
    correctImg: stomach.img,
    correctShortType: stomach.short,
    correctLongType: stomach.long,
    answers: [
      {
        id: '1',
        img: stomach.img,
        shortType: stomach.short,
        longType: stomach.long,
        correct: true
      },
      {
        id: '2',
        img: intestines.img,
        shortType: intestines.short,
        longType: intestines.long
      },
      {
        id: '3',
        img: kidneys.img,
        shortType: kidneys.short,
        longType: kidneys.long
      },
      {
        id: '4',
        img: liver.img,
        shortType: liver.short,
        longType: liver.long
      }
    ]
  }
];

export default organs;
