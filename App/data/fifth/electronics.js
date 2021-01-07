/**
 * correctImg: the image corresponding to the correst answer or question
 * correctShortType: usually what goes as txtOverlay of the image but could be the sole answer or question
 * correctLongType: the question or the correct answer
 * Naming conventions left ambiguous so they can be reused in other quizzes
 */
keyboard = {
  img: require('../../assets/electronics/keyboard.jpg'),
  long: 'Keyboard'
};

laptop = {
  img: require('../../assets/electronics/laptop.jpg'),
  long: 'Laptop'
};

mouse = {
  img: require('../../assets/electronics/mouse.jpg'),
  long: 'Mouse'
};

printer = {
  img: require('../../assets/electronics/printer.jpg'),
  long: 'Printer'
};

sim_card = {
  img: require('../../assets/electronics/sim-card.jpg'),
  long: 'SIM card'
};

smart_board = {
  img: require('../../assets/electronics/smart-board.jpg'),
  long: 'Smart Board'
};

smartphone = {
  img: require('../../assets/electronics/smartphone.jpg'),
  long: 'Smartphone'
};

smartwatch = {
  img: require('../../assets/electronics/smartwatch.jpg'),
  long: 'Smartwatch'
};

speakers = {
  img: require('../../assets/electronics/speakers.jpg'),
  long: 'Speakers'
};

tablet = {
  img: require('../../assets/electronics/tablet.jpg'),
  long: 'Tablet'
};

const electronics = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this electronic device?',
    imgQtxtA: 'Which electronic device matches this picture?'
  },
  {
    correctImg: keyboard.img,
    correctShortType: '',
    correctLongType: keyboard.long,
    answers: [
      {
        id: '1',
        img: keyboard.img,
        shortType: '',
        longType: keyboard.long,
        correct: true
      },
      {
        id: '2',
        img: printer.img,
        shortType: '',
        longType: printer.long
      },
      {
        id: '3',
        img: smart_board.img,
        shortType: '',
        longType: smart_board.long
      },
      {
        id: '4',
        img: tablet.img,
        shortType: '',
        longType: tablet.long
      }
    ]
  },
  {
    correctImg: laptop.img,
    correctShortType: '',
    correctLongType: laptop.long,
    answers: [
      {
        id: '1',
        img: laptop.img,
        shortType: '',
        longType: laptop.long,
        correct: true
      },
      {
        id: '2',
        img: smartwatch.img,
        shortType: '',
        longType: smartwatch.long
      },
      {
        id: '3',
        img: tablet.img,
        shortType: '',
        longType: tablet.long
      },
      {
        id: '4',
        img: speakers.img,
        shortType: '',
        longType: speakers.long
      }
    ]
  },
  {
    correctImg: mouse.img,
    correctShortType: '',
    correctLongType: mouse.long,
    answers: [
      {
        id: '1',
        img: mouse.img,
        shortType: '',
        longType: mouse.long,
        correct: true
      },
      {
        id: '2',
        img: keyboard.img,
        shortType: '',
        longType: keyboard.long
      },
      {
        id: '3',
        img: printer.img,
        shortType: '',
        longType: printer.long
      },
      {
        id: '4',
        img: speakers.img,
        shortType: '',
        longType: speakers.long
      }
    ]
  },
  {
    correctImg: printer.img,
    correctShortType: '',
    correctLongType: printer.long,
    answers: [
      {
        id: '1',
        img: printer.img,
        shortType: '',
        longType: printer.long,
        correct: true
      },
      {
        id: '2',
        img: keyboard.img,
        shortType: '',
        longType: keyboard.long
      },
      {
        id: '3',
        img: mouse.img,
        shortType: '',
        longType: mouse.long
      },
      {
        id: '4',
        img: speakers.img,
        shortType: '',
        longType: speakers.long
      }
    ]
  },
  {
    correctImg: sim_card.img,
    correctShortType: '',
    correctLongType: sim_card.long,
    answers: [
      {
        id: '1',
        img: sim_card.img,
        shortType: '',
        longType: sim_card.long,
        correct: true
      },
      {
        id: '2',
        img: mouse.img,
        shortType: '',
        longType: mouse.long
      },
      {
        id: '3',
        img: smartwatch.img,
        shortType: '',
        longType: smartwatch.long
      },
      {
        id: '4',
        img: tablet.img,
        shortType: '',
        longType: tablet.long
      }
    ]
  },
  {
    correctImg: smart_board.img,
    correctShortType: '',
    correctLongType: smart_board.long,
    answers: [
      {
        id: '1',
        img: smart_board.img,
        shortType: '',
        longType: smart_board.long,
        correct: true
      },
      {
        id: '2',
        img: laptop.img,
        shortType: '',
        longType: laptop.long
      },
      {
        id: '3',
        img: smartphone.img,
        shortType: '',
        longType: smartphone.long
      },
      {
        id: '4',
        img: smartwatch.img,
        shortType: '',
        longType: smartwatch.long
      }
    ]
  },
  {
    correctImg: smartphone.img,
    correctShortType: '',
    correctLongType: smartphone.long,
    answers: [
      {
        id: '1',
        img: smartphone.img,
        shortType: '',
        longType: smartphone.long,
        correct: true
      },
      {
        id: '2',
        img: laptop.img,
        shortType: '',
        longType: laptop.long
      },
      {
        id: '3',
        img: sim_card.img,
        shortType: '',
        longType: sim_card.long
      },
      {
        id: '4',
        img: smart_board.img,
        shortType: '',
        longType: smart_board.long
      }
    ]
  },
  {
    correctImg: smartwatch.img,
    correctShortType: '',
    correctLongType: smartwatch.long,
    answers: [
      {
        id: '1',
        img: smartwatch.img,
        shortType: '',
        longType: smartwatch.long,
        correct: true
      },
      {
        id: '2',
        img: mouse.img,
        shortType: '',
        longType: mouse.long
      },
      {
        id: '3',
        img: smart_board.img,
        shortType: '',
        longType: smart_board.long
      },
      {
        id: '4',
        img: smartphone.img,
        shortType: '',
        longType: smartphone.long
      }
    ]
  },
  {
    correctImg: speakers.img,
    correctShortType: '',
    correctLongType: speakers.long,
    answers: [
      {
        id: '1',
        img: speakers.img,
        shortType: '',
        longType: speakers.long,
        correct: true
      },
      {
        id: '2',
        img: keyboard.img,
        shortType: '',
        longType: keyboard.long
      },
      {
        id: '3',
        img: printer.img,
        shortType: '',
        longType: printer.long
      },
      {
        id: '4',
        img: sim_card.img,
        shortType: '',
        longType: sim_card.long
      }
    ]
  },
  {
    correctImg: tablet.img,
    correctShortType: '',
    correctLongType: tablet.long,
    answers: [
      {
        id: '1',
        img: tablet.img,
        shortType: '',
        longType: tablet.long,
        correct: true
      },
      {
        id: '2',
        img: laptop.img,
        shortType: '',
        longType: laptop.long
      },
      {
        id: '3',
        img: sim_card.img,
        shortType: '',
        longType: sim_card.long
      },
      {
        id: '4',
        img: smartphone.img,
        shortType: '',
        longType: smartphone.long
      }
    ]
  }
];

export default electronics;
