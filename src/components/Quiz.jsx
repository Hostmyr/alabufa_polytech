import React, { useState } from 'react';
import { questions } from '../data/specialties';
import { Psychology, ArrowForward } from '@mui/icons-material';

const Quiz = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (specialties) => {
    const newAnswers = { ...answers, [currentQuestion]: specialties };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <Psychology sx={{ fontSize: 48, color: '#0066cc', marginBottom: 2 }} />
        <h2>Пройди тест и узнай свою идеальную специальность</h2>
        <p>Вопрос {currentQuestion + 1} из {questions.length}</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="question-card">
        <h3 className="question-text">{questions[currentQuestion].question}</h3>
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className="option-btn"
              onClick={() => handleAnswer(option.specialties)}
            >
              <span className="option-text">{option.text}</span>
              <ArrowForward sx={{ fontSize: 20, marginLeft: 'auto' }} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;