/**
 * correctShortType: usually what goes as txtOverlay of the image but could be the sole answer or question
 * correctLongType: the question or the correct answer
 * Naming conventions left ambiguous so they can be reused in other quizzes
 */
virgin = {
  short: 'August 2',
  long: 'Virgin of Los Angeles Day'
};

new_years = {
  short: 'January 1',
  long: 'New Year’s Day'
};

juan = {
  short: 'April 11',
  long: 'Juan Santamaria Day'
};

labor = {
  short: 'May 1',
  long: 'Labor Day'
};

annex = {
  short: 'July 25',
  long: 'Annexation of Nicoya Day'
};

mothers = {
  short: 'August 15',
  long: 'Mother’s Day'
};

fathers = {
  short: '3rd Sunday of June',
  long: 'Father’s Day'
};

independence = {
  short: 'September 15',
  long: 'Independence Day'
};

army = {
  short: 'December 1',
  long: 'Army Abolition Day'
};

christmas = {
  short: 'December 25',
  long: 'Christmas Day'
};

const holidaysDates = [
  {
    quizType: 'txtTxt',
    shrtQlngA: 'Which holiday is celebrated on this date?',
    lngQshrtA: 'On which date is this holiday celebrated?'
  },
  {
    correctShortType: virgin.short,
    correctLongType: virgin.long,
    answers: [
      {
        id: '1',
        shortType: virgin.short,
        longType: virgin.long,
        correct: true
      },
      {
        id: '2',
        shortType: mothers.short,
        longType: mothers.long
      },
      {
        id: '3',
        shortType: independence.short,
        longType: independence.long
      },
      {
        id: '4',
        shortType: christmas.short,
        longType: christmas.long
      }
    ]
  },
  {
    correctShortType: new_years.short,
    correctLongType: new_years.long,
    answers: [
      {
        id: '1',
        shortType: new_years.short,
        longType: new_years.long,
        correct: true
      },
      {
        id: '2',
        shortType: christmas.short,
        longType: christmas.long
      },
      {
        id: '3',
        shortType: labor.short,
        longType: labor.long
      },
      {
        id: '4',
        shortType: army.short,
        longType: army.long
      }
    ]
  },
  {
    correctShortType: juan.short,
    correctLongType: juan.long,
    answers: [
      {
        id: '1',
        shortType: juan.short,
        longType: juan.long,
        correct: true
      },
      {
        id: '2',
        shortType: labor.short,
        longType: labor.long
      },
      {
        id: '3',
        shortType: fathers.short,
        longType: fathers.long
      },
      {
        id: '4',
        shortType: annex.short,
        longType: annex.long
      }
    ]
  },
  {
    correctShortType: labor.short,
    correctLongType: labor.long,
    answers: [
      {
        id: '1',
        shortType: labor.short,
        longType: labor.long,
        correct: true
      },
      {
        id: '2',
        shortType: juan.short,
        longType: juan.long
      },
      {
        id: '3',
        shortType: new_years.short,
        longType: new_years.long
      },
      {
        id: '4',
        shortType: virgin.short,
        longType: virgin.long
      }
    ]
  },
  {
    correctShortType: annex.short,
    correctLongType: annex.long,
    answers: [
      {
        id: '1',
        shortType: annex.short,
        longType: annex.long,
        correct: true
      },
      {
        id: '2',
        shortType: fathers.short,
        longType: fathers.long
      },
      {
        id: '3',
        shortType: mothers.short,
        longType: mothers.long
      },
      {
        id: '4',
        shortType: army.short,
        longType: army.long
      }
    ]
  },
  {
    correctShortType: mothers.short,
    correctLongType: mothers.long,
    answers: [
      {
        id: '1',
        shortType: mothers.short,
        longType: mothers.long,
        correct: true
      },
      {
        id: '2',
        shortType: fathers.short,
        longType: fathers.long
      },
      {
        id: '3',
        shortType: virgin.short,
        longType: virgin.long
      },
      {
        id: '4',
        shortType: independence.short,
        longType: independence.long
      }
    ]
  },
  {
    correctShortType: fathers.short,
    correctLongType: fathers.long,
    answers: [
      {
        id: '1',
        shortType: fathers.short,
        longType: fathers.long,
        correct: true
      },
      {
        id: '2',
        shortType: mothers.short,
        longType: mothers.long
      },
      {
        id: '3',
        shortType: annex.short,
        longType: annex.long
      },
      {
        id: '4',
        shortType: independence.short,
        longType: independence.long
      }
    ]
  },
  {
    correctShortType: independence.short,
    correctLongType: independence.long,
    answers: [
      {
        id: '1',
        shortType: independence.short,
        longType: independence.long,
        correct: true
      },
      {
        id: '2',
        shortType: virgin.short,
        longType: virgin.long
      },
      {
        id: '3',
        shortType: new_years.short,
        longType: new_years.long
      },
      {
        id: '4',
        shortType: juan.short,
        longType: juan.long
      }
    ]
  },
  {
    correctShortType: army.short,
    correctLongType: army.long,
    answers: [
      {
        id: '1',
        shortType: army.short,
        longType: army.long,
        correct: true
      },
      {
        id: '2',
        shortType: christmas.short,
        longType: christmas.long
      },
      {
        id: '3',
        shortType: new_years.short,
        longType: new_years.long
      },
      {
        id: '4',
        shortType: annex.short,
        longType: annex.long
      }
    ]
  },
  {
    correctShortType: christmas.short,
    correctLongType: christmas.long,
    answers: [
      {
        id: '1',
        shortType: christmas.short,
        longType: christmas.long,
        correct: true
      },
      {
        id: '2',
        shortType: army.short,
        longType: army.long
      },
      {
        id: '3',
        shortType: labor.short,
        longType: labor.long
      },
      {
        id: '4',
        shortType: juan.short,
        longType: juan.long
      }
    ]
  }
];

export default holidaysDates;
