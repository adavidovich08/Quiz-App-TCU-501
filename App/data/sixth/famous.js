import {buildArrayTxt} from '../arrayBuilderTxt';

lincoln = {
  short: 'Abraham Lincoln',
  long:
    'He served as the 16th president of the United States from 1861 until his assassination in 1865. He succeeded in abolishing slavery.'
};

anne_frank = {
  short: 'Anne Frank',
  long:
    'She was a German-Dutch diarist of Jewish origin. One of the most discussed Jewish victims of the Holocaust.'
};

teresa = {
  short: 'Mother Teresa',
  long:
    'She is honoured in the Catholic Church as a Saint. She was an Albanian-Indian Roman Catholic nun and missionary.'
};

mandela = {
  short: 'Nelson Mandela',
  long:
    'He was a South African anti-apartheid revolutionary, political leader and philanthropist who served as President of South Africa.'
};

mlk = {
  short: 'Martin Luther King ',
  long:
    'He was an American Baptist minister and activist who became the most visible spokesperson and leader in the civil rights movement.'
};

gandhi = {
  short: 'Mahatma Gandhi',
  long:
    'He was an Indian lawyer and political ethicist, who employed nonviolent resistance to gain India’s independence from British rule.'
};

elvis = {
  short: 'Elvis Presley',
  long:
    'He was an American singer, musician and actor. He is often referred to as the "King of Rock and Roll".'
};

einstein = {
  short: 'Albert Einstein',
  long:
    'He was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics.'
};

pope = {
  short: 'Pope John Paul II',
  long:
    'He was the head of the Catholic Church and sovereign of the Vatican City State from 1978 until his death in 2005.'
};

van_gogh = {
  short: 'Vincent Van Gogh',
  long:
    'He was a Dutch post-impressionist painter who is among the most famous and influential figures in the history of Western art.'
};

dalai_lama = {
  short: 'Dalai Lama',
  long:
    'It is a title given by the Tibetan people to the foremost spiritual leader of the Gelug school of Tibetan Buddhism.'
};

obama = {
  short: 'Barack Obama',
  long:
    'He is an American politician and attorney who was the first African-American president of the United States.'
};

pele = {
  short: 'Pelé',
  long:
    'He is a Brazilian former professional footballer who played as a forward. He is regarded as one of the greatest players of all time.'
};

hitchcock = {
  short: 'Alfred Hitchcock',
  long:
    'He was an English film director, producer, and screenwriter. He is known as the "Master of Suspense".'
};

const array = [
  {
    quizType: 'txtTxt',
    shrtQlngA: 'Which description matches this famous person?',
    lngQshrtA: 'Which famous person matches this description?'
  },
  {
    correct: lincoln,
    option1: mandela,
    option2: einstein,
    option3: obama
  },
  {
    correct: anne_frank,
    option1: teresa,
    option2: dalai_lama,
    option3: pele
  },
  {
    correct: teresa,
    option1: anne_frank,
    option2: dalai_lama,
    option3: pope
  },
  {
    correct: mandela,
    option1: mlk,
    option2: gandhi,
    option3: hitchcock
  },
  {
    correct: mlk,
    option1: mandela,
    option2: obama,
    option3: elvis
  },
  {
    correct: gandhi,
    option1: teresa,
    option2: van_gogh,
    option3: mandela
  },
  {
    correct: elvis,
    option1: obama,
    option2: van_gogh,
    option3: einstein
  },
  {
    correct: einstein,
    option1: pope,
    option2: lincoln,
    option3: hitchcock
  },
  {
    correct: pope,
    option1: teresa,
    option2: mlk,
    option3: dalai_lama
  },
  {
    correct: van_gogh,
    option1: pele,
    option2: hitchcock,
    option3: anne_frank
  },
  {
    correct: dalai_lama,
    option1: gandhi,
    option2: pope,
    option3: pele
  },
  {
    correct: obama,
    option1: lincoln,
    option2: elvis,
    option3: mlk
  },
  {
    correct: pele,
    option1: anne_frank,
    option2: van_gogh,
    option3: gandhi
  },
  {
    correct: hitchcock,
    option1: anne_frank,
    option2: elvis,
    option3: einstein
  }
];

famous = buildArrayTxt(array);

export default famous;
