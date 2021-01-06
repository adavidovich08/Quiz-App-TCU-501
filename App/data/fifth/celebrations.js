/**
 * correctShortType: usually what goes as txtOverlay of the image but could be the sole answer or question
 * correctLongType: the question or the correct answer
 * Naming conventions left ambiguous so they can be reused in other quizzes
 */
valentines = {
  short: 'Valentine’s Day',
  long:
    'Celebration of romance and love in many regions of the world on February 14th'
};

saint_patricks = {
  short: 'Saint Patrick’s Day',
  long:
    'Cultural and religious commemoration of the arrival of Christianity in Ireland'
};

earth = {
  short: 'Earth Day',
  long:
    'Celebrated around the world to demonstrate support for environmental protection'
};

ramadan = {
  short: 'Ramadan',
  long:
    'Observed by Muslims as a month of fasting, prayer, reflection and community'
};

yom_kippur = {
  short: 'Yom Kippur',
  long: 'Observed by Jews with a day-long fast and intensive prayer'
};

halloween = {
  short: 'Halloween',
  long: 'Celebrated on October 31st to remember the dead'
};

dead = {
  short: 'Day of the Dead',
  long:
    'Mexican holiday celebrated to remember friends and family who have died'
};

thanks = {
  short: 'Thanksgiving',
  long:
    'It’s a harvest celebration. Families gather to feast and give thanks for the good in their lives.'
};

diwali = {
  short: 'Diwali',
  long:
    'Popular festivals of Hinduism that symbolize the spiritual victory of good over evil'
};

hannukkah = {
  short: 'Hanukkah',
  long:
    'Eight-day long Jewish holiday. It celebrates a long time ago when a lamp burned for eight days'
};

kwanzaa = {
  short: 'Kwanzaa',
  long:
    'It celebrates the traditions of Americans who have come from Africa long ago'
};

lent = {
  short: 'Lent',
  long:
    'It’s a 40-day period on the church calendar leading up to the celebration of Easter'
};

const celebrations = [
  {
    quizType: 'txtTxt',
    shrtQlngA: 'Which description matches this celebration?',
    lngQshrtA: 'Which celebration matches this description?'
  },
  {
    correctShortType: valentines.short,
    correctLongType: valentines.long,
    answers: [
      {
        id: '1',
        shortType: valentines.short,
        longType: valentines.long,
        correct: true
      },
      {
        id: '2',
        shortType: lent.short,
        longType: lent.long
      },
      {
        id: '3',
        shortType: thanks.short,
        longType: thanks.long
      },
      {
        id: '4',
        shortType: dead.short,
        longType: dead.long
      }
    ]
  },
  {
    correctShortType: saint_patricks.short,
    correctLongType: saint_patricks.long,
    answers: [
      {
        id: '1',
        shortType: saint_patricks.short,
        longType: saint_patricks.long,
        correct: true
      },
      {
        id: '2',
        shortType: earth.short,
        longType: earth.long
      },
      {
        id: '3',
        shortType: lent.short,
        longType: lent.long
      },
      {
        id: '4',
        shortType: halloween.short,
        longType: halloween.long
      }
    ]
  },
  {
    correctShortType: earth.short,
    correctLongType: earth.long,
    answers: [
      {
        id: '1',
        shortType: earth.short,
        longType: earth.long,
        correct: true
      },
      {
        id: '2',
        shortType: saint_patricks.short,
        longType: saint_patricks.long
      },
      {
        id: '3',
        shortType: lent.short,
        longType: lent.long
      },
      {
        id: '4',
        shortType: diwali.short,
        longType: diwali.long
      }
    ]
  },
  {
    correctShortType: ramadan.short,
    correctLongType: ramadan.long,
    answers: [
      {
        id: '1',
        shortType: ramadan.short,
        longType: ramadan.long,
        correct: true
      },
      {
        id: '2',
        shortType: yom_kippur.short,
        longType: yom_kippur.long
      },
      {
        id: '3',
        shortType: hannukkah.short,
        longType: hannukkah.long
      },
      {
        id: '4',
        shortType: thanks.short,
        longType: thanks.long
      }
    ]
  },
  {
    correctShortType: yom_kippur.short,
    correctLongType: yom_kippur.long,
    answers: [
      {
        id: '1',
        shortType: yom_kippur.short,
        longType: yom_kippur.long,
        correct: true
      },
      {
        id: '2',
        shortType: ramadan.short,
        longType: ramadan.long
      },
      {
        id: '3',
        shortType: hannukkah.short,
        longType: hannukkah.long
      },
      {
        id: '4',
        shortType: kwanzaa.short,
        longType: kwanzaa.long
      }
    ]
  },
  {
    correctShortType: halloween.short,
    correctLongType: halloween.long,
    answers: [
      {
        id: '1',
        shortType: halloween.short,
        longType: halloween.long,
        correct: true
      },
      {
        id: '2',
        shortType: dead.short,
        longType: dead.long
      },
      {
        id: '3',
        shortType: kwanzaa.short,
        longType: kwanzaa.long
      },
      {
        id: '4',
        shortType: valentines.short,
        longType: valentines.long
      }
    ]
  },
  {
    correctShortType: dead.short,
    correctLongType: dead.long,
    answers: [
      {
        id: '1',
        shortType: dead.short,
        longType: dead.long,
        correct: true
      },
      {
        id: '2',
        shortType: halloween.short,
        longType: halloween.long
      },
      {
        id: '3',
        shortType: diwali.short,
        longType: diwali.long
      },
      {
        id: '4',
        shortType: valentines.short,
        longType: valentines.long
      }
    ]
  },
  {
    correctShortType: thanks.short,
    correctLongType: thanks.long,
    answers: [
      {
        id: '1',
        shortType: thanks.short,
        longType: thanks.long,
        correct: true
      },
      {
        id: '2',
        shortType: earth.short,
        longType: earth.long
      },
      {
        id: '3',
        shortType: saint_patricks.short,
        longType: saint_patricks.long
      },
      {
        id: '4',
        shortType: ramadan.short,
        longType: ramadan.long
      }
    ]
  },
  {
    correctShortType: diwali.short,
    correctLongType: diwali.long,
    answers: [
      {
        id: '1',
        shortType: diwali.short,
        longType: diwali.long,
        correct: true
      },
      {
        id: '2',
        shortType: kwanzaa.short,
        longType: kwanzaa.long
      },
      {
        id: '3',
        shortType: yom_kippur.short,
        longType: yom_kippur.long
      },
      {
        id: '4',
        shortType: valentines.short,
        longType: valentines.long
      }
    ]
  },
  {
    correctShortType: hannukkah.short,
    correctLongType: hannukkah.long,
    answers: [
      {
        id: '1',
        shortType: hannukkah.short,
        longType: hannukkah.long,
        correct: true
      },
      {
        id: '2',
        shortType: ramadan.short,
        longType: ramadan.long
      },
      {
        id: '3',
        shortType: yom_kippur.short,
        longType: yom_kippur.long
      },
      {
        id: '4',
        shortType: halloween.short,
        longType: halloween.long
      }
    ]
  },
  {
    correctShortType: kwanzaa.short,
    correctLongType: kwanzaa.long,
    answers: [
      {
        id: '1',
        shortType: kwanzaa.short,
        longType: kwanzaa.long,
        correct: true
      },
      {
        id: '2',
        shortType: diwali.short,
        longType: diwali.long
      },
      {
        id: '3',
        shortType: hannukkah.short,
        longType: hannukkah.long
      },
      {
        id: '4',
        shortType: dead.short,
        longType: dead.long
      }
    ]
  },
  {
    correctShortType: lent.short,
    correctLongType: lent.long,
    answers: [
      {
        id: '1',
        shortType: lent.short,
        longType: lent.long,
        correct: true
      },
      {
        id: '2',
        shortType: saint_patricks.short,
        longType: saint_patricks.long
      },
      {
        id: '3',
        shortType: earth.short,
        longType: earth.long
      },
      {
        id: '4',
        shortType: thanks.short,
        longType: thanks.long
      }
    ]
  }
];

export default celebrations;
