// Score quiz answers
export const scoreQuiz = (answers, correctAnswers) => {
  let score = 0;
  answers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) score++;
  });
  return (score / correctAnswers.length) * 100;
};