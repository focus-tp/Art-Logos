// Полная библиотека hand-drawn SVG-иконок для АРТ-ЛОГОС
// Единый стиль: одна линия, stroke, легкие цветные акценты
type P = { className?: string };
const c = '#0c614b'; // em — тёмно-зелёный
const s = '#77ae9d'; // sage — мятный
const p = '#d38466'; // peach — персиковый

// ─── МЕТОДИКИ (About) ─────────────────────────────────────────────────────────

// Кисточка рисует — ИЗО-терапия
export function IconBrush({ className = '' }: P) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <ellipse cx="20" cy="20" r="18" fill="#fde8d8" opacity="0.5"/>
      <path d="M28 6 L36 14" stroke={c} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M24 10 L32 18" stroke={s} strokeWidth="4" strokeLinecap="round" opacity="0.6"/>
      <path d="M24 10 L32 18" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      <path d="M14 18 Q10 24 14 30 Q20 36 28 30 Q34 24 28 16 Z" stroke={c} strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="8" cy="16" r="3.5" fill={p} fillOpacity="0.8"/>
      <circle cx="6" cy="26" r="2.5" fill={s} fillOpacity="0.8"/>
    </svg>
  );
}

// Рука с песком — Песочная терапия
export function IconSand({ className = '' }: P) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <ellipse cx="20" cy="22" rx="16" ry="12" fill="#d8efe9" opacity="0.5"/>
      {/* Колба/песочница */}
      <path d="M10 8 L30 8 L24 20 L28 32 L12 32 L16 20 Z" stroke={c} strokeWidth="2" strokeLinejoin="round"/>
      <line x1="10" y1="8" x2="30" y2="8" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      <line x1="12" y1="32" x2="28" y2="32" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      {/* Песок */}
      <ellipse cx="20" cy="32" rx="7" ry="2" fill={p} fillOpacity="0.4"/>
      <path d="M16 20 Q20 22 24 20" stroke={p} strokeWidth="1.5" strokeLinecap="round"/>
      {/* Звёздочки-блёстки */}
      <path d="M6 14 L7 11 L8 14 L11 15 L8 16 L7 19 L6 16 L3 15Z" fill={s} opacity="0.8"/>
      <circle cx="33" cy="12" r="1.5" fill={p}/>
    </svg>
  );
}

// Кубик/игрушка — Игровая терапия
export function IconPlay({ className = '' }: P) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="17" fill="#d8efe9" opacity="0.4"/>
      {/* Кубик */}
      <path d="M10 14 L20 8 L30 14 L30 26 L20 32 L10 26 Z" stroke={c} strokeWidth="2" strokeLinejoin="round"/>
      <path d="M10 14 L20 20 L30 14" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 20 L20 32" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      {/* Цветная грань */}
      <path d="M10 14 L20 20 L20 32 L10 26 Z" fill={s} fillOpacity="0.2"/>
      <path d="M20 8 L30 14 L20 20 Z" fill={p} fillOpacity="0.2"/>
      {/* Буква А на кубике */}
      <text x="16" y="16" fontSize="6" fill={c} fontWeight="bold" opacity="0.6">A</text>
      {/* Сердечко */}
      <path d="M5 6 C5 4.5 7 4 7.5 5.5 C8 4 10 4.5 10 6 C10 8 7.5 10 7.5 10 C7.5 10 5 8 5 6Z" fill={p} opacity="0.7"/>
    </svg>
  );
}

// Нота/музыка — Музыко-терапия
export function IconMusic({ className = '' }: P) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <ellipse cx="20" cy="22" rx="16" ry="14" fill="#d8efe9" opacity="0.5"/>
      {/* Нота (двойная) */}
      <path d="M14 26 L14 12 L30 9 L30 23" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="14" y1="12" x2="30" y2="9" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      <circle cx="11" cy="26" r="3.5" stroke={c} strokeWidth="2" fill={s} fillOpacity="0.3"/>
      <circle cx="27" cy="23" r="3.5" stroke={c} strokeWidth="2" fill={p} fillOpacity="0.3"/>
      {/* Волны — звук */}
      <path d="M6 18 Q8 15 6 12" stroke={s} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 20 Q6 15 3 10" stroke={s} strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      {/* Точечки-ноты */}
      <circle cx="33" cy="14" r="2" fill={p}/>
      <circle cx="36" cy="10" r="1.5" fill={p} opacity="0.6"/>
    </svg>
  );
}

// ─── CTA (плавающие декоры) ────────────────────────────────────────────────────

// Звезда — блик
export function IconStar({ className = '' }: P) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <path d="M24 4 L28 18 L42 18 L31 27 L35 41 L24 32 L13 41 L17 27 L6 18 L20 18 Z"
        stroke="white" strokeWidth="2" strokeLinejoin="round" fill="white" fillOpacity="0.25"/>
    </svg>
  );
}

// Воздушный шарик
export function IconBalloon({ className = '' }: P) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <ellipse cx="24" cy="18" rx="12" ry="15" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.2"/>
      <path d="M20 32 Q22 36 24 33 Q26 36 28 32" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M24 33 L24 44" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"/>
      <path d="M18 14 Q20 10 24 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
    </svg>
  );
}

