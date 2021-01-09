/**
 * correctImg: the image corresponding to the correst answer or question
 * correctShortType: usually what goes as txtOverlay of the image but could be the sole answer or question
 * correctLongType: the question or the correct answer
 * Naming conventions left ambiguous so they can be reused in other quizzes
 */
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

const hobbies = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this hobby?',
    imgQtxtA: 'Which hobby matches this picture?'
  },
  {
    correctImg: browsing_internet.img,
    correctShortType: '',
    correctLongType: browsing_internet.long,
    answers: [
      {
        id: '1',
        img: browsing_internet.img,
        shortType: '',
        longType: browsing_internet.long,
        correct: true
      },
      {
        id: '2',
        img: reading.img,
        shortType: '',
        longType: reading.long
      },
      {
        id: '3',
        img: watching_tv.img,
        shortType: '',
        longType: watching_tv.long
      },
      {
        id: '4',
        img: listening_music.img,
        shortType: '',
        longType: listening_music.long
      }
    ]
  },
  {
    correctImg: cooking.img,
    correctShortType: '',
    correctLongType: cooking.long,
    answers: [
      {
        id: '1',
        img: cooking.img,
        shortType: '',
        longType: cooking.long,
        correct: true
      },
      {
        id: '2',
        img: gardening.img,
        shortType: '',
        longType: gardening.long
      },
      {
        id: '3',
        img: play_instrument.img,
        shortType: '',
        longType: play_instrument.long
      },
      {
        id: '4',
        img: painting.img,
        shortType: '',
        longType: painting.long
      }
    ]
  },
  {
    correctImg: dancing.img,
    correctShortType: '',
    correctLongType: dancing.long,
    answers: [
      {
        id: '1',
        img: dancing.img,
        shortType: '',
        longType: dancing.long,
        correct: true
      },
      {
        id: '2',
        img: cooking.img,
        shortType: '',
        longType: cooking.long
      },
      {
        id: '3',
        img: knitting.img,
        shortType: '',
        longType: knitting.long
      },
      {
        id: '4',
        img: reading.img,
        shortType: '',
        longType: reading.long
      }
    ]
  },
  {
    correctImg: gardening.img,
    correctShortType: '',
    correctLongType: gardening.long,
    answers: [
      {
        id: '1',
        img: gardening.img,
        shortType: '',
        longType: gardening.long,
        correct: true
      },
      {
        id: '2',
        img: knitting.img,
        shortType: '',
        longType: knitting.long
      },
      {
        id: '3',
        img: play_instrument.img,
        shortType: '',
        longType: play_instrument.long
      },
      {
        id: '4',
        img: watching_tv.img,
        shortType: '',
        longType: watching_tv.long
      }
    ]
  },
  {
    correctImg: knitting.img,
    correctShortType: '',
    correctLongType: knitting.long,
    answers: [
      {
        id: '1',
        img: knitting.img,
        shortType: '',
        longType: knitting.long,
        correct: true
      },
      {
        id: '2',
        img: playing_pool.img,
        shortType: '',
        longType: playing_pool.long
      },
      {
        id: '3',
        img: listening_music.img,
        shortType: '',
        longType: listening_music.long
      },
      {
        id: '4',
        img: dancing.img,
        shortType: '',
        longType: dancing.long
      }
    ]
  },
  {
    correctImg: listening_music.img,
    correctShortType: '',
    correctLongType: listening_music.long,
    answers: [
      {
        id: '1',
        img: listening_music.img,
        shortType: '',
        longType: listening_music.long,
        correct: true
      },
      {
        id: '2',
        img: browsing_internet.img,
        shortType: '',
        longType: browsing_internet.long
      },
      {
        id: '3',
        img: playing_chess.img,
        shortType: '',
        longType: playing_chess.long
      },
      {
        id: '4',
        img: painting.img,
        shortType: '',
        longType: painting.long
      }
    ]
  },
  {
    correctImg: painting.img,
    correctShortType: '',
    correctLongType: painting.long,
    answers: [
      {
        id: '1',
        img: painting.img,
        shortType: '',
        longType: painting.long,
        correct: true
      },
      {
        id: '2',
        img: reading.img,
        shortType: '',
        longType: reading.long
      },
      {
        id: '3',
        img: playing_cards.img,
        shortType: '',
        longType: playing_cards.long
      },
      {
        id: '4',
        img: gardening.img,
        shortType: '',
        longType: gardening.long
      }
    ]
  },
  {
    correctImg: play_instrument.img,
    correctShortType: '',
    correctLongType: play_instrument.long,
    answers: [
      {
        id: '1',
        img: play_instrument.img,
        shortType: '',
        longType: play_instrument.long,
        correct: true
      },
      {
        id: '2',
        img: browsing_internet.img,
        shortType: '',
        longType: browsing_internet.long
      },
      {
        id: '3',
        img: play_videogames.img,
        shortType: '',
        longType: play_videogames.long
      },
      {
        id: '4',
        img: dancing.img,
        shortType: '',
        longType: dancing.long
      }
    ]
  },
  {
    correctImg: play_videogames.img,
    correctShortType: '',
    correctLongType: play_videogames.long,
    answers: [
      {
        id: '1',
        img: play_videogames.img,
        shortType: '',
        longType: play_videogames.long,
        correct: true
      },
      {
        id: '2',
        img: play_instrument.img,
        shortType: '',
        longType: play_instrument.long
      },
      {
        id: '3',
        img: playing_cards.img,
        shortType: '',
        longType: playing_cards.long
      },
      {
        id: '4',
        img: playing_pool.img,
        shortType: '',
        longType: playing_pool.long
      }
    ]
  },
  {
    correctImg: playing_cards.img,
    correctShortType: '',
    correctLongType: playing_cards.long,
    answers: [
      {
        id: '1',
        img: playing_cards.img,
        shortType: '',
        longType: playing_cards.long,
        correct: true
      },
      {
        id: '2',
        img: playing_chess.img,
        shortType: '',
        longType: playing_chess.long
      },
      {
        id: '3',
        img: playing_pool.img,
        shortType: '',
        longType: playing_pool.long
      },
      {
        id: '4',
        img: knitting.img,
        shortType: '',
        longType: knitting.long
      }
    ]
  },
  {
    correctImg: playing_chess.img,
    correctShortType: '',
    correctLongType: playing_chess.long,
    answers: [
      {
        id: '1',
        img: playing_chess.img,
        shortType: '',
        longType: playing_chess.long,
        correct: true
      },
      {
        id: '2',
        img: play_videogames.img,
        shortType: '',
        longType: play_videogames.long
      },
      {
        id: '3',
        img: playing_cards.img,
        shortType: '',
        longType: playing_cards.long
      },
      {
        id: '4',
        img: gardening.img,
        shortType: '',
        longType: gardening.long
      }
    ]
  },
  {
    correctImg: playing_pool.img,
    correctShortType: '',
    correctLongType: playing_pool.long,
    answers: [
      {
        id: '1',
        img: playing_pool.img,
        shortType: '',
        longType: playing_pool.long,
        correct: true
      },
      {
        id: '2',
        img: play_videogames.img,
        shortType: '',
        longType: play_videogames.long
      },
      {
        id: '3',
        img: playing_chess.img,
        shortType: '',
        longType: playing_chess.long
      },
      {
        id: '4',
        img: painting.img,
        shortType: '',
        longType: painting.long
      }
    ]
  },
  {
    correctImg: reading.img,
    correctShortType: '',
    correctLongType: reading.long,
    answers: [
      {
        id: '1',
        img: reading.img,
        shortType: '',
        longType: reading.long,
        correct: true
      },
      {
        id: '2',
        img: watching_tv.img,
        shortType: '',
        longType: watching_tv.long
      },
      {
        id: '3',
        img: cooking.img,
        shortType: '',
        longType: cooking.long
      },
      {
        id: '4',
        img: browsing_internet.img,
        shortType: '',
        longType: browsing_internet.long
      }
    ]
  },
  {
    correctImg: watching_tv.img,
    correctShortType: '',
    correctLongType: watching_tv.long,
    answers: [
      {
        id: '1',
        img: watching_tv.img,
        shortType: '',
        longType: watching_tv.long,
        correct: true
      },
      {
        id: '2',
        img: cooking.img,
        shortType: '',
        longType: cooking.long
      },
      {
        id: '3',
        img: dancing.img,
        shortType: '',
        longType: dancing.long
      },
      {
        id: '4',
        img: listening_music.img,
        shortType: '',
        longType: listening_music.long
      }
    ]
  }
];

export default hobbies;
