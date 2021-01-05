/**
 * correctImg: the image corresponding to the correst answer or question
 * correctShortType: usually what goes as txtOverlay of the image but could be the sole answer or question
 * correctLongType: the question or the correct answer
 * Naming conventions left ambiguous so they can be reused in other quizzes
 */
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
  long: 'Pool Day'
};

zoo = {
  img: require('../../assets/vacation/zoo.jpg'),
  long: 'Going to the Zoo'
};

const vacation = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this vacation activity?',
    imgQtxtA: 'Which vacation activity matches this picture?'
  },
  {
    correctImg: amusement_park.img,
    correctShortType: '',
    correctLongType: amusement_park.long,
    answers: [
      {
        id: '1',
        img: amusement_park.img,
        shortType: '',
        longType: amusement_park.long,
        correct: true
      },
      {
        id: '2',
        img: picnic.img,
        shortType: '',
        longType: picnic.long
      },
      {
        id: '3',
        img: minigolf.img,
        shortType: '',
        longType: minigolf.long
      },
      {
        id: '4',
        img: zoo.img,
        shortType: '',
        longType: zoo.long
      }
    ]
  },
  {
    correctImg: aquarium.img,
    correctShortType: '',
    correctLongType: aquarium.long,
    answers: [
      {
        id: '1',
        img: aquarium.img,
        shortType: '',
        longType: aquarium.long,
        correct: true
      },
      {
        id: '2',
        img: beach.img,
        shortType: '',
        longType: beach.long
      },
      {
        id: '3',
        img: museum.img,
        shortType: '',
        longType: museum.long
      },
      {
        id: '4',
        img: zoo.img,
        shortType: '',
        longType: zoo.long
      }
    ]
  },
  {
    correctImg: beach.img,
    correctShortType: '',
    correctLongType: beach.long,
    answers: [
      {
        id: '1',
        img: beach.img,
        shortType: '',
        longType: beach.long,
        correct: true
      },
      {
        id: '2',
        img: picnic.img,
        shortType: '',
        longType: picnic.long
      },
      {
        id: '3',
        img: eating_out.img,
        shortType: '',
        longType: eating_out.long
      },
      {
        id: '4',
        img: pool_day.img,
        shortType: '',
        longType: pool_day.long
      }
    ]
  },
  {
    correctImg: eating_out.img,
    correctShortType: '',
    correctLongType: eating_out.long,
    answers: [
      {
        id: '1',
        img: eating_out.img,
        shortType: '',
        longType: eating_out.long,
        correct: true
      },
      {
        id: '2',
        img: horseback_riding.img,
        shortType: '',
        longType: horseback_riding.long
      },
      {
        id: '3',
        img: minigolf.img,
        shortType: '',
        longType: minigolf.long
      },
      {
        id: '4',
        img: museum.img,
        shortType: '',
        longType: museum.long
      }
    ]
  },
  {
    correctImg: horseback_riding.img,
    correctShortType: '',
    correctLongType: horseback_riding.long,
    answers: [
      {
        id: '1',
        img: horseback_riding.img,
        shortType: '',
        longType: horseback_riding.long,
        correct: true
      },
      {
        id: '2',
        img: amusement_park.img,
        shortType: '',
        longType: amusement_park.long
      },
      {
        id: '3',
        img: minigolf.img,
        shortType: '',
        longType: minigolf.long
      },
      {
        id: '4',
        img: pool_day.img,
        shortType: '',
        longType: pool_day.long
      }
    ]
  },
  {
    correctImg: minigolf.img,
    correctShortType: '',
    correctLongType: minigolf.long,
    answers: [
      {
        id: '1',
        img: minigolf.img,
        shortType: '',
        longType: minigolf.long,
        correct: true
      },
      {
        id: '2',
        img: picnic.img,
        shortType: '',
        longType: picnic.long
      },
      {
        id: '3',
        img: beach.img,
        shortType: '',
        longType: beach.long
      },
      {
        id: '4',
        img: aquarium.img,
        shortType: '',
        longType: aquarium.long
      }
    ]
  },
  {
    correctImg: museum.img,
    correctShortType: '',
    correctLongType: museum.long,
    answers: [
      {
        id: '1',
        img: museum.img,
        shortType: '',
        longType: museum.long,
        correct: true
      },
      {
        id: '2',
        img: aquarium.img,
        shortType: '',
        longType: aquarium.long
      },
      {
        id: '3',
        img: eating_out.img,
        shortType: '',
        longType: eating_out.long
      },
      {
        id: '4',
        img: zoo.img,
        shortType: '',
        longType: zoo.long
      }
    ]
  },
  {
    correctImg: picnic.img,
    correctShortType: '',
    correctLongType: picnic.long,
    answers: [
      {
        id: '1',
        img: picnic.img,
        shortType: '',
        longType: picnic.long,
        correct: true
      },
      {
        id: '2',
        img: museum.img,
        shortType: '',
        longType: museum.long
      },
      {
        id: '3',
        img: amusement_park.img,
        shortType: '',
        longType: amusement_park.long
      },
      {
        id: '4',
        img: pool_day.img,
        shortType: '',
        longType: pool_day.long
      }
    ]
  },
  {
    correctImg: pool_day.img,
    correctShortType: '',
    correctLongType: pool_day.long,
    answers: [
      {
        id: '1',
        img: pool_day.img,
        shortType: '',
        longType: pool_day.long,
        correct: true
      },
      {
        id: '2',
        img: horseback_riding.img,
        shortType: '',
        longType: horseback_riding.long
      },
      {
        id: '3',
        img: aquarium.img,
        shortType: '',
        longType: aquarium.long
      },
      {
        id: '4',
        img: beach.img,
        shortType: '',
        longType: beach.long
      }
    ]
  },
  {
    correctImg: zoo.img,
    correctShortType: '',
    correctLongType: zoo.long,
    answers: [
      {
        id: '1',
        img: zoo.img,
        shortType: '',
        longType: zoo.long,
        correct: true
      },
      {
        id: '2',
        img: amusement_park.img,
        shortType: '',
        longType: amusement_park.long
      },
      {
        id: '3',
        img: eating_out.img,
        shortType: '',
        longType: eating_out.long
      },
      {
        id: '4',
        img: horseback_riding.img,
        shortType: '',
        longType: horseback_riding.long
      }
    ]
  }
];

export default vacation;
