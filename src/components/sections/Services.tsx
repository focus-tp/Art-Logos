import { useState } from 'react';
import { Section, Reveal } from '../ui/Section';
import { SERVICES } from '../../data';
import { motion } from 'motion/react';

const cardThemes = [
  { bg: 'bg-em', text: 'text-white', hint: 'text-white/80', badgeBg: 'bg-white/20', badgeText: 'text-white', checkBg: 'bg-white/20', checkNum: 'text-white' }, 
  { bg: 'bg-peach', text: 'text-white', hint: 'text-white/90', badgeBg: 'bg-white/20', badgeText: 'text-white', checkBg: 'bg-white/20', checkNum: 'text-white' }, 
  { bg: 'bg-sage', text: 'text-white', hint: 'text-white/90', badgeBg: 'bg-white/20', badgeText: 'text-white', checkBg: 'bg-white/20', checkNum: 'text-white' }, 
];

function ServiceCard({ s, i }: { s: any, i: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const theme = cardThemes[i % cardThemes.length];

  return (
    <div 
      className="group cursor-pointer relative h-full outline-none"
      style={{ perspective: '1200px' }}
      onClick={() => setIsFlipped(!isFlipped)}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsFlipped(!isFlipped); }}
    >
      <motion.div
        className="w-full h-full"
        style={{ display: 'grid', transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 25 }}
      >
        {/* FRONT */}
        <div 
          className="bg-white rounded-3xl p-6 md:p-8 shadow-card ring-2 ring-transparent group-hover:ring-em group-hover:-translate-y-1 transition-all flex flex-col items-start border border-sage-l/50"
          style={{ gridArea: '1/1/1/1', backfaceVisibility: 'hidden' }}
        >
          <span className="text-[44px] block mb-4 group-hover:scale-110 transition-transform origin-bottom-left">{s.e}</span>
          <h3 className="font-fredoka text-[22px] font-bold mb-3 leading-tight">{s.title}</h3>
          <p className="text-[15px] text-tx-m leading-[1.6] flex-grow">{s.short}</p>
          
          <div className="flex items-center justify-between w-full mt-6 pt-4 border-t border-sage-l/50">
            <span className="inline-block bg-em-p text-em rounded-full py-1.5 px-3.5 text-[12px] font-bold">
              {s.age}
            </span>
            <span className="text-[13px] font-bold text-tx-m/60 group-hover:text-em transition-colors flex items-center gap-1.5">
              Подробнее <span className="text-lg leading-none mb-[2px]">↻</span>
            </span>
          </div>
        </div>

        {/* BACK */}
        <div 
          className={`${theme.bg} ${theme.text} rounded-3xl p-6 shadow-card-hover flex flex-col h-full ring-2 ring-transparent`}
          style={{ gridArea: '1/1/1/1', backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-fredoka text-[20px] font-bold leading-tight pr-4">{s.title}</h3>
            <span className="text-3xl leading-none opacity-90">{s.e}</span>
          </div>

          <p className={`text-[13.5px] leading-[1.45] mb-5 font-medium ${theme.hint}`}>
            {s.desc}
          </p>

          <ul className="flex flex-col gap-2 mb-6 flex-grow justify-start">
            {s.list.map((item: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2.5 text-[13px] leading-[1.3] font-medium">
                <span className={`${theme.checkBg} ${theme.checkNum} w-[18px] h-[18px] rounded-full flex items-center justify-center text-[10px] font-extrabold shrink-0 mt-[2px]`}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a 
            href="#cta"
            onClick={(e) => e.stopPropagation()}
            className="mt-auto block w-full bg-white text-tx rounded-full py-3 px-4 text-[14px] font-extrabold hover:bg-white/90 hover:scale-[1.02] active:scale-95 transition-all text-center shadow-sm"
          >
            Записаться
          </a>
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
          <div className="inline-flex items-center gap-1.5 bg-em-p text-em rounded-full py-1.5 px-4 text-[12px] font-extrabold tracking-wide uppercase mb-5">
            ✦ Направления
          </div>
          <h2 className="font-fredoka text-[clamp(28px,4vw,44px)] font-bold leading-[1.15] mb-4 tracking-[-0.5px]">
            Что мы умеем делать<br/>с любовью
          </h2>
          <p className="text-[17px] text-tx-m font-medium leading-[1.6] max-w-[560px]">
            Нажмите на карточку — она перевернётся, и вы узнаете больше.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {SERVICES.map((s, i) => (
          <Reveal key={i} delay={i * 0.05} className="flex h-full">
            <div className="w-full">
              <ServiceCard s={s} i={i} />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
