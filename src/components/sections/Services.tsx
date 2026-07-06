import { useState } from 'react';
import { motion } from 'motion/react';
import { Section, Reveal } from '../ui/Section';
import { SERVICES } from '../../data';
import { SERVICE_ICONS } from '../ui/ServiceIcons';

// Настройка интерфейса данных
interface ServiceItem {
  e: string;
  title: string;
  short: string;
  age: string;
  desc: string;
  list: string[];
}

const cardThemes = [
  { bg: 'bg-em', text: 'text-white', hint: 'text-white/80', checkBg: 'bg-white/20', checkNum: 'text-white' }, 
  { bg: 'bg-peach', text: 'text-white', hint: 'text-white/90', checkBg: 'bg-white/20', checkNum: 'text-white' }, 
  { bg: 'bg-sage', text: 'text-white', hint: 'text-white/90', checkBg: 'bg-white/20', checkNum: 'text-white' }, 
  { bg: 'bg-tx', text: 'text-white', hint: 'text-white/80', checkBg: 'bg-white/20', checkNum: 'text-white' }, 
];

function ServiceCard({ s, i }: { s: ServiceItem, i: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const theme = cardThemes[i % cardThemes.length];
  const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];

  return (
    <div 
      className="group cursor-pointer relative w-full h-full outline-none"
      style={{ perspective: '1200px' }}
      onClick={() => setIsFlipped(!isFlipped)}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsFlipped(!isFlipped); }}
    >
      <motion.div
        className="w-full h-full grid"
        style={{ transformStyle: 'preserve-3d', gridTemplateAreas: '"card"' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 220, damping: 22 }}
      >
        {/* ЛИЦЕВАЯ СТОРОНА */}
        <div 
          className="relative overflow-hidden bg-white rounded-3xl p-5 xl:p-6 shadow-card ring-2 ring-transparent group-hover:ring-em group-hover:-translate-y-1 transition-all flex flex-col items-start border border-sage-l/50 [backface-visibility:hidden]"
          style={{ gridArea: 'card' }}
        >
          {/* Фоновый водяной знак (декор) */}
          <div className="absolute -bottom-8 -right-8 opacity-[0.06] pointer-events-none z-0 rotate-[-10deg]">
            <Icon className="w-52 h-52" />
          </div>

          {/* SVG Иконка в цветном блоке */}
          <div className="mb-5 w-full relative z-10">
            <div className="relative inline-block bg-em-p rounded-2xl p-3 group-hover:scale-105 transition-transform duration-300">
              <Icon className="w-20 h-20" />
              {s.title.includes('онлайн') && (
                <span className="absolute -top-1.5 -right-1.5 bg-sky-500 text-white text-[9px] font-extrabold uppercase tracking-wide px-1.5 py-0.5 rounded-full shadow-sm whitespace-nowrap">
                  📶 Онлайн
                </span>
              )}
            </div>
          </div>
          <h3 className="text-[21px] font-bold mb-2 leading-tight text-teal-950 relative z-10">{s.title}</h3>
          <p className="text-[15px] text-tx-m leading-[1.55] flex-grow relative z-10">{s.short}</p>
          
          <div className="flex items-center justify-between w-full mt-auto pt-4 border-t border-sage-l/50 relative z-10">
            <span className="inline-block bg-em-p text-em rounded-full py-1.5 px-3 text-[12px] font-bold">
              {s.age}
            </span>
            <span className="text-[13px] font-bold text-tx-m/60 group-hover:text-em transition-colors flex items-center gap-1">
              Подробнее <span className="text-base leading-none">↻</span>
            </span>
          </div>
        </div>

        {/* ОБРАТНАЯ СТОРОНА */}
        <div 
          className={`${theme.bg} ${theme.text} rounded-3xl p-5 md:p-6 xl:p-7 shadow-card-hover flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden`}
          style={{ gridArea: 'card' }}
        >
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-[18px] xl:text-[20px] font-bold leading-tight pr-2">{s.title}</h3>
            <div className="w-14 h-14 bg-white/95 rounded-2xl flex items-center justify-center shrink-0 shadow ml-2">
              <Icon className="w-10 h-10" />
            </div>
          </div>

          <p className={`text-[14.5px] leading-[1.45] mb-4 font-medium ${theme.hint}`}>
            {s.desc}
          </p>

          <ul className="flex flex-col gap-2 mb-4 justify-start">
            {s.list.map((item: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2.5 text-[14px] leading-[1.35] font-medium">
                <span className={`${theme.checkBg} ${theme.checkNum} w-[18px] h-[18px] rounded-full flex items-center justify-center text-[11px] font-extrabold shrink-0 mt-[1px]`}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a 
            href="#cta"
            onClick={(e) => e.stopPropagation()}
            className="mt-auto block w-full bg-white text-tx rounded-full py-3 px-4 text-[15px] font-extrabold hover:bg-white/90 hover:scale-[1.01] active:scale-95 transition-all text-center shadow-md relative z-10"
          >
            Записаться
          </a>

          {/* Фирменная Буковка А в углу */}
          <img 
            src="/mascot-a.png" 
            alt="Буковка А" 
            className="absolute -bottom-5 -right-5 w-24 h-auto opacity-15 pointer-events-none z-0"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function Services() {
  return (
    <Section id="services" className="bg-ww border-t border-sage-l/30">
      <Reveal>
        <div className="mb-14">
          <div className="inline-flex items-center gap-1.5 bg-em-p text-em rounded-full py-1.5 px-4 text-[13px] font-extrabold tracking-wide uppercase mb-5">
            ✦ Направления
          </div>
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold leading-[1.15] mb-4 tracking-[-0.5px] text-teal-900">
            Что мы умеем делать<br/>с любовью
          </h2>
          <p className="text-[18px] text-tx-m font-medium leading-[1.6] max-w-[560px]">
            Нажмите на карточку — она перевернётся, и вы узнаете больше о наших развивающих курсах.
          </p>
        </div>
      </Reveal>

      {/* 8 карточек: 4 колонки на широком экране, 2 на планшете */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {SERVICES.map((s, i) => (
          <Reveal key={i} delay={i * 0.05} className="flex h-full w-full">
            <div className="w-full h-full">
              <ServiceCard s={s} i={i} />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}