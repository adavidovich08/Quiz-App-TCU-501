import {buildArray} from '../arrayBuilder';

cloudy = {
  img: require('../../assets/weather/cloudy.jpg'),
  long: 'Cloudy'
};

partly_cloudy = {
  img: require('../../assets/weather/partly-cloudy.jpg'),
  long: 'Partly-Cloudy'
};

rainy = {
  img: require('../../assets/weather/rainy.jpg'),
  long: 'Rainy'
};

snowy = {
  img: require('../../assets/weather/snowy.jpg'),
  long: 'Snowy'
};

stormy = {
  img: require('../../assets/weather/stormy.jpg'),
  long: 'Stormy'
};

sunny = {
  img: require('../../assets/weather/sunny.jpg'),
  long: 'Sunny'
};

windy = {
  img: require('../../assets/weather/windy.jpg'),
  long: 'Windy'
};

const array = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this weather condition?',
    imgQtxtA: 'Which weather condition matches this picture?'
  },
  {
    correct: rainy,
    option1: cloudy,
    option2: sunny,
    option3: windy
  },
  {
    correct: snowy,
    option1: cloudy,
    option2: sunny,
    option3: windy
  },
  {
    correct: cloudy,
    option1: partly_cloudy,
    option2: sunny,
    option3: stormy
  },
  {
    correct: partly_cloudy,
    option1: cloudy,
    option2: snowy,
    option3: stormy
  },
  {
    correct: stormy,
    option1: sunny,
    option2: rainy,
    option3: partly_cloudy
  },
  {
    correct: sunny,
    option1: stormy,
    option2: rainy,
    option3: cloudy
  },
  {
    correct: windy,
    option1: sunny,
    option2: snowy,
    option3: partly_cloudy
  }
];

weather = buildArray(array);

export default weather;
