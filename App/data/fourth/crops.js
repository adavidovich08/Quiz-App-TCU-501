/**
 * correctImg: the image corresponding to the correst answer or question
 * correctShortType: usually what goes as txtOverlay of the image but could be the sole answer or question
 * correctLongType: the question or the correct answer
 * Naming conventions left ambiguous so they can be reused in other quizzes
 */
banana = {
  img: require('../../assets/crops/banana.jpg'),
  long: 'Banana'
};

beans = {
  img: require('../../assets/crops/beans.jpg'),
  long: 'Beans'
};

cocoa = {
  img: require('../../assets/crops/cocoa.jpg'),
  long: 'Cocoa'
};

coconut = {
  img: require('../../assets/crops/coconut.jpg'),
  long: 'Coconut'
};

corn = {
  img: require('../../assets/crops/corn.jpg'),
  long: 'corn'
};

mango = {
  img: require('../../assets/crops/mango.jpg'),
  long: 'Mango'
};

onion = {
  img: require('../../assets/crops/onion.jpg'),
  long: 'Onion'
};

orange = {
  img: require('../../assets/crops/orange.jpg'),
  long: 'Orange'
};

pineapple = {
  img: require('../../assets/crops/pineapple.jpg'),
  long: 'Pineapple'
};

potato = {
  img: require('../../assets/crops/potato.jpg'),
  long: 'Potato'
};

rice = {
  img: require('../../assets/crops/rice.jpg'),
  long: 'Rice'
};

tomato = {
  img: require('../../assets/crops/tomato.jpg'),
  long: 'Tomato'
};

