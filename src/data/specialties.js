export const specialties = [
  {
    id: 'robotics',
    name: 'Промышленная робототехника',
    category: 'Промышленность и автоматизация',
    keywords: ['роботы', 'техника', 'механизмы', 'автоматизация', 'программирование']
  },
  {
    id: 'automation',
    name: 'Промышленная автоматика',
    category: 'Промышленность и автоматизация',
    keywords: ['автоматика', 'управление', 'контроль', 'системы', 'технологии']
  },
  {
    id: 'kipia',
    name: 'Промышленное оборудование. КИПиА',
    category: 'Промышленность и автоматизация',
    keywords: ['приборы', 'измерения', 'контроль', 'оборудование', 'датчики']
  },
  {
    id: 'valves',
    name: 'Промышленное оборудование. Запорно-регулирующая арматура и насосы',
    category: 'Промышленность и автоматизация',
    keywords: ['насосы', 'арматура', 'оборудование', 'механизмы', 'системы']
  },
  {
    id: 'welding',
    name: 'Промышленное оборудование. Сварочные технологии',
    category: 'Промышленность и автоматизация',
    keywords: ['сварка', 'металл', 'работа руками', 'технологии', 'производство']
  },
  {
    id: 'cnc',
    name: 'Программирование станков с ЧПУ',
    category: 'Промышленность и автоматизация',
    keywords: ['чпу', 'программирование', 'станки', 'обработка', 'технологии']
  },
  {
    id: 'safety',
    name: 'Промышленная безопасность',
    category: 'Промышленность и автоматизация',
    keywords: ['безопасность', 'контроль', 'защита', 'нормы', 'стандарты']
  },
  {
    id: 'web',
    name: 'WEB-программирование',
    category: 'Информационные технологии',
    keywords: ['веб', 'сайты', 'программирование', 'компьютер', 'разработка']
  },
  {
    id: 'business1c',
    name: 'Бизнес–информатика на платформе 1С',
    category: 'Информационные технологии',
    keywords: ['1с', 'бизнес', 'программирование', 'автоматизация', 'базы данных']
  },
  {
    id: 'bim',
    name: 'BIM–проектирование',
    category: 'Информационные технологии',
    keywords: ['проектирование', 'моделирование', 'чертежи', 'строительство', '3d']
  },
  {
    id: 'uav_nav',
    name: 'Аэронавигация и программирование БПЛА',
    category: 'Информационные технологии',
    keywords: ['дроны', 'бпла', 'навигация', 'программирование', 'полеты']
  },
  {
    id: 'fpv',
    name: 'FPV (оператор БПЛА)',
    category: 'Информационные технологии',
    keywords: ['fpv', 'дроны', 'управление', 'полеты', 'видео']
  },
  {
    id: 'microelectronics',
    name: 'Микроэлектроника',
    category: 'Электроника и электротехника',
    keywords: ['электроника', 'микросхемы', 'платы', 'компоненты', 'схемы']
  },
  {
    id: 'electrical',
    name: 'Электромонтаж и эксплуатация низковольтного оборудования',
    category: 'Электроника и электротехника',
    keywords: ['электрика', 'монтаж', 'оборудование', 'проводка', 'напряжение']
  },
  {
    id: 'chem_analysis',
    name: 'Лабораторный химический анализ',
    category: 'Химия и медицина',
    keywords: ['химия', 'анализ', 'лаборатория', 'исследования', 'вещества']
  },
  {
    id: 'medical',
    name: 'Лечебное дело и медицинская техника',
    category: 'Химия и медицина',
    keywords: ['медицина', 'лечение', 'техника', 'помощь', 'здоровье']
  },
  {
    id: 'biotech',
    name: 'Биотехнология',
    category: 'Химия и медицина',
    keywords: ['биология', 'технологии', 'исследования', 'организмы', 'наука']
  },
  {
    id: 'economics',
    name: 'Экономика и управление проектом',
    category: 'Юриспруденция',
    keywords: ['экономика', 'управление', 'проекты', 'бизнес', 'планирование']
  },
  {
    id: 'law',
    name: 'Юриспруденция и управление рисками',
    category: 'Юриспруденция',
    keywords: ['право', 'законы', 'риски', 'документы', 'защита']
  },
  {
    id: 'pedagogy',
    name: 'Международная педагогика',
    category: 'Педагогика',
    keywords: ['обучение', 'преподавание', 'дети', 'образование', 'международный']
  }
];

