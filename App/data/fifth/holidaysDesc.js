/**
 * correctShortType: usually what goes as txtOverlay of the image but could be the sole answer or question
 * correctLongType: the question or the correct answer
 * Naming conventions left ambiguous so they can be reused in other quizzes
 */
virgin = {
  short: 'Virgin of Los Angeles Day',
  long: 'Celebration of the patron saint of Costa Rica'
};

new_years = {
  short: 'New Year’s Day',
  long: 'Celebration of the first day of the Gregorian calendar'
};

juan = {
  short: 'Juan Santamaria Day',
  long:
    'Commemoration of the death of a national hero for his actions in the Second Battle of Rivas'
};

labor = {
  short: 'Labor Day',
  long: 'Celebration of the working classes'
};

annex = {
  short: 'Annexation of Nicoya Day',
  long: 'Celebrates the incorporation of most of Guanacaste to Costa Rica'
};

mothers = {
  short: 'Mother’s Day',
  long: 'Celebration honoring the influence of mothers in society'
};

fathers = {
  short: 'Father’s Day',
  long: 'Celebration honoring the influence of fathers in society'
};

independence = {
  short: 'Independence Day',
  long: 'Celebrates when Costa Rica was granted independence from Spain'
};

army = {
  short: 'Army Abolition Day',
  long: 'Celebrates the abolition of the army by Jose Figueres Ferrer'
};

christmas = {
  short: 'Christmas Day',
  long: 'Commemoration of the birth of Jesus Christ'
};

const holidaysDesc = [
  {
    quizType: 'txtTxt',
    shrtQlngA: 'Which description matches this holiday?',
    lngQshrtA: 'Which holiday matches this description?'
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

export default holidaysDesc;