const crops = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this Costa Rican crop?',
    imgQtxtA: 'Which Costa Rican crop matches this picture?'
  },
  {
    correctImg: banana.img,
    correctShortType: '',
    correctLongType: banana.long,
    answers: [
      {
        id: '1',
        img: banana.img,
        shortType: '',
        longType: banana.long,
        correct: true
      },
      {
        id: '2',
        img: mango.img,
        shortType: '',
        longType: mango.long
      },
      {
        id: '3',
        img: tomato.img,
        shortType: '',
        longType: tomato.long
      },
      {
        id: '4',
        img: potato.img,
        shortType: '',
        longType: potato.long
      }
    ]
  },
  {
    correctImg: beans.img,
    correctShortType: '',
    correctLongType: beans.long,
    answers: [
      {
        id: '1',
        img: beans.img,
        shortType: '',
        longType: beans.long,
        correct: true
      },
      {
        id: '2',
        img: cocoa.img,
        shortType: '',
        longType: cocoa.long
      },
      {
        id: '3',
        img: coconut.img,
        shortType: '',
        longType: coconut.long
      },
      {
        id: '4',
        img: rice.img,
        shortType: '',
        longType: rice.long
      }
    ]
  },
  {
    correctImg: cocoa.img,
    correctShortType: '',
    correctLongType: cocoa.long,
    answers: [
      {
        id: '1',
        img: cocoa.img,
        shortType: '',
        longType: cocoa.long,
        correct: true
      },
      {
        id: '2',
        img: beans.img,
        shortType: '',
        longType: beans.long
      },
      {
        id: '3',
        img: onion.img,
        shortType: '',
        longType: onion.long
      },
      {
        id: '4',
        img: corn.img,
        shortType: '',
        longType: corn.long
      }
    ]
  },
  {
    correctImg: coconut.img,
    correctShortType: '',
    correctLongType: coconut.long,
    answers: [
      {
        id: '1',
        img: coconut.img,
        shortType: '',
        longType: coconut.long,
        correct: true
      },
      {
        id: '2',
        img: cocoa.img,
        shortType: '',
        longType: cocoa.long
      },
      {
        id: '3',
        img: orange.img,
        shortType: '',
        longType: orange.long
      },
      {
        id: '4',
        img: onion.img,
        shortType: '',
        longType: onion.long
      }
    ]
  },
  {
    correctImg: corn.img,
    correctShortType: '',
    correctLongType: corn.long,
    answers: [
      {
        id: '1',
        img: corn.img,
        shortType: '',
        longType: corn.long,
        correct: true
      },
      {
        id: '2',
        img: mango.img,
        shortType: '',
        longType: mango.long
      },
      {
        id: '3',
        img: banana.img,
        shortType: '',
        longType: banana.long
      },
      {
        id: '4',
        img: pineapple.img,
        shortType: '',
        longType: pineapple.long
      }
    ]
  },
  {
    correctImg: mango.img,
    correctShortType: '',
    correctLongType: mango.long,
    answers: [
      {
        id: '1',
        img: mango.img,
        shortType: '',
        longType: mango.long,
        correct: true
      },
      {
        id: '2',
        img: corn.img,
        shortType: '',
        longType: corn.long
      },
      {
        id: '3',
        img: rice.img,
        shortType: '',
        longType: rice.long
      },
      {
        id: '4',
        img: orange.img,
        shortType: '',
        longType: orange.long
      }
    ]
  },
  {
    correctImg: onion.img,
    correctShortType: '',
    correctLongType: onion.long,
    answers: [
      {
        id: '1',
        img: onion.img,
        shortType: '',
        longType: onion.long,
        correct: true
      },
      {
        id: '2',
        img: pineapple.img,
        shortType: '',
        longType: pineapple.long
      },
      {
        id: '3',
        img: tomato.img,
        shortType: '',
        longType: tomato.long
      },
      {
        id: '4',
        img: potato.img,
        shortType: '',
        longType: potato.long
      }
    ]
  },
  {
    correctImg: orange.img,
    correctShortType: '',
    correctLongType: orange.long,
    answers: [
      {
        id: '1',
        img: orange.img,
        shortType: '',
        longType: orange.long,
        correct: true
      },
      {
        id: '2',
        img: mango.img,
        shortType: '',
        longType: mango.long
      },
      {
        id: '3',
        img: tomato.img,
        shortType: '',
        longType: tomato.long
      },
      {
        id: '4',
        img: potato.img,
        shortType: '',
        longType: potato.long
      }
    ]
  },
  {
    correctImg: pineapple.img,
    correctShortType: '',
    correctLongType: pineapple.long,
    answers: [
      {
        id: '1',
        img: pineapple.img,
        shortType: '',
        longType: pineapple.long,
        correct: true
      },
      {
        id: '2',
        img: banana.img,
        shortType: '',
        longType: banana.long
      },
      {
        id: '3',
        img: coconut.img,
        shortType: '',
        longType: coconut.long
      },
      {
        id: '4',
        img: corn.img,
        shortType: '',
        longType: corn.long
      }
    ]
  },
  {
    correctImg: potato.img,
    correctShortType: '',
    correctLongType: potato.long,
    answers: [
      {
        id: '1',
        img: potato.img,
        shortType: '',
        longType: potato.long,
        correct: true
      },
      {
        id: '2',
        img: rice.img,
        shortType: '',
        longType: rice.long
      },
      {
        id: '3',
        img: beans.img,
        shortType: '',
        longType: beans.long
      },
      {
        id: '4',
        img: onion.img,
        shortType: '',
        longType: onion.long
      }
    ]
  },
  {
    correctImg: rice.img,
    correctShortType: '',
    correctLongType: rice.long,
    answers: [
      {
        id: '1',
        img: rice.img,
        shortType: '',
        longType: rice.long,
        correct: true
      },
      {
        id: '2',
        img: beans.img,
        shortType: '',
        longType: beans.long
      },
      {
        id: '3',
        img: cocoa.img,
        shortType: '',
        longType: cocoa.long
      },
      {
        id: '4',
        img: pineapple.img,
        shortType: '',
        longType: pineapple.long
      }
    ]
  },
  {
    correctImg: tomato.img,
    correctShortType: '',
    correctLongType: tomato.long,
    answers: [
      {
        id: '1',
        img: tomato.img,
        shortType: '',
        longType: tomato.long,
        correct: true
      },
      {
        id: '2',
        img: banana.img,
        shortType: '',
        longType: banana.long
      },
      {
        id: '3',
        img: potato.img,
        shortType: '',
        longType: potato.long
      },
      {
        id: '4',
        img: orange.img,
        shortType: '',
        longType: orange.long
      }
    ]
  }
];

export default crops;
