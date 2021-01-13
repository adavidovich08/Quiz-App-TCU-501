import {buildArray} from '../arrayBuilder';

broccoli = {
  img: require('../../assets/vegetables/broccoli.jpg'),
  long: 'Broccoli'
};

cabbage = {
  img: require('../../assets/vegetables/cabbage.jpg'),
  long: 'Cabbage'
};

carrot = {
  img: require('../../assets/vegetables/carrot.jpg'),
  long: 'Carrot'
};

cauliflower = {
  img: require('../../assets/vegetables/cauliflower.jpg'),
  long: 'Cauliflower'
};

celery = {
  img: require('../../assets/vegetables/celery.jpg'),
  long: 'Celery'
};

garlic = {
  img: require('../../assets/vegetables/garlic.jpg'),
  long: 'Garlic'
};

ginger = {
  img: require('../../assets/vegetables/ginger.jpg'),
  long: 'Ginger'
};

lettuce = {
  img: require('../../assets/vegetables/lettuce.jpg'),
  long: 'Lettuce'
};

onion = {
  img: require('../../assets/vegetables/onion.jpg'),
  long: 'Onion'
};

potato = {
  img: require('../../assets/vegetables/potato.jpg'),
  long: 'Potato'
};

spinach = {
  img: require('../../assets/vegetables/spinach.jpg'),
  long: 'Spinach'
};

const array = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this vegetable?',
    imgQtxtA: 'Which vegetable matches this picture?'
  },
  {
    correct: broccoli,
    option1: cauliflower,
    option2: lettuce,
    option3: spinach
  },
  {
    correct: cabbage,
    option1: lettuce,
    option2: potato,
    option3: celery
  },
  {
    correct: carrot,
    option1: cabbage,
    option2: garlic,
    option3: ginger
  },
  {
    correct: cauliflower,
    option1: broccoli,
    option2: onion,
    option3: cabbage
  },
  {
    correct: celery,
    option1: spinach,
    option2: ginger,
    option3: carrot
  },
  {
    correct: garlic,
    option1: ginger,
    option2: onion,
    option3: broccoli
  },
  {
    correct: ginger,
    option1: garlic,
    option2: potato,
    option3: carrot
  },
  {
    correct: lettuce,
    option1: cabbage,
    option2: celery,
    option3: spinach
  },
  {
    correct: onion,
    option1: cauliflower,
    option2: potato,
    option3: garlic
  },
  {
    correct: potato,
    option1: onion,
    option2: cauliflower,
    option3: carrot
  },
  {
    correct: spinach,
    option1: broccoli,
    option2: celery,
    option3: lettuce
  }
];

vegetables = buildArray(array);

export default vegetables;
