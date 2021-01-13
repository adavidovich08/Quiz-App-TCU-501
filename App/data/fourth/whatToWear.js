import {buildArray} from '../arrayBuilder';

boots = {
  img: require('../../assets/whatToWear/boots.jpg'),
  long: 'Boots'
};

gloves = {
  img: require('../../assets/whatToWear/gloves.jpg'),
  long: 'Gloves'
};

hat = {
  img: require('../../assets/whatToWear/hat.jpg'),
  long: 'Hat'
};

pants = {
  img: require('../../assets/whatToWear/pants.jpg'),
  long: 'Pants'
};

raincoat = {
  img: require('../../assets/whatToWear/raincoat.jpg'),
  long: 'Raincoat'
};

sandals = {
  img: require('../../assets/whatToWear/sandals.jpg'),
  long: 'Sandals'
};

scarf = {
  img: require('../../assets/whatToWear/scarf.jpg'),
  long: 'Scarf'
};

socks = {
  img: require('../../assets/whatToWear/socks.jpg'),
  long: 'Socks'
};

sunglasses = {
  img: require('../../assets/whatToWear/sunglasses.jpg'),
  long: 'Sunglasses'
};

sweater = {
  img: require('../../assets/whatToWear/sweater.jpg'),
  long: 'Sweater'
};

t_shirt = {
  img: require('../../assets/whatToWear/t-shirt.jpg'),
  long: 'T-shirt'
};

umbrella = {
  img: require('../../assets/whatToWear/umbrella.jpg'),
  long: 'Umbrella'
};

const array = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this piece of clothing or accessory?',
    imgQtxtA: 'Which piece of clothing or accessory matches this picture?'
  },
  {
    correct: boots,
    option1: sandals,
    option2: umbrella,
    option3: raincoat
  },
  {
    correct: gloves,
    option1: socks,
    option2: scarf,
    option3: sweater
  },
  {
    correct: hat,
    option1: sunglasses,
    option2: scarf,
    option3: t_shirt
  },
  {
    correct: pants,
    option1: socks,
    option2: hat,
    option3: boots
  },
  {
    correct: raincoat,
    option1: t_shirt,
    option2: sandals,
    option3: gloves
  },
  {
    correct: sandals,
    option1: pants,
    option2: umbrella,
    option3: boots
  },
  {
    correct: scarf,
    option1: sunglasses,
    option2: gloves,
    option3: sweater
  },
  {
    correct: socks,
    option1: gloves,
    option2: hat,
    option3: sweater
  },
  {
    correct: sunglasses,
    option1: pants,
    option2: raincoat,
    option3: umbrella
  },
  {
    correct: sweater,
    option1: raincoat,
    option2: scarf,
    option3: t_shirt
  },
  {
    correct: t_shirt,
    option1: socks,
    option2: hat,
    option3: pants
  },
  {
    correct: umbrella,
    option1: boots,
    option2: sunglasses,
    option3: sandals
  }
];

whatToWear = buildArray(array);

export default whatToWear;
