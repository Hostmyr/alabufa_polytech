import React from 'react';
import { Assessment, Class, ContactPhone } from '@mui/icons-material';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img 
            src={logo} 
            alt="Алабуга Политех" 
            className="logo-image"
          />
        </div>
        <nav className="nav">
          <a href="#quiz">
            <Assessment sx={{ fontSize: 18, marginRight: 1 }} />
            Тестирование
          </a>
          <a href="#specialties">
            <Class sx={{ fontSize: 18, marginRight: 1 }} />
            Специальности
          </a>
          <a href="#contacts">
            <ContactPhone sx={{ fontSize: 18, marginRight: 1 }} />
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;