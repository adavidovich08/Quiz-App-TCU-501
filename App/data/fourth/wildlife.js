/**
 * correctImg: the image corresponding to the correst answer or question
 * correctShortType: usually what goes as txtOverlay of the image but could be the sole answer or question
 * correctLongType: the question or the correct answer
 * Naming conventions left ambiguous so they can be reused in other quizzes
 */
bear = {
  img: require('../../assets/wildlife/bear.jpg'),
  long: 'Bear'
};

crab = {
  img: require('../../assets/wildlife/crab.jpg'),
  long: 'Crab'
};

crocodile = {
  img: require('../../assets/wildlife/crocodile.jpg'),
  long: 'Crocodile'
};

elephant = {
  img: require('../../assets/wildlife/elephant.jpg'),
  long: 'Elephant'
};

monkey = {
  img: require('../../assets/wildlife/monkey.jpg'),
  long: 'Monkey'
};

raccoon = {
  img: require('../../assets/wildlife/raccoon.jpg'),
  long: 'Raccoon'
};

scarlet_macaw = {
  img: require('../../assets/wildlife/scarlet-macaw.jpg'),
  long: 'Scarlet Macaw'
};

sloth = {
  img: require('../../assets/wildlife/sloth.jpg'),
  long: 'Sloth'
};

snake = {
  img: require('../../assets/wildlife/snake.jpg'),
  long: 'Snake'
};

squirrel = {
  img: require('../../assets/wildlife/squirrel.jpg'),
  long: 'Squirrel'
};

tiger = {
  img: require('../../assets/wildlife/tiger.jpg'),
  long: 'Tiger'
};

turtle = {
  img: require('../../assets/wildlife/turtle.jpg'),
  long: 'Turtle'
};

