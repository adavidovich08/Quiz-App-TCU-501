import {buildArrayTxt} from '../arrayBuilderTxt';

valentines = {
  short: 'Valentine’s Day',
  long:
    'Celebration of romance and love in many regions of the world on February 14th.'
};

saint_patricks = {
  short: 'Saint Patrick’s Day',
  long:
    'Cultural and religious commemoration of the arrival of Christianity in Ireland.'
};

earth = {
  short: 'Earth Day',
  long:
    'Celebrated around the world to demonstrate support for environmental protection.'
};

ramadan = {
  short: 'Ramadan',
  long:
    'Observed by Muslims as a month of fasting, prayer, reflection and community.'
};

yom_kippur = {
  short: 'Yom Kippur',
  long: 'Observed by Jews with a day-long fast and intensive prayer.'
};

halloween = {
  short: 'Halloween',
  long: 'Celebrated on October 31st to remember the dead.'
};

dead = {
  short: 'Day of the Dead',
  long:
    'Mexican holiday celebrated to remember friends and family who have died.'
};

thanks = {
  short: 'Thanksgiving',
  long:
    'It’s a harvest celebration. Families gather to feast and give thanks for the good in their lives.'
};

diwali = {
  short: 'Diwali',
  long:
    'Popular festivals of Hinduism that symbolize the spiritual victory of good over evil.'
};

hannukkah = {
  short: 'Hanukkah',
  long:
    'Eight-day long Jewish holiday. It celebrates a long time ago when a lamp burned for eight days.'
};

kwanzaa = {
  short: 'Kwanzaa',
  long:
    'It celebrates the traditions of Americans who have come from Africa long ago.'
};

lent = {
  short: 'Lent',
  long:
    'It’s a 40-day period on the church calendar leading up to the celebration of Easter.'
};

const array = [
  {
    quizType: 'txtTxt',
    shrtQlngA: 'Which description matches this celebration?',
    lngQshrtA: 'Which celebration matches this description?'
  },
  {
    correct: valentines,
    option1: lent,
    option2: thanks,
    option3: dead
  },
  {
    correct: saint_patricks,
    option1: earth,
    option2: lent,
    option3: halloween
  },
  {
    correct: earth,
    option1: saint_patricks,
    option2: lent,
    option3: diwali
  },
  {
    correct: ramadan,
    option1: yom_kippur,
    option2: hannukkah,
    option3: thanks
  },
  {
    correct: yom_kippur,
    option1: ramadan,
    option2: hannukkah,
    option3: kwanzaa
  },
  {
    correct: halloween,
    option1: dead,
    option2: kwanzaa,
    option3: valentines
  },
  {
    correct: dead,
    option1: halloween,
    option2: diwali,
    option3: valentines
  },
  {
    correct: thanks,
    option1: earth,
    option2: saint_patricks,
    option3: ramadan
  },
  {
    correct: diwali,
    option1: kwanzaa,
    option2: yom_kippur,
    option3: valentines
  },
  {
    correct: hannukkah,
    option1: ramadan,
    option2: yom_kippur,
    option3: halloween
  },
  {
    correct: kwanzaa,
    option1: diwali,
    option2: hannukkah,
    option3: dead
  },
  {
    correct: lent,
    option1: saint_patricks,
    option2: earth,
    option3: thanks
  }
];

celebrations = buildArrayTxt(array);

export default celebrations;
