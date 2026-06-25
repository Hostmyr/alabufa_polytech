import React from 'react';
import { specialties, specialtyIcons, questions } from '../data/specialties';
import { EmojiEvents, RestartAlt, Star } from '@mui/icons-material';
import * as Icons from '@mui/icons-material';

const Results = ({ answers, onRestart }) => {
  console.log('Results component received answers:', answers);
  
  // Подсчет результатов по специальностям
  const specialtyScores = {};
  
  // answers - это объект где ключи - номера вопросов, значения - массивы специальностей
  Object.values(answers).forEach(specialtyList => {
    if (Array.isArray(specialtyList)) {
      specialtyList.forEach(specialtyId => {
        specialtyScores[specialtyId] = (specialtyScores[specialtyId] || 0) + 1;
      });
    }
  });

  console.log('Specialty scores:', specialtyScores);

  // Сортируем специальности по количеству голосов
  const sortedSpecialties = Object.entries(specialtyScores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  console.log('Top specialties:', sortedSpecialties);

  // Получаем топ-3 специальности с полной информацией
  const topSpecialties = sortedSpecialties.map(([id, score]) => {
    const specialty = specialties.find(s => s.id === id);
    return specialty ? { ...specialty, score } : null;
  }).filter(s => s !== null);

  console.log('Final top specialties:', topSpecialties);

  const getIconComponent = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent sx={{ fontSize: 32 }} /> : <Star />;
  };

  if (topSpecialties.length === 0) {
    return (
      <div className="results-container">
        <div className="result-card">
          <EmojiEvents sx={{ fontSize: 80, color: '#FFD700', marginBottom: 2 }} />
          <h2>Результаты теста</h2>
          <p>Не удалось определить специальности. Попробуйте пройти тест заново.</p>
          <button className="restart-btn" onClick={onRestart}>
            <RestartAlt sx={{ marginRight: 1 }} />
            Пройти тест заново
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="results-container">
      <div className="result-card">
        <EmojiEvents sx={{ fontSize: 80, color: '#FFD700', marginBottom: 2 }} />
        <h2>Тестовые результаты</h2>
        <p className="result-description">
          Именно такие результаты получит пользователь 
        </p>
        
        <div className="top-specialties">
          {topSpecialties.map((specialty, index) => (
            <div key={specialty.id} className={`specialty-rank rank-${index + 1}`}>
              <div className="rank-badge">
                {index === 0 && '🥇'}
                {index === 1 && '🥈'}
                {index === 2 && '🥉'}
              </div>
              <div className="specialty-icon-wrapper">
                {getIconComponent(specialtyIcons[specialty.id])}
              </div>
              <div className="specialty-info">
                <h3>{specialty.name}</h3>
                <p className="specialty-category">
                  {specialty.category}
                </p>
                <div className="match-score">
                  <div className="score-bar">
                    <div 
                      className="score-fill" 
                      style={{ width: `${(specialty.score / questions.length) * 100}%` }}
                    ></div>
                  </div>
                  <span className="score-text">
                    {Math.round((specialty.score / questions.length) * 100)}% совпадение
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="restart-btn" onClick={onRestart}>
          <RestartAlt sx={{ marginRight: 1 }} />
          Пройти тест заново
        </button>
      </div>
    </div>
  );
};

export default Results;