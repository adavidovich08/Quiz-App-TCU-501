/**
 * correctImg: the image corresponding to the correst answer or question
 * correctShortType: usually what goes as txtOverlay of the image but could be the sole answer or question
 * correctLongType: the question or the correct answer
 * Naming conventions left ambiguous so they can be reused in other quizzes
 */
boots = {
  img: require('../assets/whatToWear/boots.jpg'),
  long: 'Boots'
};

gloves = {
  img: require('../assets/whatToWear/gloves.jpg'),
  long: 'Gloves'
};

hat = {
  img: require('../assets/whatToWear/hat.jpg'),
  long: 'Hat'
};

pants = {
  img: require('../assets/whatToWear/pants.jpg'),
  long: 'Pants'
};

raincoat = {
  img: require('../assets/whatToWear/raincoat.jpg'),
  long: 'Raincoat'
};

sandals = {
  img: require('../assets/whatToWear/sandals.jpg'),
  long: 'Sandals'
};

scarf = {
  img: require('../assets/whatToWear/scarf.jpg'),
  long: 'Scarf'
};

socks = {
  img: require('../assets/whatToWear/socks.jpg'),
  long: 'Socks'
};

sunglasses = {
  img: require('../assets/whatToWear/sunglasses.jpg'),
  long: 'Sunglasses'
};

sweater = {
  img: require('../assets/whatToWear/sweater.jpg'),
  long: 'Sweater'
};

t_shirt = {
  img: require('../assets/whatToWear/t-shirt.jpg'),
  long: 'T-shirt'
};

umbrella = {
  img: require('../assets/whatToWear/umbrella.jpg'),
  long: 'Umbrella'
};

