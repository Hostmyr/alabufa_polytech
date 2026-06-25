import React, { useState } from 'react';
import { Send, Person, Email, Phone, CheckCircle, LocationOn } from '@mui/icons-material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: '', email: '', phone: '' });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="success-message">
        <CheckCircle sx={{ fontSize: 60, color: '#2e7d32', marginBottom: 2 }} />
        <h3>Спасибо за заявку!</h3>
        <p>Мы свяжемся с вами в ближайшее время</p>
      </div>
    );
  }

  return (
    <div className="contact-form-container">
      <h3>Ваши результаты готовы</h3>
      <p>Заполните форму и мы отправим результаты вам на почту</p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="fullName">
            <Person sx={{ marginRight: 1, verticalAlign: 'middle' }} />
            ФИО *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Иванов Иван Иванович"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            <Email sx={{ marginRight: 1, verticalAlign: 'middle' }} />
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="example@mail.ru"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">
            <Phone sx={{ marginRight: 1, verticalAlign: 'middle' }} />
            Номер телефона *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+7 (999) 999-99-99"
          />
        </div>

        <button type="submit" className="submit-btn">
          <Send sx={{ marginRight: 1 }} />
          Отправить заявку
        </button>
      </form>
    </div>
  );
};

export default ContactForm;