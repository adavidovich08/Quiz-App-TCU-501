/**
 * correctImg: the image corresponding to the correst answer or question
 * correctShortType: usually what goes as txtOverlay of the image but could be the sole answer or question
 * correctLongType: the question or the correct answer
 * Naming conventions left ambiguous so they can be reused in other quizzes
 */
export const buildArray = (v) => {
  let returnArray = [];
  returnArray.push(v[0]);
  for (let i = 1; i < v.length; i++) {
    const question = {
      correctImg: v[i].correct.img,
      correctShortType: '',
      correctLongType: v[i].correct.long,
      answers: [
        {
          id: '1',
          img: v[i].correct.img,
          shortType: '',
          longType: v[i].correct.long,
          correct: true
        },
        {
          id: '2',
          img: v[i].option1.img,
          shortType: '',
          longType: v[i].option1.long
        },
        {
          id: '3',
          img: v[i].option2.img,
          shortType: '',
          longType: v[i].option2.long
        },
        {
          id: '4',
          img: v[i].option3.img,
          shortType: '',
          longType: v[i].option3.long
        }
      ]
    };
    returnArray.push(question);
  }
  return returnArray;
};
