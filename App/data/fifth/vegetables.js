/**
 * correctImg: the image corresponding to the correst answer or question
 * correctShortType: usually what goes as txtOverlay of the image but could be the sole answer or question
 * correctLongType: the question or the correct answer
 * Naming conventions left ambiguous so they can be reused in other quizzes
 */
broccoli = {
  img: require('../../assets/vegetables/broccoli.jpg'),
  long: 'Broccoli'
};

cabbage = {
  img: require('../../assets/vegetables/cabbage.jpg'),
  long: 'Cabbage'
};

carrot = {
  img: require('../../assets/vegetables/carrot.jpg'),
  long: 'Carrot'
};

cauliflower = {
  img: require('../../assets/vegetables/cauliflower.jpg'),
  long: 'Cauliflower'
};

celery = {
  img: require('../../assets/vegetables/celery.jpg'),
  long: 'Celery'
};

garlic = {
  img: require('../../assets/vegetables/garlic.jpg'),
  long: 'Garlic'
};

ginger = {
  img: require('../../assets/vegetables/ginger.jpg'),
  long: 'Ginger'
};

lettuce = {
  img: require('../../assets/vegetables/lettuce.jpg'),
  long: 'Lettuce'
};

onion = {
  img: require('../../assets/vegetables/onion.jpg'),
  long: 'Onion'
};

potato = {
  img: require('../../assets/vegetables/potato.jpg'),
  long: 'Potato'
};

spinach = {
  img: require('../../assets/vegetables/spinach.jpg'),
  long: 'Spinach'
};

