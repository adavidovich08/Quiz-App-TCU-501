/**
 * correctImg: the image corresponding to the correst answer or question
 * correctShortType: usually what goes as txtOverlay of the image but could be the sole answer or question
 * correctLongType: the question or the correct answer
 * Naming conventions left ambiguous so they can be reused in other quizzes
 */
const organs = [
  {
    correctImg: require('../assets/brain.jpg'),
    correctLongType:
      'It is the boss of your body. It controls everything you do, even when you are asleep.',
    correctShortType: 'Brain',
    answers: [
      {
        id: '1',
        shortType: 'Brain',
        img: require('../assets/brain.jpg'),
        longType:
          'It is the boss of your body. It controls everything you do, even when you are asleep.',
        correct: true
      },
      {
        id: '2',
        shortType: 'Intestines',
        img: require('../assets/intestines.jpg'),
        longType:
          'It finishes the process of digesting food. It absorbs water and salts.'
      },
      {
        id: '3',
        shortType: 'Heart',
        img: require('../assets/heart.jpg'),
        longType:
          'It sends blood around your body. The blood provides the oxygen and nutrients it needs.'
      },
      {
        id: '4',
        shortType: 'Liver',
        img: require('../assets/liver.jpg'),
        longType:
          'It cleans your blood. It produces an important digestive liquid called bile.'
      }
    ]
  },
  {
    correctImg: require('../assets/heart.jpg'),
    correctLongType:
      'It sends blood around your body. The blood provides the oxygen and nutrients it needs.',
    correctShortType: 'Heart',
    answers: [
      {
        id: '1',
        shortType: 'Heart',
        img: require('../assets/heart.jpg'),
        longType:
          'It sends blood around your body. The blood provides the oxygen and nutrients it needs.',
        correct: true
      },
      {
        id: '2',
        shortType: 'Brain',
        img: require('../assets/brain.jpg'),
        longType:
          'It is the boss of your body. It controls everything you do, even when you are asleep.'
      },
      {
        id: '3',
        shortType: 'Stomach',
        img: require('../assets/stomach.jpg'),
        longType:
          'It stores the food you eat. It breaks down the food into a liquid mixture.'
      },
      {
        id: '4',
        shortType: 'Spinal Cord',
        img: require('../assets/spinal_cord.jpg'),
        longType: 'It protects the main nerves of your body.'
      }
    ]
  },
  {
    correctImg: require('../assets/intestines.jpg'),
    correctLongType:
      'It finishes the process of digesting food. It absorbs water and salts.',
    correctShortType: 'Intestines',
    answers: [
      {
        id: '1',
        shortType: 'Intestines',
        img: require('../assets/intestines.jpg'),
        longType:
          'It finishes the process of digesting food. It absorbs water and salts.',
        correct: true
      },
      {
        id: '2',
        shortType: 'Brain',
        img: require('../assets/brain.jpg'),
        longType:
          'It is the boss of your body. It controls everything you do, even when you are asleep.'
      },
      {
        id: '3',
        shortType: 'Stomach',
        img: require('../assets/stomach.jpg'),
        longType:
          'It stores the food you eat. It breaks down the food into a liquid mixture.'
      },
      {
        id: '4',
        shortType: 'Kidneys',
        img: require('../assets/kidneys.jpg'),
        longType: 'It filters waste out of your blood.'
      }
    ]
  },
  {
    correctImg: require('../assets/kidneys.jpg'),
    correctLongType: 'It filters waste out of your blood.',
    correctShortType: 'Kidney',
    answers: [
      {
        id: '1',
        shortType: 'Kidneys',
        img: require('../assets/kidneys.jpg'),
        longType: 'It filters waste out of your blood.',
        correct: true
      },
      {
        id: '2',
        shortType: 'Liver',
        img: require('../assets/liver.jpg'),
        longType:
          'It cleans your blood. It produces an important digestive liquid called bile.'
      },
      {
        id: '3',
        shortType: 'Lungs',
        img: require('../assets/lungs.jpg'),
        longType:
          'It allows you to breathe. It helps you to inhale and exhale the air.'
      },
      {
        id: '4',
        shortType: 'Heart',
        img: require('../assets/heart.jpg'),
        longType:
          'It sends blood around your body. The blood provides the oxygen and nutrients it needs.'
      }
    ]
  },
  {
    correctImg: require('../assets/liver.jpg'),
    correctLongType:
      'It cleans your blood. It produces an important digestive liquid called bile.',
    correctShortType: 'Liver',
    answers: [
      {
        id: '1',
        shortType: 'Liver',
        img: require('../assets/liver.jpg'),
        longType:
          'It cleans your blood. It produces an important digestive liquid called bile.',
        correct: true
      },
      {
        id: '2',
        shortType: 'Spinal Cord',
        img: require('../assets/spinal_cord.jpg'),
        longType: 'It protects the main nerves of your body.'
      },
      {
        id: '3',
        shortType: 'Lungs',
        img: require('../assets/lungs.jpg'),
        longType:
          'It allows you to breathe. It helps you to inhale and exhale the air.'
      },
      {
        id: '4',
        shortType: 'Kidneys',
        img: require('../assets/kidneys.jpg'),
        longType: 'It filters waste out of your blood.'
      }
    ]
  },
  {
    correctImg: require('../assets/lungs.jpg'),
    correctLongType:
      'It allows you to breathe. It helps you to inhale and exhale the air.',
    correctShortType: 'Lungs',
    answers: [
      {
        id: '1',
        shortType: 'Lungs',
        img: require('../assets/lungs.jpg'),
        longType:
          'It allows you to breathe. It helps you to inhale and exhale the air.',
        correct: true
      },
      {
        id: '2',
        shortType: 'Kidneys',
        img: require('../assets/kidneys.jpg'),
        longType: 'It filters waste out of your blood.'
      },
      {
        id: '3',
        shortType: 'Heart',
        img: require('../assets/heart.jpg'),
        longType:
          'It sends blood around your body. The blood provides the oxygen and nutrients it needs.'
      },
      {
        id: '4',
        shortType: 'Brain',
        img: require('../assets/brain.jpg'),
        longType:
          'It is the boss of your body. It controls everything you do, even when you are asleep.'
      }
    ]
  },
  {
    correctImg: require('../assets/spinal_cord.jpg'),
    correctLongType: 'It protects the main nerves of your body.',
    correctShortType: 'Spinal Cord',
    answers: [
      {
        id: '1',
        shortType: 'Spinal Cord',
        img: require('../assets/spinal_cord.jpg'),
        longType: 'It protects the main nerves of your body.',
        correct: true
      },
      {
        id: '2',
        shortType: 'Kidneys',
        img: require('../assets/kidneys.jpg'),
        longType: 'It filters waste out of your blood.'
      },
      {
        id: '3',
        shortType: 'Lungs',
        img: require('../assets/lungs.jpg'),
        longType:
          'It allows you to breathe. It helps you to inhale and exhale the air.'
      },
      {
        id: '4',
        shortType: 'Brain',
        img: require('../assets/brain.jpg'),
        longType:
          'It is the boss of your body. It controls everything you do, even when you are asleep.'
      }
    ]
  },
  {
    correctImg: require('../assets/stomach.jpg'),
    correctLongType:
      'It stores the food you eat. It breaks down the food into a liquid mixture.',
    correctShortType: 'Stomach',
    answers: [
      {
        id: '1',
        shortType: 'Stomach',
        img: require('../assets/stomach.jpg'),
        longType:
          'It stores the food you eat. It breaks down the food into a liquid mixture.',
        correct: true
      },
      {
        id: '2',
        shortType: 'Intestines',
        img: require('../assets/intestines.jpg'),
        longType:
          'It finishes the process of digesting food. It absorbs water and salts.'
      },
      {
        id: '3',
        shortType: 'Kidneys',
        img: require('../assets/kidneys.jpg'),
        longType: 'It filters waste out of your blood.'
      },
      {
        id: '4',
        shortType: 'Liver',
        img: require('../assets/liver.jpg'),
        longType:
          'It cleans your blood. It produces an important digestive liquid called bile.'
      }
    ]
  }
];

export default organs;
