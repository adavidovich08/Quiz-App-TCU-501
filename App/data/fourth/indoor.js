import {buildArray} from '../arrayBuilder';

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

const array = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this indoor activity?',
    imgQtxtA: 'Which indoor activity matches this picture?'
  },
  {
    correct: board_games,
    option1: jigsaw_puzzle,
    option2: reading,
    option3: watching_tv
  },
  {
    correct: cooking,
    option1: painting,
    option2: singing,
    option3: dancing
  },
  {
    correct: dancing,
    option1: singing,
    option2: painting,
    option3: cooking
  },
  {
    correct: jigsaw_puzzle,
    option1: board_games,
    option2: reading,
    option3: watching_tv
  },
  {
    correct: painting,
    option1: jigsaw_puzzle,
    option2: cooking,
    option3: watching_tv
  },
  {
    correct: reading,
    option1: board_games,
    option2: dancing,
    option3: singing
  },
  {
    correct: singing,
    option1: board_games,
    option2: reading,
    option3: painting
  },
  {
    correct: watching_tv,
    option1: jigsaw_puzzle,
    option2: dancing,
    option3: cooking
  }
];

indoor = buildArray(array);

export default indoor;
