/**
 * correctImg: the image corresponding to the correst answer or question
 * correctShortType: usually what goes as txtOverlay of the image but could be the sole answer or question
 * correctLongType: the question or the correct answer
 * Naming conventions left ambiguous so they can be reused in other quizzes
 */
apple = {
  img: require('../../assets/fruits/apple.jpg'),
  long: 'Apple'
};

avocado = {
  img: require('../../assets/fruits/avocado.jpg'),
  long: 'Avocado'
};

banana = {
  img: require('../../assets/fruits/banana.jpg'),
  long: 'Banana'
};

blackberry = {
  img: require('../../assets/fruits/blackberry.jpg'),
  long: 'Blackberry'
};

cherry = {
  img: require('../../assets/fruits/cherry.jpg'),
  long: 'Cherry'
};

grapes = {
  img: require('../../assets/fruits/grapes.jpg'),
  long: 'Grapes'
};

kiwi = {
  img: require('../../assets/fruits/kiwi.jpg'),
  long: 'Kiwi'
};

lemon = {
  img: require('../../assets/fruits/lemon.jpg'),
  long: 'Lemon'
};

mango = {
  img: require('../../assets/fruits/mango.jpg'),
  long: 'Mango'
};

orange = {
  img: require('../../assets/fruits/orange.jpg'),
  long: 'Orange'
};

peach = {
  img: require('../../assets/fruits/peach.jpg'),
  long: 'Peach'
};

pineapple = {
  img: require('../../assets/fruits/pineapple.jpg'),
  long: 'Pineapple'
};

strawberry = {
  img: require('../../assets/fruits/strawberry.jpg'),
  long: 'Strawberry'
};

tomato = {
  img: require('../../assets/fruits/tomato.jpg'),
  long: 'Tomato'
};

watermelon = {
  img: require('../../assets/fruits/watermelon.jpg'),
  long: 'Watermelon'
};