// Бабочка
export function IconButterfly({ className = '' }: P) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <path d="M24 24 Q12 14 8 20 Q4 28 16 26 Q20 26 24 24Z" stroke="white" strokeWidth="2" strokeLinejoin="round" fill="white" fillOpacity="0.2"/>
      <path d="M24 24 Q36 14 40 20 Q44 28 32 26 Q28 26 24 24Z" stroke="white" strokeWidth="2" strokeLinejoin="round" fill="white" fillOpacity="0.2"/>
      <path d="M24 24 Q14 28 12 34 Q14 40 22 34 Q24 30 24 24Z" stroke="white" strokeWidth="2" strokeLinejoin="round" fill="white" fillOpacity="0.15"/>
      <path d="M24 24 Q34 28 36 34 Q34 40 26 34 Q24 30 24 24Z" stroke="white" strokeWidth="2" strokeLinejoin="round" fill="white" fillOpacity="0.15"/>
      <path d="M24 12 L24 36" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

// Нотка (одна, для CTA)
export function IconNote({ className = '' }: P) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <path d="M20 36 L20 14 L40 8 L40 30" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="20" y1="14" x2="40" y2="8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="16" cy="36" r="5" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.2"/>
      <circle cx="36" cy="30" r="5" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.2"/>
    </svg>
  );
}

// Цветок/ромашка
export function IconFlower({ className = '' }: P) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="5" fill="white" fillOpacity="0.4"/>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <ellipse
          key={i}
          cx="24"
          cy="24"
          rx="3"
          ry="9"
          fill="white"
          fillOpacity="0.25"
          stroke="white"
          strokeWidth="1"
          transform={`rotate(${deg} 24 24)`}
        />
      ))}
    </svg>
  );
}

// ─── КОНТАКТЫ / СВЯЗЬ ──────────────────────────────────────────────────────────

// Телефон (трубка)
export function IconPhone({ className = '' }: P) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none">
      <path
        d="M6 4 C6 4 8 4 9 6 L11 10 C11.5 11 11 12 10 12.5 L8 13.5 C9 16 11 18 13.5 19.5 L14.5 17.5 C15 16.5 16 16 17 16.5 L21 18.5 C23 19.5 23 21.5 23 21.5 C22 24 18 25 16 23 C10 20 4 12 4 8 C2 6 4 4 6 4 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Самолётик (Telegram)
export function IconTelegram({ className = '' }: P) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none">
      <path
        d="M4 14 L24 6 L18 22 L13 17 L4 14 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 17 L18 22 L18 17 L13 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4 14 L13 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

// Люди (ВКонтакте)
export function IconVk({ className = '' }: P) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none">
      <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="2"/>
      <circle cx="20" cy="10" r="4" stroke="currentColor" strokeWidth="2"/>
      <path d="M4 24 C4 20 6 18 10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 18 C20 18 24 20 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M10 18 Q14 16 18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

// ─── АКЦИИ / PROMOTIONS ────────────────────────────────────────────────────────

// Подарок
export function IconGift({ className = '' }: P) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <rect x="6" y="16" width="28" height="20" rx="3" stroke={c} strokeWidth="2" strokeLinejoin="round"/>
      <rect x="6" y="10" width="28" height="6" rx="2" stroke={c} strokeWidth="2" strokeLinejoin="round"/>
      <line x1="20" y1="10" x2="20" y2="36" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 10 C20 10 14 6 14 10" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 10 C20 10 26 6 26 10" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 10 C20 10 14 14 14 10" stroke={p} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 10 C20 10 26 14 26 10" stroke={p} strokeWidth="1.5" strokeLinecap="round"/>
      {/* Блики */}
      <circle cx="33" cy="8" r="2" fill={p} opacity="0.7"/>
      <path d="M6 8 L7 5 L8 8 L11 9 L8 10 L7 13 L6 10 L3 9Z" fill={s} opacity="0.8" transform="scale(0.7) translate(1, 1)"/>
    </svg>
  );
}

// Шестерня (Робот/Робототехника — упрощённая)
export function IconGear({ className = '' }: P) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="14" fill="#dbeafe" opacity="0.5"/>
      <path d="M18 4 L20 2 L22 4 Q26 4 29 7 L32 6 L34 8 L33 11 Q36 14 36 18 L38 20 L36 22 Q36 26 33 29 L34 32 L32 34 L29 33 Q26 36 22 36 L20 38 L18 36 Q14 36 11 33 L8 34 L6 32 L7 29 Q4 26 4 22 L2 20 L4 18 Q4 14 7 11 L6 8 L8 6 L11 7 Q14 4 18 4 Z"
        stroke="#3b82f6" strokeWidth="1.8" strokeLinejoin="round"/>
      <circle cx="20" cy="20" r="6" stroke="#3b82f6" strokeWidth="1.8"/>
      <path d="M20 14 L20 26 M14 20 L26 20" stroke={p} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

// Микрофон — диагностика речи
export function IconMic({ className = '' }: P) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <ellipse cx="20" cy="20" rx="16" ry="14" fill="#ffedd5" opacity="0.5"/>
      <rect x="14" y="6" width="12" height="18" rx="6" stroke={p} strokeWidth="2"/>
      <path d="M10 22 Q10 30 20 30 Q30 30 30 22" stroke={p} strokeWidth="2" strokeLinecap="round"/>
      <line x1="20" y1="30" x2="20" y2="36" stroke={p} strokeWidth="2" strokeLinecap="round"/>
      <line x1="14" y1="36" x2="26" y2="36" stroke={p} strokeWidth="2" strokeLinecap="round"/>
      {/* Волны голоса */}
      <path d="M6 16 Q8 13 6 10" stroke={p} strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <path d="M34 16 Q32 13 34 10" stroke={p} strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

// ─── СЕРВИСНЫЕ ИКОНКИ ──────────────────────────────────────────────────────────

// Иконки направлений (для раздела Services — уже в ServiceIcons.tsx, дублируем маппинг)
export { SERVICE_ICONS } from './ServiceIcons';