const wildlife = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this wildlife animal?',
    imgQtxtA: 'Which wildlife animal matches this picture?'
  },
  {
    correctImg: bear.img,
    correctShortType: '',
    correctLongType: bear.long,
    answers: [
      {
        id: '1',
        img: bear.img,
        shortType: '',
        longType: bear.long,
        correct: true
      },
      {
        id: '2',
        img: elephant.img,
        shortType: '',
        longType: elephant.long
      },
      {
        id: '3',
        img: sloth.img,
        shortType: '',
        longType: sloth.long
      },
      {
        id: '4',
        img: monkey.img,
        shortType: '',
        longType: monkey.long
      }
    ]
  },
  {
    correctImg: crab.img,
    correctShortType: '',
    correctLongType: crab.long,
    answers: [
      {
        id: '1',
        img: crab.img,
        shortType: '',
        longType: crab.long,
        correct: true
      },
      {
        id: '2',
        img: crocodile.img,
        shortType: '',
        longType: crocodile.long
      },
      {
        id: '3',
        img: scarlet_macaw.img,
        shortType: '',
        longType: scarlet_macaw.long
      },
      {
        id: '4',
        img: turtle.img,
        shortType: '',
        longType: turtle.long
      }
    ]
  },
  {
    correctImg: crocodile.img,
    correctShortType: '',
    correctLongType: crocodile.long,
    answers: [
      {
        id: '1',
        img: crocodile.img,
        shortType: '',
        longType: crocodile.long,
        correct: true
      },
      {
        id: '2',
        img: elephant.img,
        shortType: '',
        longType: elephant.long
      },
      {
        id: '3',
        img: raccoon.img,
        shortType: '',
        longType: raccoon.long
      },
      {
        id: '4',
        img: crab.img,
        shortType: '',
        longType: crab.long
      }
    ]
  },
  {
    correctImg: elephant.img,
    correctShortType: '',
    correctLongType: elephant.long,
    answers: [
      {
        id: '1',
        img: elephant.img,
        shortType: '',
        longType: elephant.long,
        correct: true
      },
      {
        id: '2',
        img: tiger.img,
        shortType: '',
        longType: tiger.long
      },
      {
        id: '3',
        img: bear.img,
        shortType: '',
        longType: bear.long
      },
      {
        id: '4',
        img: squirrel.img,
        shortType: '',
        longType: squirrel.long
      }
    ]
  },
  {
    correctImg: monkey.img,
    correctShortType: '',
    correctLongType: monkey.long,
    answers: [
      {
        id: '1',
        img: monkey.img,
        shortType: '',
        longType: monkey.long,
        correct: true
      },
      {
        id: '2',
        img: snake.img,
        shortType: '',
        longType: snake.long
      },
      {
        id: '3',
        img: scarlet_macaw.img,
        shortType: '',
        longType: scarlet_macaw.long
      },
      {
        id: '4',
        img: raccoon.img,
        shortType: '',
        longType: raccoon.long
      }
    ]
  },
  {
    correctImg: raccoon.img,
    correctShortType: '',
    correctLongType: raccoon.long,
    answers: [
      {
        id: '1',
        img: raccoon.img,
        shortType: '',
        longType: raccoon.long,
        correct: true
      },
      {
        id: '2',
        img: squirrel.img,
        shortType: '',
        longType: squirrel.long
      },
      {
        id: '3',
        img: sloth.img,
        shortType: '',
        longType: sloth.long
      },
      {
        id: '4',
        img: monkey.img,
        shortType: '',
        longType: monkey.long
      }
    ]
  },
  {
    correctImg: scarlet_macaw.img,
    correctShortType: '',
    correctLongType: scarlet_macaw.long,
    answers: [
      {
        id: '1',
        img: scarlet_macaw.img,
        shortType: '',
        longType: scarlet_macaw.long,
        correct: true
      },
      {
        id: '2',
        img: crab.img,
        shortType: '',
        longType: crab.long
      },
      {
        id: '3',
        img: turtle.img,
        shortType: '',
        longType: turtle.long
      },
      {
        id: '4',
        img: snake.img,
        shortType: '',
        longType: snake.long
      }
    ]
  },
  {
    correctImg: sloth.img,
    correctShortType: '',
    correctLongType: sloth.long,
    answers: [
      {
        id: '1',
        img: sloth.img,
        shortType: '',
        longType: sloth.long,
        correct: true
      },
      {
        id: '2',
        img: squirrel.img,
        shortType: '',
        longType: squirrel.long
      },
      {
        id: '3',
        img: bear.img,
        shortType: '',
        longType: bear.long
      },
      {
        id: '4',
        img: monkey.img,
        shortType: '',
        longType: monkey.long
      }
    ]
  },
  {
    correctImg: snake.img,
    correctShortType: '',
    correctLongType: snake.long,
    answers: [
      {
        id: '1',
        img: snake.img,
        shortType: '',
        longType: snake.long,
        correct: true
      },
      {
        id: '2',
        img: tiger.img,
        shortType: '',
        longType: tiger.long
      },
      {
        id: '3',
        img: crocodile.img,
        shortType: '',
        longType: crocodile.long
      },
      {
        id: '4',
        img: turtle.img,
        shortType: '',
        longType: turtle.long
      }
    ]
  },
  {
    correctImg: squirrel.img,
    correctShortType: '',
    correctLongType: squirrel.long,
    answers: [
      {
        id: '1',
        img: squirrel.img,
        shortType: '',
        longType: squirrel.long,
        correct: true
      },
      {
        id: '2',
        img: sloth.img,
        shortType: '',
        longType: sloth.long
      },
      {
        id: '3',
        img: bear.img,
        shortType: '',
        longType: bear.long
      },
      {
        id: '4',
        img: tiger.img,
        shortType: '',
        longType: tiger.long
      }
    ]
  },
  {
    correctImg: tiger.img,
    correctShortType: '',
    correctLongType: tiger.long,
    answers: [
      {
        id: '1',
        img: tiger.img,
        shortType: '',
        longType: tiger.long,
        correct: true
      },
      {
        id: '2',
        img: elephant.img,
        shortType: '',
        longType: elephant.long
      },
      {
        id: '3',
        img: raccoon.img,
        shortType: '',
        longType: raccoon.long
      },
      {
        id: '4',
        img: scarlet_macaw.img,
        shortType: '',
        longType: scarlet_macaw.long
      }
    ]
  },
  {
    correctImg: turtle.img,
    correctShortType: '',
    correctLongType: turtle.long,
    answers: [
      {
        id: '1',
        img: turtle.img,
        shortType: '',
        longType: turtle.long,
        correct: true
      },
      {
        id: '2',
        img: crab.img,
        shortType: '',
        longType: crab.long
      },
      {
        id: '3',
        img: crocodile.img,
        shortType: '',
        longType: crocodile.long
      },
      {
        id: '4',
        img: snake.img,
        shortType: '',
        longType: snake.long
      }
    ]
  }
];

export default wildlife;
