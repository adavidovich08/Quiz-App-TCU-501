import {buildArray} from '../arrayBuilder';

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

const array = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this wildlife animal?',
    imgQtxtA: 'Which wildlife animal matches this picture?'
  },
  {
    correct: bear,
    option1: elephant,
    option2: sloth,
    option3: monkey
  },
  {
    correct: crab,
    option1: crocodile,
    option2: scarlet_macaw,
    option3: turtle
  },
  {
    correct: crocodile,
    option1: elephant,
    option2: raccoon,
    option3: crab
  },
  {
    correct: elephant,
    option1: tiger,
    option2: bear,
    option3: squirrel
  },
  {
    correct: monkey,
    option1: snake,
    option2: scarlet_macaw,
    option3: raccoon
  },
  {
    correct: raccoon,
    option1: squirrel,
    option2: sloth,
    option3: monkey
  },
  {
    correct: scarlet_macaw,
    option1: crab,
    option2: turtle,
    option3: snake
  },
  {
    correct: sloth,
    option1: squirrel,
    option2: bear,
    option3: monkey
  },
  {
    correct: snake,
    option1: tiger,
    option2: crocodile,
    option3: turtle
  },
  {
    correct: squirrel,
    option1: sloth,
    option2: bear,
    option3: tiger
  },
  {
    correct: tiger,
    option1: elephant,
    option2: raccoon,
    option3: scarlet_macaw
  },
  {
    correct: turtle,
    option1: crab,
    option2: crocodile,
    option3: snake
  }
];

wildlife = buildArray(array);

export default wildlife;
