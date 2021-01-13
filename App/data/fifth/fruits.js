import {buildArray} from '../arrayBuilder';

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

const array = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this fruit?',
    imgQtxtA: 'Which fruit matches this picture?'
  },
  {
    correct: apple,
    option1: tomato,
    option2: cherry,
    option3: mango
  },
  {
    correct: avocado,
    option1: kiwi,
    option2: lemon,
    option3: peach
  },
  {
    correct: banana,
    option1: grapes,
    option2: pineapple,
    option3: watermelon
  },
  {
    correct: blackberry,
    option1: strawberry,
    option2: grapes,
    option3: watermelon
  },
  {
    correct: cherry,
    option1: apple,
    option2: orange,
    option3: grapes
  },
  {
    correct: grapes,
    option1: blackberry,
    option2: cherry,
    option3: avocado
  },
  {
    correct: kiwi,
    option1: lemon,
    option2: peach,
    option3: mango
  },
  {
    correct: lemon,
    option1: kiwi,
    option2: avocado,
    option3: strawberry
  },
  {
    correct: mango,
    option1: banana,
    option2: orange,
    option3: pineapple
  },
  {
    correct: orange,
    option1: tomato,
    option2: banana,
    option3: peach
  },
  {
    correct: peach,
    option1: apple,
    option2: blackberry,
    option3: lemon
  },
  {
    correct: pineapple,
    option1: banana,
    option2: avocado,
    option3: strawberry
  },
  {
    correct: strawberry,
    option1: cherry,
    option2: blackberry,
    option3: orange
  },
  {
    correct: tomato,
    option1: watermelon,
    option2: apple,
    option3: mango
  },
  {
    correct: watermelon,
    option1: tomato,
    option2: pineapple,
    option3: kiwi
  }
];

fruits = buildArray(array);

export default fruits;
