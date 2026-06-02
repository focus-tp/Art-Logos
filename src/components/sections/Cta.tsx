import { motion } from 'motion/react';

export default function Cta() {
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
      
      {/* Floating Emojis */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[ 
          { e: '🌟', top: '15%', left: '8%', delay: 0 },
          { e: '🎈', top: '20%', left: 'auto', right: '10%', delay: 1.5 },
          { e: '🦋', top: 'auto', bottom: '20%', left: '12%', delay: 3 },
          { e: '🎵', top: 'auto', bottom: '15%', left: 'auto', right: '8%', delay: 2 },
          { e: '🌸', top: '50%', left: '3%', delay: 4 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl hidden sm:block opacity-80"
            style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
            animate={{ y: [-20, 20, -20], rotate: [-10, 10, -10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
          >
            {item.e}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="inline-block bg-white/20 text-white rounded-full py-1.5 px-5 text-[12px] font-extrabold tracking-wide uppercase mb-7">
          Начните сегодня
        </div>
        <h2 className="font-fredoka text-[clamp(36px,5vw,58px)] font-bold text-white leading-[1.15] mb-5 tracking-[-0.5px]">
          Каждый ребёнок<br/>достоин звучать
        </h2>
        <p className="text-[19px] text-white/80 font-medium leading-[1.6] max-w-[520px] mx-auto mb-11">
          Запишитесь на бесплатную консультацию прямо сейчас. Первый шаг ничего не стоит — зато может изменить всё.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="tel:+79301228133" 
            className="bg-white text-em rounded-[50px] py-4 px-9 text-[17px] font-extrabold hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(0,0,0,.2)] transition-all shadow-[0_6px_28px_rgba(0,0,0,.15)]"
          >
            📞 Позвонить
          </a>
          <a 
            href="https://wa.me/79301228133" 
            target="_blank" rel="noreferrer"
            className="bg-transparent text-white border-2 border-white/50 rounded-[50px] py-3.5 px-7 text-[16px] font-bold hover:bg-white/10 hover:border-white transition-colors flex items-center justify-center"
          >
            💬 Написать в WhatsApp
          </a>
          <a 
            href="https://t.me/+79301228133"
            target="_blank" rel="noreferrer"
            className="bg-transparent text-white border-2 border-white/50 rounded-[50px] py-3.5 px-7 text-[16px] font-bold hover:bg-white/10 hover:border-white transition-colors flex items-center justify-center"
          >
            ✈️ Telegram
          </a>
          <a 
            href="https://vk.com/write-236774762"
            target="_blank" rel="noreferrer"
            className="bg-transparent text-white border-2 border-white/50 rounded-[50px] py-3.5 px-7 text-[16px] font-bold hover:bg-white/10 hover:border-white transition-colors flex items-center justify-center"
          >
            👥 ВКонтакте
          </a>
        </div>
      </div>
    </section>
  );
}
