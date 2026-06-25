import React from 'react';
import { specialties, specialtyIcons } from '../data/specialties';
import * as Icons from '@mui/icons-material';
import { Category, Star } from '@mui/icons-material';

const Specialties = () => {
  // Группируем специальности по категориям
  const groupedSpecialties = specialties.reduce((acc, specialty) => {
    if (!acc[specialty.category]) {
      acc[specialty.category] = [];
    }
    acc[specialty.category].push(specialty);
    return acc;
  }, {});

  const getIconComponent = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent sx={{ fontSize: 24, color: '#0066cc' }} /> : <Star sx={{ fontSize: 24, color: '#0066cc' }} />;
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Промышленность и автоматизация': return <Icons.Engineering sx={{ fontSize: 36, color: '#0066cc' }} />;
      case 'Информационные технологии': return <Icons.Computer sx={{ fontSize: 36, color: '#0066cc' }} />;
      case 'Электроника и электротехника': return <Icons.Devices sx={{ fontSize: 36, color: '#0066cc' }} />;
      case 'Химия и медицина': return <Icons.Science sx={{ fontSize: 36, color: '#0066cc' }} />;
      case 'Юриспруденция': return <Icons.Gavel sx={{ fontSize: 36, color: '#0066cc' }} />;
      case 'Педагогика': return <Icons.School sx={{ fontSize: 36, color: '#0066cc' }} />;
      default: return <Category sx={{ fontSize: 36, color: '#0066cc' }} />;
    }
  };

  return (
    <div className="specialties-container" id="specialties">
      <h2 className="section-title">Все специальности</h2>
      <p className="section-subtitle">
        Выберите направление, которое подходит именно вам. 
        У нас более 20 современных специальностей
      </p>

      <div className="specialties-grid">
        {Object.entries(groupedSpecialties).map(([category, items], index) => (
          <div key={index} className="specialty-category-card">
            <div className="category-header">
              <div className="category-icon">
                {getCategoryIcon(category)}
              </div>
              <h3 className="category-title">{category}</h3>
            </div>
            <div className="category-divider"></div>
            <ul className="specialty-list">
              {items.map((item) => (
                <li key={item.id} className="specialty-item">
                  <span className="specialty-icon">
                    {getIconComponent(specialtyIcons[item.id])}
                  </span>
                  <span className="specialty-name">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialties;