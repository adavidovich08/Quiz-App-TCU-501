/**
 * correctImg: the image corresponding to the correst answer or question
 * correctShortType: usually what goes as txtOverlay of the image but could be the sole answer or question
 * correctLongType: the question or the correct answer
 * Naming conventions left ambiguous so they can be reused in other quizzes
 */
biking = {
  img: require('../../assets/outdoor/biking.jpg'),
  long: 'Biking'
};

camping = {
  img: require('../../assets/outdoor/camping.jpg'),
  long: 'Camping'
};

fishing = {
  img: require('../../assets/outdoor/fishing.jpg'),
  long: 'Fishing'
};

hiking = {
  img: require('../../assets/outdoor/hiking.jpg'),
  long: 'Hiking'
};

kayaking = {
  img: require('../../assets/outdoor/kayaking.jpg'),
  long: 'Kayaking'
};

running = {
  img: require('../../assets/outdoor/running.jpg'),
  long: 'Running'
};

sailing = {
  img: require('../../assets/outdoor/sailing.jpg'),
  long: 'Sailing'
};

skateboarding = {
  img: require('../../assets/outdoor/skateboarding.jpg'),
  long: 'Skateboarding'
};

skiing = {
  img: require('../../assets/outdoor/skiing.jpg'),
  long: 'Skiing'
};

const outdoor = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this outdoor activity?',
    imgQtxtA: 'Which outdoor activity matches this picture?'
  },
  {
    correctImg: biking.img,
    correctShortType: '',
    correctLongType: biking.long,
    answers: [
      {
        id: '1',
        img: biking.img,
        shortType: '',
        longType: biking.long,
        correct: true
      },
      {
        id: '2',
        img: camping.img,
        shortType: '',
        longType: camping.long
      },
      {
        id: '3',
        img: hiking.img,
        shortType: '',
        longType: hiking.long
      },
      {
        id: '4',
        img: skateboarding.img,
        shortType: '',
        longType: skateboarding.long
      }
    ]
  },
  {
    correctImg: camping.img,
    correctShortType: '',
    correctLongType: camping.long,
    answers: [
      {
        id: '1',
        img: camping.img,
        shortType: '',
        longType: camping.long,
        correct: true
      },
      {
        id: '2',
        img: fishing.img,
        shortType: '',
        longType: fishing.long
      },
      {
        id: '3',
        img: running.img,
        shortType: '',
        longType: running.long
      },
      {
        id: '4',
        img: sailing.img,
        shortType: '',
        longType: sailing.long
      }
    ]
  },
  {
    correctImg: fishing.img,
    correctShortType: '',
    correctLongType: fishing.long,
    answers: [
      {
        id: '1',
        img: fishing.img,
        shortType: '',
        longType: fishing.long,
        correct: true
      },
      {
        id: '2',
        img: sailing.img,
        shortType: '',
        longType: sailing.long
      },
      {
        id: '3',
        img: kayaking.img,
        shortType: '',
        longType: kayaking.long
      },
      {
        id: '4',
        img: skiing.img,
        shortType: '',
        longType: skiing.long
      }
    ]
  },
  {
    correctImg: hiking.img,
    correctShortType: '',
    correctLongType: hiking.long,
    answers: [
      {
        id: '1',
        img: hiking.img,
        shortType: '',
        longType: hiking.long,
        correct: true
      },
      {
        id: '2',
        img: running.img,
        shortType: '',
        longType: running.long
      },
      {
        id: '3',
        img: biking.img,
        shortType: '',
        longType: biking.long
      },
      {
        id: '4',
        img: skateboarding.img,
        shortType: '',
        longType: skateboarding.long
      }
    ]
  },
  {
    correctImg: kayaking.img,
    correctShortType: '',
    correctLongType: kayaking.long,
    answers: [
      {
        id: '1',
        img: kayaking.img,
        shortType: '',
        longType: kayaking.long,
        correct: true
      },
      {
        id: '2',
        img: fishing.img,
        shortType: '',
        longType: fishing.long
      },
      {
        id: '3',
        img: sailing.img,
        shortType: '',
        longType: sailing.long
      },
      {
        id: '4',
        img: skiing.img,
        shortType: '',
        longType: skiing.long
      }
    ]
  },
  {
    correctImg: running.img,
    correctShortType: '',
    correctLongType: running.long,
    answers: [
      {
        id: '1',
        img: running.img,
        shortType: '',
        longType: running.long,
        correct: true
      },
      {
        id: '2',
        img: camping.img,
        shortType: '',
        longType: camping.long
      },
      {
        id: '3',
        img: skiing.img,
        shortType: '',
        longType: skiing.long
      },
      {
        id: '4',
        img: skateboarding.img,
        shortType: '',
        longType: skateboarding.long
      }
    ]
  },
  {
    correctImg: sailing.img,
    correctShortType: '',
    correctLongType: sailing.long,
    answers: [
      {
        id: '1',
        img: sailing.img,
        shortType: '',
        longType: sailing.long,
        correct: true
      },
      {
        id: '2',
        img: fishing.img,
        shortType: '',
        longType: fishing.long
      },
      {
        id: '3',
        img: kayaking.img,
        shortType: '',
        longType: kayaking.long
      },
      {
        id: '4',
        img: biking.img,
        shortType: '',
        longType: biking.long
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
        img: camping.img,
        shortType: '',
        longType: camping.long
      },
      {
        id: '3',
        img: hiking.img,
        shortType: '',
        longType: hiking.long
      },
      {
        id: '4',
        img: running.img,
        shortType: '',
        longType: running.long
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
        img: biking.img,
        shortType: '',
        longType: biking.long
      },
      {
        id: '3',
        img: hiking.img,
        shortType: '',
        longType: hiking.long
      },
      {
        id: '4',
        img: kayaking.img,
        shortType: '',
        longType: kayaking.long
      }
    ]
  }
];

export default outdoor;