const fruits = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this fruit?',
    imgQtxtA: 'Which fruit matches this picture?'
  },
  {
    correctImg: apple.img,
    correctShortType: '',
    correctLongType: apple.long,
    answers: [
      {
        id: '1',
        img: apple.img,
        shortType: '',
        longType: apple.long,
        correct: true
      },
      {
        id: '2',
        img: tomato.img,
        shortType: '',
        longType: tomato.long
      },
      {
        id: '3',
        img: cherry.img,
        shortType: '',
        longType: cherry.long
      },
      {
        id: '4',
        img: mango.img,
        shortType: '',
        longType: mango.long
      }
    ]
  },
  {
    correctImg: avocado.img,
    correctShortType: '',
    correctLongType: avocado.long,
    answers: [
      {
        id: '1',
        img: avocado.img,
        shortType: '',
        longType: avocado.long,
        correct: true
      },
      {
        id: '2',
        img: kiwi.img,
        shortType: '',
        longType: kiwi.long
      },
      {
        id: '3',
        img: lemon.img,
        shortType: '',
        longType: lemon.long
      },
      {
        id: '4',
        img: peach.img,
        shortType: '',
        longType: peach.long
      }
    ]
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
        img: grapes.img,
        shortType: '',
        longType: grapes.long
      },
      {
        id: '3',
        img: pineapple.img,
        shortType: '',
        longType: pineapple.long
      },
      {
        id: '4',
        img: watermelon.img,
        shortType: '',
        longType: watermelon.long
      }
    ]
  },
  {
    correctImg: blackberry.img,
    correctShortType: '',
    correctLongType: blackberry.long,
    answers: [
      {
        id: '1',
        img: blackberry.img,
        shortType: '',
        longType: blackberry.long,
        correct: true
      },
      {
        id: '2',
        img: strawberry.img,
        shortType: '',
        longType: strawberry.long
      },
      {
        id: '3',
        img: grapes.img,
        shortType: '',
        longType: grapes.long
      },
      {
        id: '4',
        img: watermelon.img,
        shortType: '',
        longType: watermelon.long
      }
    ]
  },
  {
    correctImg: cherry.img,
    correctShortType: '',
    correctLongType: cherry.long,
    answers: [
      {
        id: '1',
        img: cherry.img,
        shortType: '',
        longType: cherry.long,
        correct: true
      },
      {
        id: '2',
        img: apple.img,
        shortType: '',
        longType: apple.long
      },
      {
        id: '3',
        img: orange.img,
        shortType: '',
        longType: orange.long
      },
      {
        id: '4',
        img: grapes.img,
        shortType: '',
        longType: grapes.long
      }
    ]
  },
  {
    correctImg: grapes.img,
    correctShortType: '',
    correctLongType: grapes.long,
    answers: [
      {
        id: '1',
        img: grapes.img,
        shortType: '',
        longType: grapes.long,
        correct: true
      },
      {
        id: '2',
        img: blackberry.img,
        shortType: '',
        longType: blackberry.long
      },
      {
        id: '3',
        img: avocado.img,
        shortType: '',
        longType: avocado.long
      },
      {
        id: '4',
        img: cherry.img,
        shortType: '',
        longType: cherry.long
      }
    ]
  },
  {
    correctImg: kiwi.img,
    correctShortType: '',
    correctLongType: kiwi.long,
    answers: [
      {
        id: '1',
        img: kiwi.img,
        shortType: '',
        longType: kiwi.long,
        correct: true
      },
      {
        id: '2',
        img: lemon.img,
        shortType: '',
        longType: lemon.long
      },
      {
        id: '3',
        img: peach.img,
        shortType: '',
        longType: peach.long
      },
      {
        id: '4',
        img: mango.img,
        shortType: '',
        longType: mango.long
      }
    ]
  },
  {
    correctImg: lemon.img,
    correctShortType: '',
    correctLongType: lemon.long,
    answers: [
      {
        id: '1',
        img: lemon.img,
        shortType: '',
        longType: lemon.long,
        correct: true
      },
      {
        id: '2',
        img: kiwi.img,
        shortType: '',
        longType: kiwi.long
      },
      {
        id: '3',
        img: avocado.img,
        shortType: '',
        longType: avocado.long
      },
      {
        id: '4',
        img: strawberry.img,
        shortType: '',
        longType: strawberry.long
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
        img: banana.img,
        shortType: '',
        longType: banana.long
      },
      {
        id: '3',
        img: orange.img,
        shortType: '',
        longType: orange.long
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
        img: tomato.img,
        shortType: '',
        longType: tomato.long
      },
      {
        id: '3',
        img: banana.img,
        shortType: '',
        longType: banana.long
      },
      {
        id: '4',
        img: peach.img,
        shortType: '',
        longType: peach.long
      }
    ]
  },
  {
    correctImg: peach.img,
    correctShortType: '',
    correctLongType: peach.long,
    answers: [
      {
        id: '1',
        img: peach.img,
        shortType: '',
        longType: peach.long,
        correct: true
      },
      {
        id: '2',
        img: apple.img,
        shortType: '',
        longType: apple.long
      },
      {
        id: '3',
        img: blackberry.img,
        shortType: '',
        longType: blackberry.long
      },
      {
        id: '4',
        img: lemon.img,
        shortType: '',
        longType: lemon.long
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
        img: avocado.img,
        shortType: '',
        longType: avocado.long
      },
      {
        id: '4',
        img: strawberry.img,
        shortType: '',
        longType: strawberry.long
      }
    ]
  },
  {
    correctImg: strawberry.img,
    correctShortType: '',
    correctLongType: strawberry.long,
    answers: [
      {
        id: '1',
        img: strawberry.img,
        shortType: '',
        longType: strawberry.long,
        correct: true
      },
      {
        id: '2',
        img: cherry.img,
        shortType: '',
        longType: cherry.long
      },
      {
        id: '3',
        img: blackberry.img,
        shortType: '',
        longType: blackberry.long
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
        img: watermelon.img,
        shortType: '',
        longType: watermelon.long
      },
      {
        id: '3',
        img: apple.img,
        shortType: '',
        longType: apple.long
      },
      {
        id: '4',
        img: mango.img,
        shortType: '',
        longType: mango.long
      }
    ]
  },
  {
    correctImg: watermelon.img,
    correctShortType: '',
    correctLongType: watermelon.long,
    answers: [
      {
        id: '1',
        img: watermelon.img,
        shortType: '',
        longType: watermelon.long,
        correct: true
      },
      {
        id: '2',
        img: tomato.img,
        shortType: '',
        longType: tomato.long
      },
      {
        id: '3',
        img: pineapple.img,
        shortType: '',
        longType: pineapple.long
      },
      {
        id: '4',
        img: kiwi.img,
        shortType: '',
        longType: kiwi.long
      }
    ]
  }
];

export default fruits;
