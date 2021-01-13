/**
 * correctShortType: usually what goes as txtOverlay of the image but could be the sole answer or question
 * correctLongType: the question or the correct answer
 * Naming conventions left ambiguous so they can be reused in other quizzes
 */
export const buildArrayTxt = (v) => {
  let returnArray = [];
  returnArray.push(v[0]);
  for (let i = 1; i < v.length; i++) {
    const question = {
      correctShortType: v[i].correct.short,
      correctLongType: v[i].correct.long,
      answers: [
        {
          id: '1',
          shortType: v[i].correct.short,
          longType: v[i].correct.long,
          correct: true
        },
        {
          id: '2',
          shortType: v[i].option1.short,
          longType: v[i].option1.long
        },
        {
          id: '3',
          shortType: v[i].option2.short,
          longType: v[i].option2.long
        },
        {
          id: '4',
          shortType: v[i].option3.short,
          longType: v[i].option3.long
        }
      ]
    };
    returnArray.push(question);
  }
  return returnArray;
};
