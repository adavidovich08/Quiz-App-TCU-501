import {buildArray} from '../arrayBuilder';

archery = {
  img: require('../../assets/sports/archery.jpg'),
  long: 'Archery'
};

baseball = {
  img: require('../../assets/sports/baseball.jpg'),
  long: 'Baseball'
};

basketball = {
  img: require('../../assets/sports/basketball.jpg'),
  long: 'Basketball'
};

boxing = {
  img: require('../../assets/sports/boxing.jpg'),
  long: 'Boxing'
};

cycling = {
  img: require('../../assets/sports/cycling.jpg'),
  long: 'Cycling'
};

golf = {
  img: require('../../assets/sports/golf.jpg'),
  long: 'Golf'
};

martial_arts = {
  img: require('../../assets/sports/martial-arts.jpg'),
  long: 'Martial arts'
};

skateboarding = {
  img: require('../../assets/sports/skateboarding.jpg'),
  long: 'Skateboarding'
};

skiing = {
  img: require('../../assets/sports/skiing.jpg'),
  long: 'Skiing'
};

soccer = {
  img: require('../../assets/sports/soccer.jpg'),
  long: 'Soccer'
};

surfing = {
  img: require('../../assets/sports/surfing.jpg'),
  long: 'Surfing'
};

swimming = {
  img: require('../../assets/sports/swimming.jpg'),
  long: 'Swimming'
};

table_tennis = {
  img: require('../../assets/sports/table-tennis.jpg'),
  long: 'Table tennis'
};

tennis = {
  img: require('../../assets/sports/tennis.jpg'),
  long: 'Tennis'
};

volleyball = {
  img: require('../../assets/sports/volleyball.jpg'),
  long: 'Volleyball'
};

const array = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this sport?',
    imgQtxtA: 'Which sport matches this picture?'
  },
  {
    correct: archery,
    option1: volleyball,
    option2: skiing,
    option3: martial_arts
  },
  {
    correct: baseball,
    option1: basketball,
    option2: golf,
    option3: volleyball
  },
  {
    correct: basketball,
    option1: baseball,
    option2: volleyball,
    option3: soccer
  },
  {
    correct: boxing,
    option1: martial_arts,
    option2: skateboarding,
    option3: swimming
  },
  {
    correct: cycling,
    option1: surfing,
    option2: tennis,
    option3: archery
  },
  {
    correct: golf,
    option1: boxing,
    option2: archery,
    option3: soccer
  },
  {
    correct: martial_arts,
    option1: table_tennis,
    option2: boxing,
    option3: swimming
  },
  {
    correct: skateboarding,
    option1: martial_arts,
    option2: skiing,
    option3: surfing
  },
  {
    correct: skiing,
    option1: skateboarding,
    option2: surfing,
    option3: cycling
  },
  {
    correct: soccer,
    option1: tennis,
    option2: golf,
    option3: cycling
  },
  {
    correct: swimming,
    option1: cycling,
    option2: boxing,
    option3: archery
  },
  {
    correct: tennis,
    option1: table_tennis,
    option2: soccer,
    option3: basketball
  },
  {
    correct: volleyball,
    option1: baseball,
    option2: basketball,
    option3: swimming
  }
];

sports = buildArray(array);

export default sports;
