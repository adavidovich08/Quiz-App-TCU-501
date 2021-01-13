import {buildArrayTxt} from '../arrayBuilderTxt';

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

const array = [
  {
    quizType: 'txtTxt',
    shrtQlngA: 'Which holiday is celebrated on this date?',
    lngQshrtA: 'On which date is this holiday celebrated?'
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

holidaysDates = buildArrayTxt(array);

export default holidaysDates;
