/**
 * correctShortType: usually what goes as txtOverlay of the image but could be the sole answer or question
 * correctLongType: the question or the correct answer
 * Naming conventions left ambiguous so they can be reused in other quizzes
 */
const prueba = [
  {
    quizType: 'txtTxt',
    shrtQlngA: 'Short question, long answer?',
    lngQshrtA: 'Long question, short answer?'
  },
  {
    correctLongType:
      'It is the boss of your body. It controls everything you do, even when you are asleep.',
    correctShortType: 'Brain',
    answers: [
      {
        id: '1',
        shortType: 'Brain',
        longType:
          'It is the boss of your body. It controls everything you do, even when you are asleep.',
        correct: true
      },
      {
        id: '2',
        shortType: 'Intestines',
        longType:
          'It finishes the process of digesting food. It absorbs water and salts.'
      },
      {
        id: '3',
        shortType: 'Heart',
        longType:
          'It sends blood around your body. The blood provides the oxygen and nutrients it needs.'
      },
      {
        id: '4',
        shortType: 'Liver',
        longType:
          'It cleans your blood. It produces an important digestive liquid called bile.'
      }
    ]
  },
  {
    correctLongType:
      'It is the boss of your body. It controls everything you do, even when you are asleep.',
    correctShortType: 'Brain',
    answers: [
      {
        id: '1',
        shortType: 'Brain',
        longType:
          'It is the boss of your body. It controls everything you do, even when you are asleep.',
        correct: true
      },
      {
        id: '2',
        shortType: 'Intestines',
        longType:
          'It finishes the process of digesting food. It absorbs water and salts.'
      },
      {
        id: '3',
        shortType: 'Heart',
        longType:
          'It sends blood around your body. The blood provides the oxygen and nutrients it needs.'
      },
      {
        id: '4',
        shortType: 'Liver',
        longType:
          'It cleans your blood. It produces an important digestive liquid called bile.'
      }
    ]
  }
];

export default prueba;
