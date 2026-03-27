import React, { useState } from 'react';

const QuizEngine = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="quiz-engine">
      <h3>Question {currentQuestion + 1}</h3>
      <p>{questions[currentQuestion].text}</p>
      {questions[currentQuestion].options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuizEngine;