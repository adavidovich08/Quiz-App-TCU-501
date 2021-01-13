import {buildArray} from '../arrayBuilder';

biking = {
  img: require('../../assets/outdoor/biking.jpg'),
  long: 'Biking'
};

camping = {
  img: require('../../assets/outdoor/camping.jpg'),
  long: 'Camping'
};

fishing = {
  img: require('../../assets/outdoor/fishing.jpg'),
  long: 'Fishing'
};

hiking = {
  img: require('../../assets/outdoor/hiking.jpg'),
  long: 'Hiking'
};

kayaking = {
  img: require('../../assets/outdoor/kayaking.jpg'),
  long: 'Kayaking'
};

running = {
  img: require('../../assets/outdoor/running.jpg'),
  long: 'Running'
};

sailing = {
  img: require('../../assets/outdoor/sailing.jpg'),
  long: 'Sailing'
};

skateboarding = {
  img: require('../../assets/outdoor/skateboarding.jpg'),
  long: 'Skateboarding'
};

skiing = {
  img: require('../../assets/outdoor/skiing.jpg'),
  long: 'Skiing'
};

const array = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this outdoor activity?',
    imgQtxtA: 'Which outdoor activity matches this picture?'
  },
  {
    correct: biking,
    option1: camping,
    option2: hiking,
    option3: skateboarding
  },
  {
    correct: camping,
    option1: fishing,
    option2: running,
    option3: sailing
  },
  {
    correct: fishing,
    option1: sailing,
    option2: kayaking,
    option3: skiing
  },
  {
    correct: hiking,
    option1: running,
    option2: biking,
    option3: skateboarding
  },
  {
    correct: kayaking,
    option1: fishing,
    option2: sailing,
    option3: skiing
  },
  {
    correct: running,
    option1: camping,
    option2: skiing,
    option3: skateboarding
  },
  {
    correct: sailing,
    option1: fishing,
    option2: kayaking,
    option3: biking
  },
  {
    correct: skateboarding,
    option1: camping,
    option2: hiking,
    option3: running
  },
  {
    correct: skiing,
    option1: biking,
    option2: hiking,
    option3: kayaking
  }
];

outdoor = buildArray(array);

export default outdoor;
