/**
 * correctImg: the image corresponding to the correst answer or question
 * correctShortType: usually what goes as txtOverlay of the image but could be the sole answer or question
 * correctLongType: the question or the correct answer
 * Naming conventions left ambiguous so they can be reused in other quizzes
 */
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

const sports = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this sport?',
    imgQtxtA: 'Which sport matches this picture?'
  },
  {
    correctImg: archery.img,
    correctShortType: '',
    correctLongType: archery.long,
    answers: [
      {
        id: '1',
        img: archery.img,
        shortType: '',
        longType: archery.long,
        correct: true
      },
      {
        id: '2',
        img: volleyball.img,
        shortType: '',
        longType: volleyball.long
      },
      {
        id: '3',
        img: skiing.img,
        shortType: '',
        longType: skiing.long
      },
      {
        id: '4',
        img: martial_arts.img,
        shortType: '',
        longType: martial_arts.long
      }
    ]
  },
  {
    correctImg: baseball.img,
    correctShortType: '',
    correctLongType: baseball.long,
    answers: [
      {
        id: '1',
        img: baseball.img,
        shortType: '',
        longType: baseball.long,
        correct: true
      },
      {
        id: '2',
        img: basketball.img,
        shortType: '',
        longType: basketball.long
      },
      {
        id: '3',
        img: volleyball.img,
        shortType: '',
        longType: volleyball.long
      },
      {
        id: '4',
        img: golf.img,
        shortType: '',
        longType: golf.long
      }
    ]
  },
  {
    correctImg: basketball.img,
    correctShortType: '',
    correctLongType: basketball.long,
    answers: [
      {
        id: '1',
        img: basketball.img,
        shortType: '',
        longType: basketball.long,
        correct: true
      },
      {
        id: '2',
        img: baseball.img,
        shortType: '',
        longType: baseball.long
      },
      {
        id: '3',
        img: volleyball.img,
        shortType: '',
        longType: volleyball.long
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
    correctImg: boxing.img,
    correctShortType: '',
    correctLongType: boxing.long,
    answers: [
      {
        id: '1',
        img: boxing.img,
        shortType: '',
        longType: boxing.long,
        correct: true
      },
      {
        id: '2',
        img: martial_arts.img,
        shortType: '',
        longType: martial_arts.long
      },
      {
        id: '3',
        img: skateboarding.img,
        shortType: '',
        longType: skateboarding.long
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
    correctImg: cycling.img,
    correctShortType: '',
    correctLongType: cycling.long,
    answers: [
      {
        id: '1',
        img: cycling.img,
        shortType: '',
        longType: cycling.long,
        correct: true
      },
      {
        id: '2',
        img: surfing.img,
        shortType: '',
        longType: surfing.long
      },
      {
        id: '3',
        img: tennis.img,
        shortType: '',
        longType: tennis.long
      },
      {
        id: '4',
        img: archery.img,
        shortType: '',
        longType: archery.long
      }
    ]
  },
  {
    correctImg: golf.img,
    correctShortType: '',
    correctLongType: golf.long,
    answers: [
      {
        id: '1',
        img: golf.img,
        shortType: '',
        longType: golf.long,
        correct: true
      },
      {
        id: '2',
        img: archery.img,
        shortType: '',
        longType: archery.long
      },
      {
        id: '3',
        img: boxing.img,
        shortType: '',
        longType: boxing.long
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
    correctImg: martial_arts.img,
    correctShortType: '',
    correctLongType: martial_arts.long,
    answers: [
      {
        id: '1',
        img: martial_arts.img,
        shortType: '',
        longType: martial_arts.long,
        correct: true
      },
      {
        id: '2',
        img: table_tennis.img,
        shortType: '',
        longType: table_tennis.long
      },
      {
        id: '3',
        img: boxing.img,
        shortType: '',
        longType: boxing.long
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
    correctImg: skateboarding.img,
    correctShortType: '',
    correctLongType: skateboarding.long,
    answers: [
      {
        id: '1',
        img: skateboarding.img,
        shortType: '',
        longType: skateboarding.long,
        correct: true
      },
      {
        id: '2',
        img: martial_arts.img,
        shortType: '',
        longType: martial_arts.long
      },
      {
        id: '3',
        img: skiing.img,
        shortType: '',
        longType: skiing.long
      },
      {
        id: '4',
        img: surfing.img,
        shortType: '',
        longType: surfing.long
      }
    ]
  },
  {
    correctImg: skiing.img,
    correctShortType: '',
    correctLongType: skiing.long,
    answers: [
      {
        id: '1',
        img: skiing.img,
        shortType: '',
        longType: skiing.long,
        correct: true
      },
      {
        id: '2',
        img: skateboarding.img,
        shortType: '',
        longType: skateboarding.long
      },
      {
        id: '3',
        img: surfing.img,
        shortType: '',
        longType: surfing.long
      },
      {
        id: '4',
        img: cycling.img,
        shortType: '',
        longType: cycling.long
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
        img: tennis.img,
        shortType: '',
        longType: tennis.long
      },
      {
        id: '3',
        img: golf.img,
        shortType: '',
        longType: golf.long
      },
      {
        id: '4',
        img: cycling.img,
        shortType: '',
        longType: cycling.long
      }
    ]
  },
  {
    correctImg: surfing.img,
    correctShortType: '',
    correctLongType: surfing.long,
    answers: [
      {
        id: '1',
        img: surfing.img,
        shortType: '',
        longType: surfing.long,
        correct: true
      },
      {
        id: '2',
        img: skateboarding.img,
        shortType: '',
        longType: skateboarding.long
      },
      {
        id: '3',
        img: skiing.img,
        shortType: '',
        longType: skiing.long
      },
      {
        id: '4',
        img: table_tennis.img,
        shortType: '',
        longType: table_tennis.long
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
        img: cycling.img,
        shortType: '',
        longType: cycling.long
      },
      {
        id: '3',
        img: boxing.img,
        shortType: '',
        longType: boxing.long
      },
      {
        id: '4',
        img: archery.img,
        shortType: '',
        longType: archery.long
      }
    ]
  },
  {
    correctImg: table_tennis.img,
    correctShortType: '',
    correctLongType: table_tennis.long,
    answers: [
      {
        id: '1',
        img: table_tennis.img,
        shortType: '',
        longType: table_tennis.long,
        correct: true
      },
      {
        id: '2',
        img: tennis.img,
        shortType: '',
        longType: tennis.long
      },
      {
        id: '3',
        img: baseball.img,
        shortType: '',
        longType: baseball.long
      },
      {
        id: '4',
        img: golf.img,
        shortType: '',
        longType: golf.long
      }
    ]
  },
  {
    correctImg: tennis.img,
    correctShortType: '',
    correctLongType: tennis.long,
    answers: [
      {
        id: '1',
        img: tennis.img,
        shortType: '',
        longType: tennis.long,
        correct: true
      },
      {
        id: '2',
        img: table_tennis.img,
        shortType: '',
        longType: table_tennis.long
      },
      {
        id: '3',
        img: basketball.img,
        shortType: '',
        longType: basketball.long
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
    correctImg: volleyball.img,
    correctShortType: '',
    correctLongType: volleyball.long,
    answers: [
      {
        id: '1',
        img: volleyball.img,
        shortType: '',
        longType: volleyball.long,
        correct: true
      },
      {
        id: '2',
        img: basketball.img,
        shortType: '',
        longType: basketball.long
      },
      {
        id: '3',
        img: baseball.img,
        shortType: '',
        longType: baseball.long
      },
      {
        id: '4',
        img: swimming.img,
        shortType: '',
        longType: swimming.long
      }
    ]
  }
];

export default sports;
