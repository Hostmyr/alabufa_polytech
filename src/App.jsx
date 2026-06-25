import React, { useState } from 'react';
import Header from './components/Header';
import Quiz from './components/Quiz';
import Results from './components/Results';
import ContactForm from './components/ContactForm';
import Specialties from './components/Specialties';
import { LocationOn, Phone, Email } from '@mui/icons-material';
import { ReactComponent as TelegramIcon } from './assets/social-telegram.png';
import { ReactComponent as VKIcon } from './assets/social-vk.png';
import { ReactComponent as TikTokIcon } from './assets/social-tiktok.png';
import logo from './assets/logo.png';
import telegramIcon from './assets/social-telegram.png';
import vkIcon from './assets/social-vk.png';
import tiktokIcon from './assets/social-tiktok.png';
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
                  <li><a href="https://polytech.alabuga.ru/how-to-apply">Как поступить</a></li>
                  <li><a href="https://polytech.alabuga.ru/higher-education">Выпускникам 11 класса</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4>Студентам</h4>
                <ul>
                  <li><a href="https://polytech.alabuga.ru/klt">Командно-лидерские турниры</a></li>
                  <li><a href="https://polytech.alabuga.ru/infrastructure">Инфраструктура</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4>Об организации</h4>
                <ul>
                  <li><a href="https://polytech.alabuga.ru/management">Руководство</a></li>
                  <li><a href="https://polytech.alabuga.ru/contacts">Контакты</a></li>
                  <li><a href="https://polytech.alabuga.ru/document">Документы</a></li>
                  <li><a href="https://polytech.alabuga.ru/news">Новости</a></li>
                </ul>
              </div>
            <div className="footer-column footer-social">
              <div className="footer-logo">
                <img src={logo} alt="Алабуга Политех" />
              </div>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Telegram">
                  <img src={telegramIcon} alt="Telegram" />
                </a>
                <a href="#" className="social-link" aria-label="ВКонтакте">
                  <img src={vkIcon} alt="ВКонтакте" />
                </a>
                <a href="#" className="social-link" aria-label="TikTok">
                  <img src={tiktokIcon} alt="TikTok" />
                </a>
              </div>
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
                  <a href="https://polytech.alabuga.ru/cookie">Куки</a>
                  <a href="https://polytech.alabuga.ru/privacy-policy">Политика конфиденциальности</a>
                </div>
              </div>
            </div>
        </footer>
      </main>
    </div>
    
  );
}

export default App;