import {buildArrayTxt} from '../arrayBuilderTxt';

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

const array = [
  {
    quizType: 'txtTxt',
    shrtQlngA: 'Which description matches this holiday?',
    lngQshrtA: 'Which holiday matches this description?'
  },
  {
    correct: virgin,
    option1: mothers,
    option2: independence,
    option3: christmas
  },
  {
    correct: new_years,
    option1: christmas,
    option2: labor,
    option3: army
  },
  {
    correct: juan,
    option1: labor,
    option2: fathers,
    option3: annex
  },
  {
    correct: labor,
    option1: juan,
    option2: new_years,
    option3: virgin
  },
  {
    correct: annex,
    option1: fathers,
    option2: mothers,
    option3: army
  },
  {
    correct: mothers,
    option1: fathers,
    option2: virgin,
    option3: independence
  },
  {
    correct: fathers,
    option1: mothers,
    option2: annex,
    option3: independence
  },
  {
    correct: independence,
    option1: virgin,
    option2: new_years,
    option3: juan
  },
  {
    correct: army,
    option1: christmas,
    option2: new_years,
    option3: annex
  },
  {
    correct: christmas,
    option1: army,
    option2: labor,
    option3: juan
  }
];

holidaysDesc = buildArrayTxt(array);

export default holidaysDesc;
