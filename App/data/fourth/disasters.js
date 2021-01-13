import {buildArray} from '../arrayBuilder';

avalanche = {
  img: require('../../assets/disasters/avalanche.jpg'),
  long: 'Avalanche'
};

drought = {
  img: require('../../assets/disasters/drought.jpg'),
  long: 'Drought'
};

earthquake = {
  img: require('../../assets/disasters/earthquake.jpg'),
  long: 'Earthquake'
};

flood = {
  img: require('../../assets/disasters/flood.jpg'),
  long: 'Flood'
};

hurricane = {
  img: require('../../assets/disasters/hurricane.jpg'),
  long: 'Hurricane'
};

thunderstorm = {
  img: require('../../assets/disasters/thunderstorm.jpg'),
  long: 'Thunderstorm'
};

tornado = {
  img: require('../../assets/disasters/tornado.jpg'),
  long: 'Tornado'
};

tsunami = {
  img: require('../../assets/disasters/tsunami.jpg'),
  long: 'Tsunami'
};

volcanic_eruption = {
  img: require('../../assets/disasters/volcanic-eruption.jpg'),
  long: 'Volcanic Eruption'
};

wildfire = {
  img: require('../../assets/disasters/wildfire.jpg'),
  long: 'Wildfire'
};

const array = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this natural disaster?',
    imgQtxtA: 'Which natural disaster matches this picture?'
  },
  {
    correct: avalanche,
    option1: tsunami,
    option2: flood,
    option3: drought
  },
  {
    correct: drought,
    option1: wildfire,
    option2: flood,
    option3: volcanic_eruption
  },
  {
    correct: earthquake,
    option1: hurricane,
    option2: thunderstorm,
    option3: tornado
  },
  {
    correct: flood,
    option1: tsunami,
    option2: hurricane,
    option3: drought
  },
  {
    correct: hurricane,
    option1: tornado,
    option2: avalanche,
    option3: thunderstorm
  },
  {
    correct: thunderstorm,
    option1: earthquake,
    option2: volcanic_eruption,
    option3: wildfire
  },
  {
    correct: tornado,
    option1: hurricane,
    option2: volcanic_eruption,
    option3: earthquake
  },
  {
    correct: tsunami,
    option1: avalanche,
    option2: thunderstorm,
    option3: drought
  },
  {
    correct: volcanic_eruption,
    option1: wildfire,
    option2: tornado,
    option3: earthquake
  },
  {
    correct: wildfire,
    option1: tsunami,
    option2: flood,
    option3: avalanche
  }
];

disasters = buildArray(array);

export default disasters;
