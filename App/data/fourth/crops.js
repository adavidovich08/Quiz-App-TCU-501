import {buildArray} from '../arrayBuilder';

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
  long: 'Corn'
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

const array = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this Costa Rican crop?',
    imgQtxtA: 'Which Costa Rican crop matches this picture?'
  },
  {
    correct: banana,
    option1: mango,
    option2: tomato,
    option3: potato
  },
  {
    correct: beans,
    option1: cocoa,
    option2: coconut,
    option3: rice
  },
  {
    correct: cocoa,
    option1: beans,
    option2: onion,
    option3: corn
  },
  {
    correct: coconut,
    option1: cocoa,
    option2: orange,
    option3: onion
  },
  {
    correct: corn,
    option1: mango,
    option2: banana,
    option3: pineapple
  },
  {
    correct: mango,
    option1: corn,
    option2: rice,
    option3: orange
  },
  {
    correct: onion,
    option1: pineapple,
    option2: tomato,
    option3: potato
  },
  {
    correct: orange,
    option1: mango,
    option2: tomato,
    option3: potato
  },
  {
    correct: pineapple,
    option1: banana,
    option2: coconut,
    option3: corn
  },
  {
    correct: potato,
    option1: rice,
    option2: beans,
    option3: onion
  },
  {
    correct: rice,
    option1: beans,
    option2: cocoa,
    option3: pineapple
  },
  {
    correct: tomato,
    option1: banana,
    option2: potato,
    option3: orange
  }
];

crops = buildArray(array);

export default crops;
