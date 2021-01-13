import {buildArrayTxt} from '../arrayBuilderTxt';

wonder_woman = {
  short: 'Wonder Woman',
  long:
    'She is an Amazon warrior princess and one of the world’s first superheroes. Her name is Princess Diana of Themyscira.'
};

batman = {
  short: 'Batman',
  long:
    'He is a wealthy American playboy, philanthropist, and owner of Wayne Enterprises based in Gotham City. His name is Bruce Wayne.'
};

aquaman = {
  short: 'Aquaman',
  long:
    'He is an adventurer who is half-human and half-Atlantean. He belongs to the royal family of Atlantis. His name is Arthur Curry.'
};

black_panther = {
  short: 'Black Panther',
  long:
    'This title is a generations-old mantle carried by the ruler of Wakanda. Said title is currently held by T’Challa.'
};

cap_america = {
  short: 'Captain America',
  long:
    'A covert U.S. Military experiment turned him into America’s first Super-Soldier. His name is Steve Rogers.'
};

hulk = {
  short: 'Incredible Hulk',
  long:
    'He was exposed to gamma radiation that altered his DNA and caused him to become a giant green monster. His name is Bruce Banner.'
};

iron_man = {
  short: 'Iron Man',
  long:
    'He is a genius billionaire inventor, industrialist and CEO of Stark Industries. His name is Tony Stark.'
};

robin = {
  short: 'Robin',
  long:
    'He is Batman’s sidekick and crime-fighting partner. He is a teenage vigilante who patrols Gotham City.'
};

spider_man = {
  short: 'Spider-Man',
  long:
    'As a result of a radioactive spider bite, high schooler Peter Parker developed powers and abilities similar to that of a spider.'
};

superman = {
  short: 'Superman',
  long:
    'He was born on Krypton and is one of the most powerful superheroes. Also known as the Man of Steel, Kal-El or Clark Kent.'
};

thor = {
  short: 'Thor',
  long:
    'Leaping from the legends of Norse mythology, he is the Asgardian God of Thunder. He is the son of Odin and brother of Loki.'
};

wolverine = {
  short: 'Wolverine',
  long:
    'He is a member of the X-Men, has mutant powers and Adamantium claws. His name is James "Logan" Howlett.'
};

flash = {
  short: 'Flash',
  long:
    'He is the fastest man alive. He is the protector of Central City, fighting against evil using his super-speed. His name is Barry Allen.'
};

const array = [
  {
    quizType: 'txtTxt',
    shrtQlngA: 'Which description matches this superhero?',
    lngQshrtA: 'Which superhero matches this description?'
  },
  {
    correct: wonder_woman,
    option1: aquaman,
    option2: hulk,
    option3: superman
  },
  {
    correct: batman,
    option1: black_panther,
    option2: iron_man,
    option3: wolverine
  },
  {
    correct: aquaman,
    option1: wonder_woman,
    option2: iron_man,
    option3: superman
  },
  {
    correct: black_panther,
    option1: aquaman,
    option2: cap_america,
    option3: thor
  },
  {
    correct: cap_america,
    option1: black_panther,
    option2: spider_man,
    option3: superman
  },
  {
    correct: hulk,
    option1: iron_man,
    option2: robin,
    option3: thor
  },
  {
    correct: iron_man,
    option1: batman,
    option2: spider_man,
    option3: flash
  },
  {
    correct: robin,
    option1: aquaman,
    option2: hulk,
    option3: thor
  },
  {
    correct: spider_man,
    option1: cap_america,
    option2: robin,
    option3: flash
  },
  {
    correct: superman,
    option1: wonder_woman,
    option2: batman,
    option3: wolverine
  },
  {
    correct: thor,
    option1: black_panther,
    option2: hulk,
    option3: wolverine
  },
  {
    correct: wolverine,
    option1: batman,
    option2: robin,
    option3: flash
  },
  {
    correct: flash,
    option1: wonder_woman,
    option2: cap_america,
    option3: spider_man
  }
];

superheroes = buildArrayTxt(array);

export default superheroes;
