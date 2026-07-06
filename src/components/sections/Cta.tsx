import { motion } from 'motion/react';
import { IconStar, IconBalloon, IconButterfly, IconNote, IconFlower, IconPhone, IconTelegram, IconVk } from '../ui/Icons';

export default function Cta() {
  const floaters = [
    { Component: IconStar,     top: '15%', left: '8%',   right: undefined, bottom: undefined, delay: 0 },
    { Component: IconBalloon,  top: '20%', left: 'auto', right: '10%',     bottom: undefined, delay: 1.5 },
    { Component: IconButterfly,top: 'auto',left: '12%',  right: undefined, bottom: '20%',     delay: 3 },
    { Component: IconNote,     top: 'auto',left: 'auto', right: '8%',      bottom: '15%',     delay: 2 },
    { Component: IconFlower,   top: '50%', left: '3%',   right: undefined, bottom: undefined, delay: 4 },
  ];

  return (
    <section id="cta" className="bg-em text-center relative overflow-hidden py-[120px] px-5">
      {/* Background Decor */}
      <motion.div 
        animate={{ y: [-20, 20, -20], scale: [1, 1.05, 1] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[400px] h-[400px] -top-[100px] -left-[100px] rounded-full bg-white/[0.08]"
      />
      <motion.div 
        animate={{ y: [20, -20, 20], scale: [1, 1.03, 1] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
        className="absolute w-[300px] h-[300px] -bottom-[80px] -right-[60px] rounded-full bg-white/[0.08]"
      />
      
      {/* Floating SVG icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floaters.map(({ Component, top, left, right, bottom, delay }, i) => (
          <motion.div
            key={i}
            className="absolute w-12 h-12 hidden sm:block opacity-70"
            style={{ top, left, right, bottom }}
            animate={{ y: [-20, 20, -20], rotate: [-10, 10, -10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
          >
            <Component className="w-full h-full" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="inline-block bg-white/20 text-white rounded-full py-1.5 px-5 text-[13px] font-extrabold tracking-wide uppercase mb-7">
          Начните сегодня
        </div>
        <h2 className="font-fredoka text-[clamp(36px,5vw,58px)] font-bold text-white leading-[1.15] mb-5 tracking-[-0.5px]">
          Каждый ребёнок<br/>достоин звучать
        </h2>
        <p className="text-[20px] text-white/80 font-medium leading-[1.6] max-w-[520px] mx-auto mb-11">
          Запишитесь на бесплатную консультацию прямо сейчас. Первый шаг ничего не стоит — зато может изменить всё.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="tel:+79301228133" 
            className="bg-white text-em rounded-[50px] py-4 px-9 text-[18px] font-extrabold hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(0,0,0,.2)] transition-all shadow-[0_6px_28px_rgba(0,0,0,.15)] inline-flex items-center gap-2.5"
          >
            <IconPhone className="w-5 h-5" /> Позвонить
          </a>
          <a 
            href="https://t.me/art_logos_ekb"
            target="_blank" rel="noreferrer"
            className="bg-transparent text-white border-2 border-white/50 rounded-[50px] py-3.5 px-7 text-[17px] font-bold hover:bg-white/10 hover:border-white transition-colors flex items-center justify-center gap-2.5"
          >
            <IconTelegram className="w-5 h-5" /> Telegram
          </a>
          <a 
            href="https://vk.com/write-236774762"
            target="_blank" rel="noreferrer"
            className="bg-transparent text-white border-2 border-white/50 rounded-[50px] py-3.5 px-7 text-[17px] font-bold hover:bg-white/10 hover:border-white transition-colors flex items-center justify-center gap-2.5"
          >
            <IconVk className="w-5 h-5" /> ВКонтакте
          </a>
        </div>
      </div>
    </section>
  );
}
