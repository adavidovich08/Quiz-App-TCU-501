import {buildArray} from '../arrayBuilder';

browsing_internet = {
  img: require('../../assets/hobbies/browsing-internet.jpg'),
  long: 'Browsing the internet'
};

cooking = {
  img: require('../../assets/hobbies/cooking.jpg'),
  long: 'Cooking'
};

dancing = {
  img: require('../../assets/hobbies/dancing.jpg'),
  long: 'Dancing'
};

gardening = {
  img: require('../../assets/hobbies/gardening.jpg'),
  long: 'Gardening'
};

knitting = {
  img: require('../../assets/hobbies/knitting.jpg'),
  long: 'Knitting'
};

listening_music = {
  img: require('../../assets/hobbies/listening-to-music.jpg'),
  long: 'Listening to music'
};

painting = {
  img: require('../../assets/hobbies/painting.jpg'),
  long: 'Painting'
};

play_instrument = {
  img: require('../../assets/hobbies/play-instrument.jpg'),
  long: 'Playing an instrument'
};

play_videogames = {
  img: require('../../assets/hobbies/play-videogames.jpg'),
  long: 'Playing videogames'
};

playing_cards = {
  img: require('../../assets/hobbies/playing-cards.jpg'),
  long: 'Playing cards'
};

playing_chess = {
  img: require('../../assets/hobbies/playing-chess.jpg'),
  long: 'Playing chess'
};

playing_pool = {
  img: require('../../assets/hobbies/playing-pool.jpg'),
  long: 'Playing pool'
};

reading = {
  img: require('../../assets/hobbies/reading.jpg'),
  long: 'Reading'
};

watching_tv = {
  img: require('../../assets/hobbies/watching-tv.jpg'),
  long: 'Watching TV'
};

const array = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this hobby?',
    imgQtxtA: 'Which hobby matches this picture?'
  },
  {
    correct: browsing_internet,
    option1: reading,
    option2: watching_tv,
    option3: listening_music
  },
  {
    correct: cooking,
    option1: gardening,
    option2: play_instrument,
    option3: painting
  },
  {
    correct: dancing,
    option1: cooking,
    option2: knitting,
    option3: reading
  },
  {
    correct: gardening,
    option1: knitting,
    option2: play_instrument,
    option3: watching_tv
  },
  {
    correct: knitting,
    option1: playing_pool,
    option2: listening_music,
    option3: dancing
  },
  {
    correct: listening_music,
    option1: browsing_internet,
    option2: playing_chess,
    option3: painting
  },
  {
    correct: painting,
    option1: reading,
    option2: playing_cards,
    option3: gardening
  },
  {
    correct: play_instrument,
    option1: browsing_internet,
    option2: play_videogames,
    option3: dancing
  },
  {
    correct: play_videogames,
    option1: play_instrument,
    option2: playing_cards,
    option3: playing_pool
  },
  {
    correct: playing_cards,
    option1: playing_chess,
    option2: playing_pool,
    option3: knitting
  },
  {
    correct: playing_chess,
    option1: play_videogames,
    option2: playing_cards,
    option3: gardening
  },
  {
    correct: playing_pool,
    option1: play_videogames,
    option2: playing_chess,
    option3: painting
  },
  {
    correct: reading,
    option1: watching_tv,
    option2: cooking,
    option3: browsing_internet
  },
  {
    correct: watching_tv,
    option1: cooking,
    option2: dancing,
    option3: listening_music
  }
];

hobbies = buildArray(array);

export default hobbies;
