import {buildArray} from '../arrayBuilder';

amusement_park = {
  img: require('../../assets/vacation/amusement-park.jpg'),
  long: 'Going to the amusement park'
};

aquarium = {
  img: require('../../assets/vacation/aquarium.jpg'),
  long: 'Going to the aquarium'
};

beach = {
  img: require('../../assets/vacation/beach.jpg'),
  long: 'Going to the beach'
};

eating_out = {
  img: require('../../assets/vacation/eating-out.jpg'),
  long: 'Eating out'
};

horseback_riding = {
  img: require('../../assets/vacation/horseback-riding.jpg'),
  long: 'Going horseback riding'
};

minigolf = {
  img: require('../../assets/vacation/minigolf.jpg'),
  long: 'Playing minigolf'
};

museum = {
  img: require('../../assets/vacation/museum.jpg'),
  long: 'Going to the museum'
};

picnic = {
  img: require('../../assets/vacation/picnic.jpg'),
  long: 'Making a picnic'
};

pool_day = {
  img: require('../../assets/vacation/pool-day.jpg'),
  long: 'Having a pool day'
};

zoo = {
  img: require('../../assets/vacation/zoo.jpg'),
  long: 'Going to the Zoo'
};

const array = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this vacation activity?',
    imgQtxtA: 'Which vacation activity matches this picture?'
  },
  {
    correct: amusement_park,
    option1: picnic,
    option2: minigolf,
    option3: zoo
  },
  {
    correct: aquarium,
    option1: beach,
    option2: museum,
    option3: zoo
  },
  {
    correct: beach,
    option1: picnic,
    option2: eating_out,
    option3: pool_day
  },
  {
    correct: eating_out,
    option1: horseback_riding,
    option2: minigolf,
    option3: museum
  },
  {
    correct: horseback_riding,
    option1: amusement_park,
    option2: minigolf,
    option3: pool_day
  },
  {
    correct: minigolf,
    option1: picnic,
    option2: beach,
    option3: aquarium
  },
  {
    correct: museum,
    option1: aquarium,
    option2: eating_out,
    option3: zoo
  },
  {
    correct: picnic,
    option1: museum,
    option2: amusement_park,
    option3: pool_day
  },
  {
    correct: pool_day,
    option1: horseback_riding,
    option2: aquarium,
    option3: beach
  },
  {
    correct: zoo,
    option1: amusement_park,
    option2: eating_out,
    option3: horseback_riding
  }
];

vacation = buildArray(array);

export default vacation;
