const organs = [
  {
    correctImg: require('../assets/brain.jpg'),
    correctDesc:
      'It is the boss of your body. It controls everything you do, even when you are asleep.',
    correctOrgan: 'Brain',
    answers: [
      {
        id: '1',
        organ: 'Brain',
        img: require('../assets/brain.jpg'),
        desc:
          'It is the boss of your body. It controls everything you do, even when you are asleep.',
        correct: true
      },
      {
        id: '2',
        organ: 'Intestines',
        img: require('../assets/intestines.jpg'),
        desc:
          'It finishes the process of digesting food. It absorbs water and salts.'
      },
      {
        id: '3',
        organ: 'Heart',
        img: require('../assets/heart.jpg'),
        desc:
          'It sends blood around your body. The blood provides the oxygen and nutrients it needs.'
      },
      {
        id: '4',
        organ: 'Liver',
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
    correctOrgan: 'Heart',
    answers: [
      {
        id: '1',
        organ: 'Heart',
        img: require('../assets/heart.jpg'),
        desc:
          'It sends blood around your body. The blood provides the oxygen and nutrients it needs.',
        correct: true
      },
      {
        id: '2',
        organ: 'Brain',
        img: require('../assets/brain.jpg'),
        desc:
          'It is the boss of your body. It controls everything you do, even when you are asleep.'
      },
      {
        id: '3',
        organ: 'Stomach',
        img: require('../assets/stomach.jpg'),
        desc:
          'It stores the food you eat. It breaks down the food into a liquid mixture.'
      },
      {
        id: '4',
        organ: 'Spinal Cord',
        img: require('../assets/spinal_cord.jpg'),
        desc: 'It protects the main nerves of your body.'
      }
    ]
  },
  {
    correctImg: require('../assets/intestines.jpg'),
    correctDesc:
      'It finishes the process of digesting food. It absorbs water and salts.',
    correctOrgan: 'Intestines',
    answers: [
      {
        id: '1',
        organ: 'Intestines',
        img: require('../assets/intestines.jpg'),
        desc:
          'It finishes the process of digesting food. It absorbs water and salts.',
        correct: true
      },
      {
        id: '2',
        organ: 'Brain',
        img: require('../assets/brain.jpg'),
        desc:
          'It is the boss of your body. It controls everything you do, even when you are asleep.'
      },
      {
        id: '3',
        organ: 'Stomach',
        img: require('../assets/stomach.jpg'),
        desc:
          'It stores the food you eat. It breaks down the food into a liquid mixture.'
      },
      {
        id: '4',
        organ: 'Kidneys',
        img: require('../assets/kidneys.jpg'),
        desc: 'It filters waste out of your blood.'
      }
    ]
  },
  {
    correctImg: require('../assets/kidneys.jpg'),
    correctDesc: 'It filters waste out of your blood.',
    correctOrgan: 'Kidney',
    answers: [
      {
        id: '1',
        organ: 'Kidneys',
        img: require('../assets/kidneys.jpg'),
        desc: 'It filters waste out of your blood.',
        correct: true
      },
      {
        id: '2',
        organ: 'Liver',
        img: require('../assets/liver.jpg'),
        desc:
          'It cleans your blood. It produces an important digestive liquid called bile.'
      },
      {
        id: '3',
        organ: 'Lungs',
        img: require('../assets/lungs.jpg'),
        desc:
          'It allows you to breathe. It helps you to inhale and exhale the air.'
      },
      {
        id: '4',
        organ: 'Heart',
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
    correctOrgan: 'Liver',
    answers: [
      {
        id: '1',
        organ: 'Liver',
        img: require('../assets/liver.jpg'),
        desc:
          'It cleans your blood. It produces an important digestive liquid called bile.',
        correct: true
      },
      {
        id: '2',
        organ: 'Spinal Cord',
        img: require('../assets/spinal_cord.jpg'),
        desc: 'It protects the main nerves of your body.'
      },
      {
        id: '3',
        organ: 'Lungs',
        img: require('../assets/lungs.jpg'),
        desc:
          'It allows you to breathe. It helps you to inhale and exhale the air.'
      },
      {
        id: '4',
        organ: 'Kidneys',
        img: require('../assets/kidneys.jpg'),
        desc: 'It filters waste out of your blood.'
      }
    ]
  },
  {
    correctImg: require('../assets/lungs.jpg'),
    correctDesc:
      'It allows you to breathe. It helps you to inhale and exhale the air.',
    correctOrgan: 'Lungs',
    answers: [
      {
        id: '1',
        organ: 'Lungs',
        img: require('../assets/lungs.jpg'),
        desc:
          'It allows you to breathe. It helps you to inhale and exhale the air.',
        correct: true
      },
      {
        id: '2',
        organ: 'Kidneys',
        img: require('../assets/kidneys.jpg'),
        desc: 'It filters waste out of your blood.'
      },
      {
        id: '3',
        organ: 'Heart',
        img: require('../assets/heart.jpg'),
        desc:
          'It sends blood around your body. The blood provides the oxygen and nutrients it needs.'
      },
      {
        id: '4',
        organ: 'Brain',
        img: require('../assets/brain.jpg'),
        desc:
          'It is the boss of your body. It controls everything you do, even when you are asleep.'
      }
    ]
  },
  {
    correctImg: require('../assets/spinal_cord.jpg'),
    correctDesc: 'It protects the main nerves of your body.',
    correctOrgan: 'Spinal Cord',
    answers: [
      {
        id: '1',
        organ: 'Spinal Cord',
        img: require('../assets/spinal_cord.jpg'),
        desc: 'It protects the main nerves of your body.',
        correct: true
      },
      {
        id: '2',
        organ: 'Kidneys',
        img: require('../assets/kidneys.jpg'),
        desc: 'It filters waste out of your blood.'
      },
      {
        id: '3',
        organ: 'Lungs',
        img: require('../assets/lungs.jpg'),
        desc:
          'It allows you to breathe. It helps you to inhale and exhale the air.'
      },
      {
        id: '4',
        organ: 'Brain',
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
    correctOrgan: 'Stomach',
    answers: [
      {
        id: '1',
        organ: 'Stomach',
        img: require('../assets/stomach.jpg'),
        desc:
          'It stores the food you eat. It breaks down the food into a liquid mixture.',
        correct: true
      },
      {
        id: '2',
        organ: 'Intestines',
        img: require('../assets/intestines.jpg'),
        desc:
          'It finishes the process of digesting food. It absorbs water and salts.'
      },
      {
        id: '3',
        organ: 'Kidneys',
        img: require('../assets/kidneys.jpg'),
        desc: 'It filters waste out of your blood.'
      },
      {
        id: '4',
        organ: 'Liver',
        img: require('../assets/liver.jpg'),
        desc:
          'It cleans your blood. It produces an important digestive liquid called bile.'
      }
    ]
  }
];

export default organs;
