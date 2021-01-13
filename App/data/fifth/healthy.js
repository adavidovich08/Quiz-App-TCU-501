import {buildArray} from '../arrayBuilder';

brush_teeth = {
  img: require('../../assets/healthy/brush-teeth.jpg'),
  long: 'Brushing your teeth'
};

dental_floss = {
  img: require('../../assets/healthy/dental-floss.jpg'),
  long: 'Using dental floss'
};

drink_water = {
  img: require('../../assets/healthy/drink-water.jpg'),
  long: 'Drinking water'
};

eating_healthy = {
  img: require('../../assets/healthy/eating-healthy.jpg'),
  long: 'Eating healthy'
};

exercise = {
  img: require('../../assets/healthy/exercise.jpg'),
  long: 'Exercising regularly'
};

learn_instrument = {
  img: require('../../assets/healthy/learn-instrument.jpg'),
  long: 'Learning an instrument'
};

not_smoking = {
  img: require('../../assets/healthy/not-smoking.jpg'),
  long: 'Not smoking'
};

taking_shower = {
  img: require('../../assets/healthy/taking-shower.jpg'),
  long: 'Taking a shower'
};

washing_hands = {
  img: require('../../assets/healthy/washing-hands.jpg'),
  long: 'Washing your hands'
};

const array = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this healthy activity?',
    imgQtxtA: 'Which healthy activity matches this picture?'
  },
  {
    correct: brush_teeth,
    option1: dental_floss,
    option2: eating_healthy,
    option3: taking_shower
  },
  {
    correct: dental_floss,
    option1: brush_teeth,
    option2: drink_water,
    option3: washing_hands
  },
  {
    correct: drink_water,
    option1: taking_shower,
    option2: learn_instrument,
    option3: exercise
  },
  {
    correct: eating_healthy,
    option1: exercise,
    option2: not_smoking,
    option3: learn_instrument
  },
  {
    correct: exercise,
    option1: eating_healthy,
    option2: not_smoking,
    option3: dental_floss
  },
  {
    correct: learn_instrument,
    option1: brush_teeth,
    option2: exercise,
    option3: washing_hands
  },
  {
    correct: not_smoking,
    option1: learn_instrument,
    option2: eating_healthy,
    option3: dental_floss
  },
  {
    correct: taking_shower,
    option1: washing_hands,
    option2: drink_water,
    option3: brush_teeth
  },
  {
    correct: washing_hands,
    option1: not_smoking,
    option2: taking_shower,
    option3: drink_water
  }
];

healthy = buildArray(array);

export default healthy;
