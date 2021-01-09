/**
 * correctImg: the image corresponding to the correst answer or question
 * correctShortType: usually what goes as txtOverlay of the image but could be the sole answer or question
 * correctLongType: the question or the correct answer
 * Naming conventions left ambiguous so they can be reused in other quizzes
 */
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

const activities = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this activity?',
    imgQtxtA: 'Which activity matches this picture?'
  },
  {
    correctImg: board_games.img,
    correctShortType: '',
    correctLongType: board_games.long,
    answers: [
      {
        id: '1',
        img: board_games.img,
        shortType: '',
        longType: board_games.long,
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
        img: painting.img,
        shortType: '',
        longType: painting.long
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
        img: reading.img,
        shortType: '',
        longType: reading.long
      },
      {
        id: '3',
        img: swimming.img,
        shortType: '',
        longType: swimming.long
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
        img: eating_healthy.img,
        shortType: '',
        longType: eating_healthy.long
      },
      {
        id: '3',
        img: running_park.img,
        shortType: '',
        longType: running_park.long
      },
      {
        id: '4',
        img: soccer.img,
        shortType: '',
        longType: soccer.long
      }
    ]
  },
  {
    correctImg: eating_healthy.img,
    correctShortType: '',
    correctLongType: eating_healthy.long,
    answers: [
      {
        id: '1',
        img: eating_healthy.img,
        shortType: '',
        longType: eating_healthy.long,
        correct: true
      },
      {
        id: '2',
        img: gym.img,
        shortType: '',
        longType: gym.long
      },
      {
        id: '3',
        img: board_games.img,
        shortType: '',
        longType: board_games.long
      },
      {
        id: '4',
        img: running_park.img,
        shortType: '',
        longType: running_park.long
      }
    ]
  },
  {
    correctImg: gym.img,
    correctShortType: '',
    correctLongType: gym.long,
    answers: [
      {
        id: '1',
        img: gym.img,
        shortType: '',
        longType: gym.long,
        correct: true
      },
      {
        id: '2',
        img: dancing.img,
        shortType: '',
        longType: dancing.long
      },
      {
        id: '3',
        img: painting.img,
        shortType: '',
        longType: painting.long
      },
      {
        id: '4',
        img: swimming.img,
        shortType: '',
        longType: swimming.long
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
        img: soccer.img,
        shortType: '',
        longType: soccer.long
      },
      {
        id: '4',
        img: cooking.img,
        shortType: '',
        longType: cooking.long
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
        img: eating_healthy.img,
        shortType: '',
        longType: eating_healthy.long
      },
      {
        id: '3',
        img: watching_tv.img,
        shortType: '',
        longType: watching_tv.long
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
    correctImg: running_park.img,
    correctShortType: '',
    correctLongType: running_park.long,
    answers: [
      {
        id: '1',
        img: running_park.img,
        shortType: '',
        longType: running_park.long,
        correct: true
      },
      {
        id: '2',
        img: board_games.img,
        shortType: '',
        longType: board_games.long
      },
      {
        id: '3',
        img: gym.img,
        shortType: '',
        longType: gym.long
      },
      {
        id: '4',
        img: swimming.img,
        shortType: '',
        longType: swimming.long
      }
    ]
  },
  {
    correctImg: soccer.img,
    correctShortType: '',
    correctLongType: soccer.long,
    answers: [
      {
        id: '1',
        img: soccer.img,
        shortType: '',
        longType: soccer.long,
        correct: true
      },
      {
        id: '2',
        img: running_park.img,
        shortType: '',
        longType: running_park.long
      },
      {
        id: '3',
        img: cooking.img,
        shortType: '',
        longType: cooking.long
      },
      {
        id: '4',
        img: gym.img,
        shortType: '',
        longType: gym.long
      }
    ]
  },
  {
    correctImg: swimming.img,
    correctShortType: '',
    correctLongType: swimming.long,
    answers: [
      {
        id: '1',
        img: swimming.img,
        shortType: '',
        longType: swimming.long,
        correct: true
      },
      {
        id: '2',
        img: soccer.img,
        shortType: '',
        longType: soccer.long
      },
      {
        id: '3',
        img: dancing.img,
        shortType: '',
        longType: dancing.long
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
        img: board_games.img,
        shortType: '',
        longType: board_games.long
      },
      {
        id: '3',
        img: eating_healthy.img,
        shortType: '',
        longType: eating_healthy.long
      },
      {
        id: '4',
        img: reading.img,
        shortType: '',
        longType: reading.long
      }
    ]
  }
];

export default activities;
