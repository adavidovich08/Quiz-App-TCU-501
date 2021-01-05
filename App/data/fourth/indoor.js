/**
 * correctImg: the image corresponding to the correst answer or question
 * correctShortType: usually what goes as txtOverlay of the image but could be the sole answer or question
 * correctLongType: the question or the correct answer
 * Naming conventions left ambiguous so they can be reused in other quizzes
 */
board_games = {
  img: require('../../assets/indoor/board-games.jpg'),
  long: 'Playing board games'
};

cooking = {
  img: require('../../assets/indoor/cooking.jpg'),
  long: 'Cooking'
};

dancing = {
  img: require('../../assets/indoor/dancing.jpg'),
  long: 'Dancing'
};

jigsaw_puzzle = {
  img: require('../../assets/indoor/jigsaw-puzzle.jpg'),
  long: 'Doing jigsaw puzzles'
};

painting = {
  img: require('../../assets/indoor/painting.jpg'),
  long: 'Painting'
};

reading = {
  img: require('../../assets/indoor/reading.jpg'),
  long: 'Reading'
};

singing = {
  img: require('../../assets/indoor/singing.jpg'),
  long: 'Singing'
};

watching_tv = {
  img: require('../../assets/indoor/watching-tv.jpg'),
  long: 'Watching TV'
};

const indoor = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this indoor activity?',
    imgQtxtA: 'Which indoor activity matches this picture?'
  },
  {
    correctImg: board_games.img,
    correctShortType: '',
    correctLongType: board_games.long,
    answers: [
      {
        id: '1',
        img: board_games.img,
        shortType: '',
        longType: board_games.long,
        correct: true
      },
      {
        id: '2',
        img: jigsaw_puzzle.img,
        shortType: '',
        longType: jigsaw_puzzle.long
      },
      {
        id: '3',
        img: reading.img,
        shortType: '',
        longType: reading.long
      },
      {
        id: '4',
        img: watching_tv.img,
        shortType: '',
        longType: watching_tv.long
      }
    ]
  },
  {
    correctImg: cooking.img,
    correctShortType: '',
    correctLongType: cooking.long,
    answers: [
      {
        id: '1',
        img: cooking.img,
        shortType: '',
        longType: cooking.long,
        correct: true
      },
      {
        id: '2',
        img: painting.img,
        shortType: '',
        longType: painting.long
      },
      {
        id: '3',
        img: singing.img,
        shortType: '',
        longType: singing.long
      },
      {
        id: '4',
        img: dancing.img,
        shortType: '',
        longType: dancing.long
      }
    ]
  },
  {
    correctImg: dancing.img,
    correctShortType: '',
    correctLongType: dancing.long,
    answers: [
      {
        id: '1',
        img: dancing.img,
        shortType: '',
        longType: dancing.long,
        correct: true
      },
      {
        id: '2',
        img: singing.img,
        shortType: '',
        longType: singing.long
      },
      {
        id: '3',
        img: painting.img,
        shortType: '',
        longType: painting.long
      },
      {
        id: '4',
        img: cooking.img,
        shortType: '',
        longType: cooking.long
      }
    ]
  },
  {
    correctImg: jigsaw_puzzle.img,
    correctShortType: '',
    correctLongType: jigsaw_puzzle.long,
    answers: [
      {
        id: '1',
        img: jigsaw_puzzle.img,
        shortType: '',
        longType: jigsaw_puzzle.long,
        correct: true
      },
      {
        id: '2',
        img: board_games.img,
        shortType: '',
        longType: board_games.long
      },
      {
        id: '3',
        img: reading.img,
        shortType: '',
        longType: reading.long
      },
      {
        id: '4',
        img: watching_tv.img,
        shortType: '',
        longType: watching_tv.long
      }
    ]
  },
  {
    correctImg: painting.img,
    correctShortType: '',
    correctLongType: painting.long,
    answers: [
      {
        id: '1',
        img: painting.img,
        shortType: '',
        longType: painting.long,
        correct: true
      },
      {
        id: '2',
        img: jigsaw_puzzle.img,
        shortType: '',
        longType: jigsaw_puzzle.long
      },
      {
        id: '3',
        img: cooking.img,
        shortType: '',
        longType: cooking.long
      },
      {
        id: '4',
        img: watching_tv.img,
        shortType: '',
        longType: watching_tv.long
      }
    ]
  },
  {
    correctImg: reading.img,
    correctShortType: '',
    correctLongType: reading.long,
    answers: [
      {
        id: '1',
        img: reading.img,
        shortType: '',
        longType: reading.long,
        correct: true
      },
      {
        id: '2',
        img: board_games.img,
        shortType: '',
        longType: board_games.long
      },
      {
        id: '3',
        img: dancing.img,
        shortType: '',
        longType: dancing.long
      },
      {
        id: '4',
        img: singing.img,
        shortType: '',
        longType: singing.long
      }
    ]
  },
  {
    correctImg: singing.img,
    correctShortType: '',
    correctLongType: singing.long,
    answers: [
      {
        id: '1',
        img: singing.img,
        shortType: '',
        longType: singing.long,
        correct: true
      },
      {
        id: '2',
        img: board_games.img,
        shortType: '',
        longType: board_games.long
      },
      {
        id: '3',
        img: reading.img,
        shortType: '',
        longType: reading.long
      },
      {
        id: '4',
        img: painting.img,
        shortType: '',
        longType: painting.long
      }
    ]
  },
  {
    correctImg: watching_tv.img,
    correctShortType: '',
    correctLongType: watching_tv.long,
    answers: [
      {
        id: '1',
        img: watching_tv.img,
        shortType: '',
        longType: watching_tv.long,
        correct: true
      },
      {
        id: '2',
        img: jigsaw_puzzle.img,
        shortType: '',
        longType: jigsaw_puzzle.long
      },
      {
        id: '3',
        img: dancing.img,
        shortType: '',
        longType: dancing.long
      },
      {
        id: '4',
        img: cooking.img,
        shortType: '',
        longType: cooking.long
      }
    ]
  }
];

export default indoor;
