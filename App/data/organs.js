const organs = [
  {
    correctImg: require('../assets/brain.jpg'),
    correctDesc:
      'It is the boss of your body. It controls everything you do, even when you are asleep.',
    answers: [
      {
        id: '1',
        organ: 'brain',
        img: require('../assets/brain.jpg'),
        desc:
          'It is the boss of your body. It controls everything you do, even when you are asleep.',
        correct: true
      },
      {
        id: '2',
        organ: 'intestines',
        img: require('../assets/intestines.jpg'),
        desc:
          'It finishes the process of digesting food. It absorbs water and salts.'
      },
      {
        id: '3',
        organ: 'heart',
        img: require('../assets/heart.jpg'),
        desc:
          'It sends blood around your body. The blood provides the oxygen and nutrients it needs.'
      },
      {
        id: '4',
        organ: 'liver',
        img: require('../assets/liver.jpg'),
        desc:
          'It cleans your blood. It produces an important digestive liquid called bile.'
      }
    ]
  },
  {
    correctImg: require('../assets/heart.jpg'),
    correctDesc:
      'It sends blood around your body. The blood provides the oxygen and nutrients it needs.',
    answers: [
      {
        id: '1',
        organ: 'heart',
        img: require('../assets/heart.jpg'),
        desc:
          'It sends blood around your body. The blood provides the oxygen and nutrients it needs.',
        correct: true
      },
      {
        id: '2',
        organ: 'brain',
        img: require('../assets/brain.jpg'),
        desc:
          'It is the boss of your body. It controls everything you do, even when you are asleep.'
      },
      {
        id: '3',
        organ: 'stomach',
        img: require('../assets/stomach.jpg'),
        desc:
          'It stores the food you eat. It breaks down the food into a liquid mixture.'
      },
      {
        id: '4',
        organ: 'spinal_cord',
        img: require('../assets/spinal_cord.jpg'),
        desc: 'It protects the main nerves of your body.'
      }
    ]
  },
  {
    correctImg: require('../assets/intestines.jpg'),
    correctDesc:
      'It finishes the process of digesting food. It absorbs water and salts.',
    answers: [
      {
        id: '1',
        organ: 'intestines',
        img: require('../assets/intestines.jpg'),
        desc:
          'It finishes the process of digesting food. It absorbs water and salts.',
        correct: true
      },
      {
        id: '2',
        organ: 'brain',
        img: require('../assets/brain.jpg'),
        desc:
          'It is the boss of your body. It controls everything you do, even when you are asleep.'
      },
      {
        id: '3',
        organ: 'stomach',
        img: require('../assets/stomach.jpg'),
        desc:
          'It stores the food you eat. It breaks down the food into a liquid mixture.'
      },
      {
        id: '4',
        organ: 'kidneys',
        img: require('../assets/kidneys.jpg'),
        desc: 'It filters waste out of your blood.'
      }
    ]
  },
  {
    correctImg: require('../assets/kidneys.jpg'),
    correctDesc: 'It filters waste out of your blood.',
    answers: [
      {
        id: '1',
        organ: 'kidneys',
        img: require('../assets/kidneys.jpg'),
        desc: 'It filters waste out of your blood.',
        correct: true
      },
      {
        id: '2',
        organ: 'liver',
        img: require('../assets/liver.jpg'),
        desc:
          'It cleans your blood. It produces an important digestive liquid called bile.'
      },
      {
        id: '3',
        organ: 'lungs',
        img: require('../assets/lungs.jpg'),
        desc:
          'It allows you to breathe. It helps you to inhale and exhale the air.'
      },
      {
        id: '4',
        organ: 'heart',
        img: require('../assets/heart.jpg'),
        desc:
          'It sends blood around your body. The blood provides the oxygen and nutrients it needs.'
      }
    ]
  },
  {
    correctImg: require('../assets/liver.jpg'),
    correctDesc:
      'It cleans your blood. It produces an important digestive liquid called bile.',
    answers: [
      {
        id: '1',
        organ: 'liver',
        img: require('../assets/liver.jpg'),
        desc:
          'It cleans your blood. It produces an important digestive liquid called bile.',
        correct: true
      },
      {
        id: '2',
        organ: 'spinal_cord',
        img: require('../assets/spinal_cord.jpg'),
        desc: 'It protects the main nerves of your body.'
      },
      {
        id: '3',
        organ: 'lungs',
        img: require('../assets/lungs.jpg'),
        desc:
          'It allows you to breathe. It helps you to inhale and exhale the air.'
      },
      {
        id: '4',
        organ: 'kidneys',
        img: require('../assets/kidneys.jpg'),
        desc: 'It filters waste out of your blood.'
      }
    ]
  },
  {
    correctImg: require('../assets/lungs.jpg'),
    correctDesc:
      'It allows you to breathe. It helps you to inhale and exhale the air.',
    answers: [
      {
        id: '1',
        organ: 'lungs',
        img: require('../assets/lungs.jpg'),
        desc:
          'It allows you to breathe. It helps you to inhale and exhale the air.',
        correct: true
      },
      {
        id: '2',
        organ: 'kidneys',
        img: require('../assets/kidneys.jpg'),
        desc: 'It filters waste out of your blood.'
      },
      {
        id: '3',
        organ: 'heart',
        img: require('../assets/heart.jpg'),
        desc:
          'It sends blood around your body. The blood provides the oxygen and nutrients it needs.'
      },
      {
        id: '4',
        organ: 'brain',
        img: require('../assets/brain.jpg'),
        desc:
          'It is the boss of your body. It controls everything you do, even when you are asleep.'
      }
    ]
  },
  {
    correctImg: require('../assets/spinal_cord.jpg'),
    correctDesc: 'It protects the main nerves of your body.',
    answers: [
      {
        id: '1',
        organ: 'spinal_cord',
        img: require('../assets/spinal_cord.jpg'),
        desc: 'It protects the main nerves of your body.',
        correct: true
      },
      {
        id: '2',
        organ: 'kidneys',
        img: require('../assets/kidneys.jpg'),
        desc: 'It filters waste out of your blood.'
      },
      {
        id: '3',
        organ: 'lungs',
        img: require('../assets/lungs.jpg'),
        desc:
          'It allows you to breathe. It helps you to inhale and exhale the air.'
      },
      {
        id: '4',
        organ: 'brain',
        img: require('../assets/brain.jpg'),
        desc:
          'It is the boss of your body. It controls everything you do, even when you are asleep.'
      }
    ]
  },
  {
    correctImg: require('../assets/stomach.jpg'),
    correctDesc:
      'It stores the food you eat. It breaks down the food into a liquid mixture.',
    answers: [
      {
        id: '1',
        organ: 'stomach',
        img: require('../assets/stomach.jpg'),
        desc:
          'It stores the food you eat. It breaks down the food into a liquid mixture.',
        correct: true
      },
      {
        id: '2',
        organ: 'intestines',
        img: require('../assets/intestines.jpg'),
        desc:
          'It finishes the process of digesting food. It absorbs water and salts.'
      },
      {
        id: '3',
        organ: 'kidneys',
        img: require('../assets/kidneys.jpg'),
        desc: 'It filters waste out of your blood.'
      },
      {
        id: '4',
        organ: 'liver',
        img: require('../assets/liver.jpg'),
        desc:
          'It cleans your blood. It produces an important digestive liquid called bile.'
      }
    ]
  }
];

export default organs;
