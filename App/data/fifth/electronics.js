import {buildArray} from '../arrayBuilder';

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

const array = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this electronic device?',
    imgQtxtA: 'Which electronic device matches this picture?'
  },
  {
    correct: keyboard,
    option1: printer,
    option2: smart_board,
    option3: tablet
  },
  {
    correct: laptop,
    option1: smartwatch,
    option2: tablet,
    option3: speakers
  },
  {
    correct: mouse,
    option1: keyboard,
    option2: printer,
    option3: speakers
  },
  {
    correct: printer,
    option1: keyboard,
    option2: mouse,
    option3: speakers
  },
  {
    correct: sim_card,
    option1: mouse,
    option2: smartwatch,
    option3: tablet
  },
  {
    correct: smart_board,
    option1: laptop,
    option2: smartphone,
    option3: smartwatch
  },
  {
    correct: smartphone,
    option1: laptop,
    option2: sim_card,
    option3: smart_board
  },
  {
    correct: smartwatch,
    option1: mouse,
    option2: smart_board,
    option3: smartphone
  },
  {
    correct: speakers,
    option1: keyboard,
    option2: printer,
    option3: sim_card
  },
  {
    correct: tablet,
    option1: laptop,
    option2: sim_card,
    option3: smartphone
  }
];

electronics = buildArray(array);

export default electronics;
