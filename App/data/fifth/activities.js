import {buildArray} from '../arrayBuilder';

board_games = {
  img: require('../../assets/activities/board-games.jpg'),
  long: 'Playing board games'
};

cooking = {
  img: require('../../assets/activities/cooking.jpg'),
  long: 'Cooking'
};

dancing = {
  img: require('../../assets/activities/dancing.jpg'),
  long: 'Dancing'
};

eating_healthy = {
  img: require('../../assets/activities/eating-healthy.jpg'),
  long: 'Eating healthy'
};

gym = {
  img: require('../../assets/activities/gym.jpg'),
  long: 'Going to the gym'
};

painting = {
  img: require('../../assets/activities/painting.jpg'),
  long: 'Painting'
};

reading = {
  img: require('../../assets/activities/reading.jpg'),
  long: 'Reading'
};

running_park = {
  img: require('../../assets/activities/running-park.jpg'),
  long: 'Running in the park'
};

soccer = {
  img: require('../../assets/activities/soccer.jpg'),
  long: 'Playing soccer'
};

swimming = {
  img: require('../../assets/activities/swimming.jpg'),
  long: 'Swimming in the pool'
};

watching_tv = {
  img: require('../../assets/activities/watching-tv.jpg'),
  long: 'Watching TV'
};

const array = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this activity?',
    imgQtxtA: 'Which activity matches this picture?'
  },
  {
    correct: board_games,
    option1: cooking,
    option2: painting,
    option3: watching_tv
  },
  {
    correct: cooking,
    option1: reading,
    option2: swimming,
    option3: watching_tv
  },
  {
    correct: dancing,
    option1: eating_healthy,
    option2: running_park,
    option3: soccer
  },
  {
    correct: eating_healthy,
    option1: gym,
    option2: board_games,
    option3: running_park
  },
  {
    correct: gym,
    option1: dancing,
    option2: painting,
    option3: swimming
  },
  {
    correct: painting,
    option1: reading,
    option2: soccer,
    option3: cooking
  },
  {
    correct: reading,
    option1: eating_healthy,
    option2: watching_tv,
    option3: dancing
  },
  {
    correct: running_park,
    option1: board_games,
    option2: gym,
    option3: swimming
  },
  {
    correct: soccer,
    option1: running_park,
    option2: cooking,
    option3: gym
  },
  {
    correct: swimming,
    option1: soccer,
    option2: dancing,
    option3: painting
  },
  {
    correct: watching_tv,
    option1: board_games,
    option2: eating_healthy,
    option3: reading
  }
];

activities = buildArray(array);

export default activities;
