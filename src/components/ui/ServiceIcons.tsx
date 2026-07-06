// Иконки в стиле hand-drawn: одна линия + цветные акценты и декор
type IconProps = { className?: string };

// 1. Логопед — речевой пузырь с цветными акцентами
export function IconSpeech({ className = '' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Мягкое фоновое пятно */}
      <ellipse cx="30" cy="28" rx="22" ry="18" fill="#d8efe9" opacity="0.7"/>

      {/* Речевой пузырь */}
      <path
        d="M10 14 C10 11 12 10 14 10 L50 10 C52 10 54 11 54 14 L54 36 C54 39 52 40 50 40 L34 40 L26 52 L26 40 L14 40 C12 40 10 39 10 36 Z"
        stroke="#0c614b"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Язычок */}
      <path
        d="M20 28 Q32 36 44 28"
        stroke="#0c614b"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Зубки */}
      <path
        d="M20 22 L20 18 L25 22 L30 18 L35 22 L40 18 L44 22"
        stroke="#0c614b"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Декор: цветные точки-звуки */}
      <circle cx="56" cy="14" r="2.5" fill="#d38466"/>
      <circle cx="58" cy="22" r="1.8" fill="#d38466" opacity="0.7"/>
      <circle cx="56" cy="30" r="1.2" fill="#d38466" opacity="0.4"/>
      {/* Звёздочка */}
      <path d="M7 8 L8 5 L9 8 L12 9 L9 10 L8 13 L7 10 L4 9 Z" fill="#77ae9d"/>
    </svg>
  );
}

// 2. Подготовка к школе — карандаш + звёздочка + нотки
export function IconSchool({ className = '' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Фоновое пятно */}
      <ellipse cx="30" cy="38" rx="20" ry="16" fill="#fde8d8" opacity="0.7"/>

      {/* Тело карандаша */}
      <path
        d="M16 52 L44 12 L54 20 L26 60 L16 60 L16 52 Z"
        stroke="#0c614b"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Грифель */}
      <path
        d="M26 60 L20 54 L16 60"
        stroke="#0c614b"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Полоска на резинке */}
      <path d="M40 16 L50 24" stroke="#0c614b" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Заливка тела карандаша */}
      <path
        d="M18 53 L43 15 L51 21 L27 59 Z"
        fill="#d38466"
        opacity="0.2"
      />

      {/* Большая звезда */}
      <path
        d="M50 4 L52 10 L58 10 L53 14 L55 20 L50 16 L45 20 L47 14 L42 10 L48 10 Z"
        stroke="#d38466"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="#d38466"
        fillOpacity="0.3"
      />
      {/* Маленькие точки */}
      <circle cx="8" cy="16" r="2" fill="#77ae9d"/>
      <circle cx="10" cy="8" r="1.5" fill="#77ae9d" opacity="0.6"/>
      <circle cx="5" cy="24" r="1.2" fill="#d38466" opacity="0.5"/>
    </svg>
  );
}

// 3. Робототехника — шестерня + цветной акцент
export function IconRobotics({ className = '' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Фоновое пятно */}
      <circle cx="30" cy="30" r="18" fill="#d8efe9" opacity="0.6"/>

      {/* Шестерня — зубцы */}
      <path
        d="M29 7 L32 4 L35 7 Q39 7 42 10 L46 8 L49 11 L47 15 Q50 18 51 22 L55 23 L55 27 L51 28 Q50 32 47 35 L49 39 L46 42 L42 40 Q39 43 35 44 L32 47 L29 47 L26 44 Q22 43 19 40 L15 42 L12 39 L14 35 Q11 32 10 28 L6 27 L6 23 L10 22 Q11 18 14 15 L12 11 L15 8 L19 10 Q22 7 26 7 Z"
        stroke="#0c614b"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Внутренний круг */}
      <circle cx="30.5" cy="25.5" r="8" stroke="#0c614b" strokeWidth="2.4"/>
      {/* Цветная заливка центра */}
      <circle cx="30.5" cy="25.5" r="8" fill="#77ae9d" fillOpacity="0.25"/>
      {/* Болтик / плюс */}
      <path
        d="M30.5 20 L30.5 31 M25 25.5 L36 25.5"
        stroke="#d38466"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Молния — энергия */}
      <path d="M52 38 L48 46 L52 46 L48 54" stroke="#d38466" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// 4. Мама и малыш — фигурки с сердечком и конфетти
export function IconMomKid({ className = '' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Фоновое пятно */}
      <ellipse cx="32" cy="36" rx="22" ry="20" fill="#fde8d8" opacity="0.6"/>

      {/* Мама — голова */}
      <circle cx="20" cy="14" r="7" stroke="#0c614b" strokeWidth="2.5"/>
      <circle cx="20" cy="14" r="7" fill="#d8efe9" fillOpacity="0.5"/>
      {/* Мама — тело */}
      <path
        d="M20 21 L20 40 M20 40 L14 56 M20 40 L26 56 M8 30 L20 25 L32 32"
        stroke="#0c614b"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Малыш — голова */}
      <circle cx="44" cy="18" r="6" stroke="#d38466" strokeWidth="2.5"/>
      <circle cx="44" cy="18" r="6" fill="#fde8d8" fillOpacity="0.5"/>
      {/* Малыш — тело */}
      <path
        d="M44 24 L44 40 M44 40 L39 54 M44 40 L49 54 M32 32 L44 28 M44 28 L53 32"
        stroke="#d38466"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Сердечко */}
      <path
        d="M30 8 C30 5.5 32.5 4 34 6.5 C35.5 4 38 5.5 38 8 C38 11 34 14 34 14 C34 14 30 11 30 8 Z"
        fill="#d38466"
        fillOpacity="0.8"
        stroke="#d38466"
        strokeWidth="1"
      />

      {/* Конфетти */}
      <rect x="6" y="6" width="4" height="4" rx="1" fill="#77ae9d" transform="rotate(15 6 6)"/>
      <rect x="52" y="10" width="3" height="3" rx="0.5" fill="#d38466" opacity="0.6" transform="rotate(-20 52 10)"/>
      <circle cx="56" cy="30" r="2" fill="#0c614b" opacity="0.3"/>
      <circle cx="8" cy="46" r="1.5" fill="#d38466" opacity="0.4"/>
    </svg>
  );
}

// 5. Английский язык — буквы A+B с цветным акцентом и глобусом
export function IconEnglish({ className = '' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Фоновое пятно */}
      <circle cx="28" cy="34" r="20" fill="#d8efe9" opacity="0.5"/>

      {/* Большая буква A с цветной заливкой */}
      <path
        d="M8 58 L26 8 L44 58"
        stroke="#0c614b"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 40 L38 40" stroke="#0c614b" strokeWidth="3" strokeLinecap="round"/>
      {/* Цветной треугольник-заливка буквы А */}
      <path d="M26 8 L44 58 L8 58 Z" fill="#77ae9d" fillOpacity="0.15"/>

      {/* Маленькая B с акцентом */}
      <path
        d="M50 18 L50 50 M50 18 Q60 18 60 24 Q60 30 50 30 Q60 30 60 38 Q60 50 50 50"
        stroke="#d38466"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Три точки — многоязычие */}
      <circle cx="4" cy="12" r="2.5" fill="#d38466"/>
      <circle cx="4" cy="20" r="2" fill="#77ae9d"/>
      <circle cx="4" cy="27" r="1.5" fill="#0c614b" opacity="0.4"/>

      {/* Звёздочка */}
      <path d="M58 6 L59 9 L62 9 L60 11 L61 14 L58 12 L55 14 L56 11 L54 9 L57 9 Z"
        fill="#d38466" fillOpacity="0.7"/>
    </svg>
  );
}

// 6. ИЗО-студия — кисточка + цветные капли краски
export function IconArt({ className = '' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Фоновое пятно */}
      <ellipse cx="28" cy="36" rx="22" ry="18" fill="#fde8d8" opacity="0.5"/>

      {/* Кисточка — ручка */}
      <path
        d="M42 6 L58 22"
        stroke="#0c614b"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Кисточка — цветной корпус */}
      <path
        d="M36 12 L52 28"
        stroke="#77ae9d"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M36 12 L52 28"
        stroke="#0c614b"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Волосяной пучок кисточки */}
      <path
        d="M28 20 Q22 28 26 36 Q32 44 42 40 Q50 34 46 26 Z"
        stroke="#0c614b"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Капли краски — разные цвета */}
      <circle cx="12" cy="22" r="6" fill="#d38466" fillOpacity="0.7" stroke="#d38466" strokeWidth="1.5"/>
      <circle cx="8" cy="38" r="5" fill="#77ae9d" fillOpacity="0.7" stroke="#77ae9d" strokeWidth="1.5"/>
      <circle cx="18" cy="52" r="6" fill="#0c614b" fillOpacity="0.4" stroke="#0c614b" strokeWidth="1.5"/>

      {/* Пунктирные дуги — след кисточки */}
      <path d="M14 28 Q8 32 9 38" stroke="#d38466" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="2 3"/>
      <path d="M9 43 Q12 48 14 52" stroke="#77ae9d" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="2 3"/>

      {/* Маленькие брызги */}
      <circle cx="52" cy="36" r="2" fill="#d38466"/>
      <circle cx="56" cy="28" r="1.5" fill="#77ae9d"/>
      <circle cx="54" cy="42" r="1" fill="#0c614b" opacity="0.5"/>
    </svg>
  );
}