const vegetables = [
  {
    quizType: 'txtImg',
    txtQimgA: 'Which picture matches this vegetable?',
    imgQtxtA: 'Which vegetable matches this picture?'
  },
  {
    correctImg: broccoli.img,
    correctShortType: '',
    correctLongType: broccoli.long,
    answers: [
      {
        id: '1',
        img: broccoli.img,
        shortType: '',
        longType: broccoli.long,
        correct: true
      },
      {
        id: '2',
        img: cauliflower.img,
        shortType: '',
        longType: cauliflower.long
      },
      {
        id: '3',
        img: lettuce.img,
        shortType: '',
        longType: lettuce.long
      },
      {
        id: '4',
        img: spinach.img,
        shortType: '',
        longType: spinach.long
      }
    ]
  },
  {
    correctImg: cabbage.img,
    correctShortType: '',
    correctLongType: cabbage.long,
    answers: [
      {
        id: '1',
        img: cabbage.img,
        shortType: '',
        longType: cabbage.long,
        correct: true
      },
      {
        id: '2',
        img: lettuce.img,
        shortType: '',
        longType: lettuce.long
      },
      {
        id: '3',
        img: potato.img,
        shortType: '',
        longType: potato.long
      },
      {
        id: '4',
        img: celery.img,
        shortType: '',
        longType: celery.long
      }
    ]
  },
  {
    correctImg: carrot.img,
    correctShortType: '',
    correctLongType: carrot.long,
    answers: [
      {
        id: '1',
        img: carrot.img,
        shortType: '',
        longType: carrot.long,
        correct: true
      },
      {
        id: '2',
        img: cabbage.img,
        shortType: '',
        longType: cabbage.long
      },
      {
        id: '3',
        img: garlic.img,
        shortType: '',
        longType: garlic.long
      },
      {
        id: '4',
        img: ginger.img,
        shortType: '',
        longType: ginger.long
      }
    ]
  },
  {
    correctImg: cauliflower.img,
    correctShortType: '',
    correctLongType: cauliflower.long,
    answers: [
      {
        id: '1',
        img: cauliflower.img,
        shortType: '',
        longType: cauliflower.long,
        correct: true
      },
      {
        id: '2',
        img: broccoli.img,
        shortType: '',
        longType: broccoli.long
      },
      {
        id: '3',
        img: onion.img,
        shortType: '',
        longType: onion.long
      },
      {
        id: '4',
        img: cabbage.img,
        shortType: '',
        longType: cabbage.long
      }
    ]
  },
  {
    correctImg: celery.img,
    correctShortType: '',
    correctLongType: celery.long,
    answers: [
      {
        id: '1',
        img: celery.img,
        shortType: '',
        longType: celery.long,
        correct: true
      },
      {
        id: '2',
        img: spinach.img,
        shortType: '',
        longType: spinach.long
      },
      {
        id: '3',
        img: ginger.img,
        shortType: '',
        longType: ginger.long
      },
      {
        id: '4',
        img: carrot.img,
        shortType: '',
        longType: carrot.long
      }
    ]
  },
  {
    correctImg: garlic.img,
    correctShortType: '',
    correctLongType: garlic.long,
    answers: [
      {
        id: '1',
        img: garlic.img,
        shortType: '',
        longType: garlic.long,
        correct: true
      },
      {
        id: '2',
        img: ginger.img,
        shortType: '',
        longType: ginger.long
      },
      {
        id: '3',
        img: onion.img,
        shortType: '',
        longType: onion.long
      },
      {
        id: '4',
        img: broccoli.img,
        shortType: '',
        longType: broccoli.long
      }
    ]
  },
  {
    correctImg: ginger.img,
    correctShortType: '',
    correctLongType: ginger.long,
    answers: [
      {
        id: '1',
        img: ginger.img,
        shortType: '',
        longType: ginger.long,
        correct: true
      },
      {
        id: '2',
        img: garlic.img,
        shortType: '',
        longType: garlic.long
      },
      {
        id: '3',
        img: potato.img,
        shortType: '',
        longType: potato.long
      },
      {
        id: '4',
        img: carrot.img,
        shortType: '',
        longType: carrot.long
      }
    ]
  },
  {
    correctImg: lettuce.img,
    correctShortType: '',
    correctLongType: lettuce.long,
    answers: [
      {
        id: '1',
        img: lettuce.img,
        shortType: '',
        longType: lettuce.long,
        correct: true
      },
      {
        id: '2',
        img: cabbage.img,
        shortType: '',
        longType: cabbage.long
      },
      {
        id: '3',
        img: celery.img,
        shortType: '',
        longType: celery.long
      },
      {
        id: '4',
        img: spinach.img,
        shortType: '',
        longType: spinach.long
      }
    ]
  },
  {
    correctImg: onion.img,
    correctShortType: '',
    correctLongType: onion.long,
    answers: [
      {
        id: '1',
        img: onion.img,
        shortType: '',
        longType: onion.long,
        correct: true
      },
      {
        id: '2',
        img: cauliflower.img,
        shortType: '',
        longType: cauliflower.long
      },
      {
        id: '3',
        img: potato.img,
        shortType: '',
        longType: potato.long
      },
      {
        id: '4',
        img: garlic.img,
        shortType: '',
        longType: garlic.long
      }
    ]
  },
  {
    correctImg: potato.img,
    correctShortType: '',
    correctLongType: potato.long,
    answers: [
      {
        id: '1',
        img: potato.img,
        shortType: '',
        longType: potato.long,
        correct: true
      },
      {
        id: '2',
        img: onion.img,
        shortType: '',
        longType: onion.long
      },
      {
        id: '3',
        img: cauliflower.img,
        shortType: '',
        longType: cauliflower.long
      },
      {
        id: '4',
        img: carrot.img,
        shortType: '',
        longType: carrot.long
      }
    ]
  },
  {
    correctImg: spinach.img,
    correctShortType: '',
    correctLongType: spinach.long,
    answers: [
      {
        id: '1',
        img: spinach.img,
        shortType: '',
        longType: spinach.long,
        correct: true
      },
      {
        id: '2',
        img: broccoli.img,
        shortType: '',
        longType: broccoli.long
      },
      {
        id: '3',
        img: celery.img,
        shortType: '',
        longType: celery.long
      },
      {
        id: '4',
        img: lettuce.img,
        shortType: '',
        longType: lettuce.long
      }
    ]
  }
];

export default vegetables;