const whatToWear = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this piece of clothing or accessory?',
    imgQtxtA: 'Which piece of clothing or accessory matches this picture?'
  },
  {
    correctImg: boots.img,
    correctShortType: '',
    correctLongType: boots.long,
    answers: [
      {
        id: '1',
        img: boots.img,
        shortType: '',
        longType: boots.long,
        correct: true
      },
      {
        id: '2',
        img: sandals.img,
        shortType: '',
        longType: sandals.long
      },
      {
        id: '3',
        img: umbrella.img,
        shortType: '',
        longType: umbrella.long
      },
      {
        id: '4',
        img: raincoat.img,
        shortType: '',
        longType: raincoat.long
      }
    ]
  },
  {
    correctImg: gloves.img,
    correctShortType: '',
    correctLongType: gloves.long,
    answers: [
      {
        id: '1',
        img: gloves.img,
        shortType: '',
        longType: gloves.long,
        correct: true
      },
      {
        id: '2',
        img: socks.img,
        shortType: '',
        longType: socks.long
      },
      {
        id: '3',
        img: scarf.img,
        shortType: '',
        longType: scarf.long
      },
      {
        id: '4',
        img: sweater.img,
        shortType: '',
        longType: sweater.long
      }
    ]
  },
  {
    correctImg: hat.img,
    correctShortType: '',
    correctLongType: hat.long,
    answers: [
      {
        id: '1',
        img: hat.img,
        shortType: '',
        longType: hat.long,
        correct: true
      },
      {
        id: '2',
        img: sunglasses.img,
        shortType: '',
        longType: sunglasses.long
      },
      {
        id: '3',
        img: scarf.img,
        shortType: '',
        longType: scarf.long
      },
      {
        id: '4',
        img: t_shirt.img,
        shortType: '',
        longType: t_shirt.long
      }
    ]
  },
  {
    correctImg: pants.img,
    correctShortType: '',
    correctLongType: pants.long,
    answers: [
      {
        id: '1',
        img: pants.img,
        shortType: '',
        longType: pants.long,
        correct: true
      },
      {
        id: '2',
        img: socks.img,
        shortType: '',
        longType: socks.long
      },
      {
        id: '3',
        img: hat.img,
        shortType: '',
        longType: hat.long
      },
      {
        id: '4',
        img: boots.img,
        shortType: '',
        longType: boots.long
      }
    ]
  },
  {
    correctImg: raincoat.img,
    correctShortType: '',
    correctLongType: raincoat.long,
    answers: [
      {
        id: '1',
        img: raincoat.img,
        shortType: '',
        longType: raincoat.long,
        correct: true
      },
      {
        id: '2',
        img: t_shirt.img,
        shortType: '',
        longType: t_shirt.long
      },
      {
        id: '3',
        img: sandals.img,
        shortType: '',
        longType: sandals.long
      },
      {
        id: '4',
        img: gloves.img,
        shortType: '',
        longType: gloves.long
      }
    ]
  },
  {
    correctImg: sandals.img,
    correctShortType: '',
    correctLongType: sandals.long,
    answers: [
      {
        id: '1',
        img: sandals.img,
        shortType: '',
        longType: sandals.long,
        correct: true
      },
      {
        id: '2',
        img: pants.img,
        shortType: '',
        longType: pants.long
      },
      {
        id: '3',
        img: umbrella.img,
        shortType: '',
        longType: umbrella.long
      },
      {
        id: '4',
        img: boots.img,
        shortType: '',
        longType: boots.long
      }
    ]
  },
  {
    correctImg: scarf.img,
    correctShortType: '',
    correctLongType: scarf.long,
    answers: [
      {
        id: '1',
        img: scarf.img,
        shortType: '',
        longType: scarf.long,
        correct: true
      },
      {
        id: '2',
        img: sunglasses.img,
        shortType: '',
        longType: sunglasses.long
      },
      {
        id: '3',
        img: gloves.img,
        shortType: '',
        longType: gloves.long
      },
      {
        id: '4',
        img: sweater.img,
        shortType: '',
        longType: sweater.long
      }
    ]
  },
  {
    correctImg: socks.img,
    correctShortType: '',
    correctLongType: socks.long,
    answers: [
      {
        id: '1',
        img: socks.img,
        shortType: '',
        longType: socks.long,
        correct: true
      },
      {
        id: '2',
        img: gloves.img,
        shortType: '',
        longType: gloves.long
      },
      {
        id: '3',
        img: hat.img,
        shortType: '',
        longType: hat.long
      },
      {
        id: '4',
        img: sweater.img,
        shortType: '',
        longType: sweater.long
      }
    ]
  },
  {
    correctImg: sunglasses.img,
    correctShortType: '',
    correctLongType: sunglasses.long,
    answers: [
      {
        id: '1',
        img: sunglasses.img,
        shortType: '',
        longType: sunglasses.long,
        correct: true
      },
      {
        id: '2',
        img: pants.img,
        shortType: '',
        longType: pants.long
      },
      {
        id: '3',
        img: raincoat.img,
        shortType: '',
        longType: raincoat.long
      },
      {
        id: '4',
        img: umbrella.img,
        shortType: '',
        longType: umbrella.long
      }
    ]
  },
  {
    correctImg: sweater.img,
    correctShortType: '',
    correctLongType: sweater.long,
    answers: [
      {
        id: '1',
        img: sweater.img,
        shortType: '',
        longType: sweater.long,
        correct: true
      },
      {
        id: '2',
        img: raincoat.img,
        shortType: '',
        longType: raincoat.long
      },
      {
        id: '3',
        img: scarf.img,
        shortType: '',
        longType: scarf.long
      },
      {
        id: '4',
        img: t_shirt.img,
        shortType: '',
        longType: t_shirt.long
      }
    ]
  },
  {
    correctImg: t_shirt.img,
    correctShortType: '',
    correctLongType: t_shirt.long,
    answers: [
      {
        id: '1',
        img: t_shirt.img,
        shortType: '',
        longType: t_shirt.long,
        correct: true
      },
      {
        id: '2',
        img: socks.img,
        shortType: '',
        longType: socks.long
      },
      {
        id: '3',
        img: hat.img,
        shortType: '',
        longType: hat.long
      },
      {
        id: '4',
        img: pants.img,
        shortType: '',
        longType: pants.long
      }
    ]
  },
  {
    correctImg: umbrella.img,
    correctShortType: '',
    correctLongType: umbrella.long,
    answers: [
      {
        id: '1',
        img: umbrella.img,
        shortType: '',
        longType: umbrella.long,
        correct: true
      },
      {
        id: '2',
        img: boots.img,
        shortType: '',
        longType: boots.long
      },
      {
        id: '3',
        img: sunglasses.img,
        shortType: '',
        longType: sunglasses.long
      },
      {
        id: '4',
        img: sandals.img,
        shortType: '',
        longType: sandals.long
      }
    ]
  }
];

export default whatToWear;