// 7. Логопед онлайн — ноутбук с пузырём речи
export function IconOnlineSpeech({ className = '' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Фоновое пятно */}
      <ellipse cx="32" cy="34" rx="24" ry="18" fill="#d8efe9" opacity="0.5"/>

      {/* Ноутбук — экран */}
      <rect x="10" y="20" width="36" height="24" rx="3" stroke="#0c614b" strokeWidth="2.5" strokeLinejoin="round"/>
      {/* Ноутбук — клавиатура */}
      <path d="M6 44 L8 48 L48 48 L50 44" stroke="#0c614b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Экранная рамка */}
      <rect x="14" y="24" width="28" height="16" rx="2" fill="#77ae9d" fillOpacity="0.2" stroke="#0c614b" strokeWidth="1.5"/>

      {/* Пузырь речи из экрана */}
      <path d="M40 6 C40 4 41.5 3 43 3 L54 3 C55.5 3 57 4 57 6 L57 13 C57 15 55.5 16 54 16 L48 16 L45 20 L45 16 L43 16 C41.5 16 40 15 40 13 Z"
        stroke="#0c614b" strokeWidth="2" strokeLinejoin="round" fill="#fde8d8" fillOpacity="0.6"/>
      {/* Текст в пузыре */}
      <line x1="43" y1="8" x2="54" y2="8" stroke="#0c614b" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="43" y1="11" x2="50" y2="11" stroke="#d38466" strokeWidth="1.5" strokeLinecap="round"/>

      {/* Wi-Fi символ */}
      <path d="M24 35 Q28 31 32 35" stroke="#0c614b" strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 31 Q28 25 36 31" stroke="#0c614b" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <circle cx="28" cy="38" r="2" fill="#d38466"/>

      {/* Декор: звёздочка */}
      <path d="M8 12 L9 9 L10 12 L13 13 L10 14 L9 17 L8 14 L5 13Z" fill="#77ae9d" opacity="0.8"/>
    </svg>
  );
}

// 8. Английский онлайн — ноутбук с буквами A/B
export function IconOnlineEnglish({ className = '' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Фоновое пятно */}
      <ellipse cx="32" cy="34" rx="24" ry="18" fill="#fde8d8" opacity="0.5"/>

      {/* Ноутбук — экран */}
      <rect x="10" y="20" width="36" height="24" rx="3" stroke="#0c614b" strokeWidth="2.5" strokeLinejoin="round"/>
      {/* Ноутбук — клавиатура */}
      <path d="M6 44 L8 48 L48 48 L50 44" stroke="#0c614b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Экранная рамка с цветным фоном */}
      <rect x="14" y="24" width="28" height="16" rx="2" fill="#d38466" fillOpacity="0.15" stroke="#0c614b" strokeWidth="1.5"/>

      {/* Буква A на экране */}
      <path d="M20 38 L26 26 L32 38" stroke="#0c614b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="22" y1="34" x2="30" y2="34" stroke="#0c614b" strokeWidth="2" strokeLinecap="round"/>

      {/* Буква B на экране */}
      <path d="M34 26 L34 38 M34 26 Q40 26 40 30 Q40 32 34 32 Q40 32 40 35 Q40 38 34 38"
        stroke="#d38466" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>

      {/* Флажок UK вверху */}
      <rect x="44" y="4" width="14" height="10" rx="2" fill="#d8efe9" stroke="#0c614b" strokeWidth="1.5"/>
      <line x1="44" y1="4" x2="58" y2="14" stroke="#0c614b" strokeWidth="1" opacity="0.4"/>
      <line x1="58" y1="4" x2="44" y2="14" stroke="#0c614b" strokeWidth="1" opacity="0.4"/>
      <line x1="51" y1="4" x2="51" y2="14" stroke="#d38466" strokeWidth="1.5"/>
      <line x1="44" y1="9" x2="58" y2="9" stroke="#d38466" strokeWidth="1.5"/>

      {/* Маленькие звёздочки */}
      <circle cx="6" cy="28" r="2" fill="#d38466" opacity="0.7"/>
      <circle cx="4" cy="36" r="1.5" fill="#77ae9d" opacity="0.6"/>
      <circle cx="8" cy="42" r="1" fill="#0c614b" opacity="0.4"/>
    </svg>
  );
}

// Маппинг по индексу карточки
export const SERVICE_ICONS = [IconSpeech, IconSchool, IconRobotics, IconMomKid, IconEnglish, IconArt, IconOnlineSpeech, IconOnlineEnglish];