export const questions = [
  {
    id: 1,
    question: "Что тебе нравится больше всего?",
    options: [
      { text: "Разбираться в устройстве роботов и механизмов", specialties: ['robotics', 'automation', 'cnc'] },
      { text: "Писать код и создавать программы", specialties: ['web', 'business1c', 'uav_nav'] },
      { text: "Проводить опыты и эксперименты", specialties: ['chem_analysis', 'biotech', 'microelectronics'] },
      { text: "Работать с документами и законами", specialties: ['law', 'economics', 'safety'] },
      { text: "Обучать других и помогать людям", specialties: ['pedagogy', 'medical'] }
    ]
  },
  {
    id: 2,
    question: "Какой предмет в школе тебе дается легче всего?",
    options: [
      { text: "Физика и математика", specialties: ['robotics', 'automation', 'cnc', 'bim'] },
      { text: "Информатика", specialties: ['web', 'business1c', 'uav_nav', 'fpv', 'bim'] },
      { text: "Химия и биология", specialties: ['chem_analysis', 'biotech', 'medical'] },
      { text: "Обществознание", specialties: ['law', 'economics', 'pedagogy'] },
      { text: "Технология и труд", specialties: ['welding', 'valves', 'electrical', 'cnc'] }
    ]
  },
  {
    id: 3,
    question: "Как ты предпочитаешь проводить свободное время?",
    options: [
      { text: "Собираю конструкторы, разбираю устройства", specialties: ['robotics', 'microelectronics', 'cnc'] },
      { text: "Играю в игры или создаю что-то на компьютере", specialties: ['web', 'fpv', 'uav_nav'] },
      { text: "Читаю научные статьи и смотрю документалки", specialties: ['biotech', 'chem_analysis', 'bim'] },
      { text: "Участвую в дебатах и конкурсах", specialties: ['law', 'economics', 'pedagogy'] },
      { text: "Занимаюсь практической работой руками", specialties: ['welding', 'electrical', 'valves'] }
    ]
  },
  {
    id: 4,
    question: "Что для тебя важнее в будущей работе?",
    options: [
      { text: "Видеть конкретный результат своего труда", specialties: ['welding', 'cnc', 'web', 'bim'] },
      { text: "Работать с современными технологиями", specialties: ['robotics', 'automation', 'uav_nav', 'fpv'] },
      { text: "Делать открытия и исследовать новое", specialties: ['biotech', 'chem_analysis', 'microelectronics'] },
      { text: "Иметь стабильность и социальную значимость", specialties: ['medical', 'pedagogy', 'safety'] },
      { text: "Принимать важные решения и управлять", specialties: ['economics', 'law', 'automation'] }
    ]
  },
  {
    id: 5,
    question: "Какая деятельность тебе ближе?",
    options: [
      { text: "Настройка и программирование оборудования", specialties: ['cnc', 'automation', 'kipia', 'uav_nav'] },
      { text: "Разработка сайтов и приложений", specialties: ['web', 'business1c'] },
      { text: "Работа в лаборатории с реактивами", specialties: ['chem_analysis', 'biotech'] },
      { text: "Составление документов и отчетов", specialties: ['law', 'economics', 'safety'] },
      { text: "Проведение занятий и тренингов", specialties: ['pedagogy', 'medical'] }
    ]
  },
  {
    id: 6,
    question: "Что тебя больше вдохновляет?",
    options: [
      { text: "Современные роботы и автоматизация", specialties: ['robotics', 'automation', 'cnc'] },
      { text: "Искусственный интеллект и программы", specialties: ['web', 'business1c', 'uav_nav'] },
      { text: "Новые материалы и вещества", specialties: ['chem_analysis', 'biotech', 'microelectronics'] },
      { text: "Справедливость и правовое регулирование", specialties: ['law', 'safety', 'economics'] },
      { text: "Развитие и обучение людей", specialties: ['pedagogy', 'medical'] }
    ]
  },
  {
    id: 7,
    question: "Где ты видишь себя через 5 лет?",
    options: [
      { text: "Инженером на современном производстве", specialties: ['robotics', 'automation', 'cnc', 'welding'] },
      { text: "Разработчиком в IT-компании", specialties: ['web', 'business1c', 'bim', 'uav_nav'] },
      { text: "Исследователем в лаборатории", specialties: ['chem_analysis', 'biotech', 'microelectronics'] },
      { text: "Специалистом в юридической фирме", specialties: ['law', 'economics', 'safety'] },
      { text: "Преподавателем или медицинским работником", specialties: ['pedagogy', 'medical'] }
    ]
  }
];

export const categoryNames = {
  industry: "Промышленность и автоматизация",
  it: "Информационные технологии",
  electronics: "Электроника и электротехника",
  chemistry: "Химия и медицина",
  law: "Юриспруденция",
  pedagogy: "Педагогика"
};

export const specialtyIcons = {
  robotics: 'SmartToy',
  automation: 'Settings',
  kipia: 'Tune',
  valves: 'WaterPump',
  welding: 'Hardware',
  cnc: 'PrecisionManufacturing',
  safety: 'SafetyCheck',
  web: 'Code',
  business1c: 'Business',
  bim: 'Architecture',
  uav_nav: 'Flight',
  fpv: 'Videocam',
  microelectronics: 'Memory',
  electrical: 'ElectricalServices',
  chem_analysis: 'Science',
  medical: 'MedicalServices',
  biotech: 'Biotech',
  economics: 'TrendingUp',
  law: 'Gavel',
  pedagogy: 'School'
};