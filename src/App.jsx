import React, { useState } from 'react';
import Header from './components/Header';
import Quiz from './components/Quiz';
import Results from './components/Results';
import ContactForm from './components/ContactForm';
import Specialties from './components/Specialties';
import { LocationOn, Phone, Email } from '@mui/icons-material';
import './App.css';

function App() {
  const [testCompleted, setTestCompleted] = useState(false);
  const [answers, setAnswers] = useState({});

  const handleTestComplete = (userAnswers) => {
    console.log('Test completed with answers:', userAnswers);
    setAnswers(userAnswers);
    setTestCompleted(true);
    
    setTimeout(() => {
      const resultsElement = document.getElementById('results');
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 200);
  };

  const handleRestart = () => {
    setTestCompleted(false);
    setAnswers({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Header />
      
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Алабуга Политех</h1>
            <p>
              Крупнейший производственно-образовательный центр<br />
              по подготовке будущих предпринимателей
            </p>
            <a href="#quiz" className="cta-button">
              Пройти тестирование
            </a>
          </div>
        </section>

        <section id="quiz" className="quiz-section">
          {!testCompleted ? (
            <Quiz onComplete={handleTestComplete} />
          ) : (
            <div id="results">
              <ContactForm />
              <Results answers={answers} onRestart={handleRestart} />
            </div>
          )}
        </section>

        <Specialties />

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-top">
              <div className="footer-column">
                <h4>Поступление</h4>
                <ul>
                  <li><a href="#">Как поступить</a></li>
                  <li><a href="#">Выпускникам 11 класса</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4>Студентам</h4>
                <ul>
                  <li><a href="#">Командно-лидерские турниры</a></li>
                  <li><a href="#">Инфраструктура</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4>Об организации</h4>
                <ul>
                  <li><a href="#">Руководство</a></li>
                  <li><a href="#">Контакты</a></li>
                  <li><a href="#">Документы</a></li>
                  <li><a href="#">Новости</a></li>
                </ul>
              </div>
              
              <div className="footer-column footer-social">
                <div className="footer-logo">
                  <img src="/alabuga_logo.png" alt="Алабуга Политех" />
                </div>
                <div className="social-links">
                  <a href="#" className="social-link" aria-label="Telegram">
                    <img src="/alabufa_polytech/social-telegram.png" alt="Telegram" />
                  </a>
                  <a href="#" className="social-link" aria-label="ВКонтакте">
                    <img src="/alabufa_polytech/social-vk.png" alt="ВКонтакте" />
                  </a>
                  <a href="#" className="social-link" aria-label="TikTok">
                    <img src="/alabufa_polytech/social-tiktok.png" alt="TikTok" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="footer-bottom">
              <div className="footer-legal">
                <p>АО ОЭЗ ППТ «Алабуга»</p>
                <p>ИНН 1646019914</p>
                <p>ОГРН 1061674037259</p>
              </div>
              
              <div className="footer-address">
                <p>423601, Республика Татарстан (Татарстан), р-н Елабужский, ул Ш-2 (ОЭЗ Алабуга Тер.), д. 4/1</p>
                <p>Assessment@alabuga.ru</p>
              </div>
              
              <div className="footer-copyright">
                <p>© 2026 АО ОЭЗ ППТ «Алабуга», все права защищены.</p>
                <div className="footer-links">
                  <a href="#">Куки</a>
                  <a href="#">Политика конфиденциальности</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;