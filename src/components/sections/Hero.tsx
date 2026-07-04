import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="hero" className="relative z-0 bg-transparent min-h-[100svh] flex flex-col items-center justify-center pt-28 pb-16 px-5 md:px-10 overflow-hidden">
      
      {/* Background Video */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <video 
          src="/hero-mobile.mp4" 
          poster="/hero-mobile-poster.jpg"
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover block md:hidden" 
        />
        <video 
          src="/hero.mp4" 
          poster="/hero-poster.jpg"
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover hidden md:block" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F2EC]/95 via-[#F7F2EC]/30 to-transparent backdrop-blur-[2px] pointer-events-none"></div>
      </div>
      
      {/* Background Decor */}
      <motion.div 
        animate={{ y: [-10, 10, -10], scale: [1, 1.03, 1] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[600px] h-[600px] -top-[100px] -right-[100px] rounded-full bg-[radial-gradient(circle,rgba(12,97,75,.08)_0%,transparent_70%)]"
      />
      <motion.div 
        animate={{ y: [10, -10, 10], scale: [1, 1.05, 1] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute w-[400px] h-[400px] -bottom-[50px] -left-[80px] rounded-full bg-[radial-gradient(circle,rgba(12,97,75,.06)_0%,transparent_70%)]"
      />
      <motion.div 
        animate={{ y: [-15, 15, -15], scale: [1, 1.02, 1] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute w-[200px] h-[200px] top-[40%] left-[40%] rounded-full bg-[radial-gradient(circle,rgba(211,132,102,.25)_0%,transparent_70%)]"
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center relative z-10 gap-10">
        {/* Content */}
        <div className="flex-1 max-w-[580px] z-10">
          <div className="inline-flex items-center gap-2 bg-em-p text-em rounded-full py-2 px-4.5 text-[13px] font-bold tracking-wide mb-7 uppercase">
            ✦ Детский центр речи и творчества · Екатеринбург
          </div>
          <h1 className="font-heading text-[clamp(42px,6vw,72px)] font-bold leading-[1.1] mb-5 tracking-tight text-tx">
            Место, где речь<br/>и таланты детей<br/>
            <span className="text-em">расцветают</span> ✨
          </h1>
          <p className="text-[18px] font-medium text-tx-m leading-[1.65] mb-10 max-w-[480px]">
            Бережный запуск и развитие речи через творчество и арт-терапию. Профессиональный логопед в Академическом для детей от 2 лет.
          </p>
          
          {/* Кнопки выровнены по верхнему краю (items-start) */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
            <div className="flex flex-col">
              <a href="#cta" className="bg-em text-white rounded-full py-4 px-9 text-[17px] font-extrabold hover:bg-em-l hover:-translate-y-0.5 transition-all shadow-[0_6px_28px_rgba(12,97,75,.4)] text-center">
                🎁 Записаться бесплатно
              </a>
              <p className="text-[14px] font-medium text-tx-m/80 mt-2 pl-4 max-w-[320px]">
                * Включает диагностику речи и групповое занятие для детей от 2 лет
              </p>
            </div>
            
            {/* Кнопка "Наши методики": добавлено whitespace-nowrap, shrink-0 и высота 58px для идеальной геометрии */}
            <a href="#services" className="bg-transparent text-tx border-2 border-tx/15 rounded-full h-[58px] px-8 text-[16px] font-bold hover:border-em hover:text-em transition-colors text-center inline-flex justify-center items-center gap-2 whitespace-nowrap shrink-0">
              Наши методики →
            </a>
          </div>
          
          {/* Stats */}
          <div className="flex gap-8 md:gap-10">
            <div>
              <div className="font-heading text-3xl font-bold text-em leading-none">100+</div>
              <div className="text-[13px] text-tx-m font-semibold mt-1">Заговорили легко</div>
            </div>
            <div>
              <div className="font-heading text-3xl font-bold text-em leading-none">8 лет</div>
              <div className="text-[13px] text-tx-m font-semibold mt-1">Опыта работы</div>
            </div>
            <div>
              <div className="font-heading text-3xl font-bold text-em leading-none">2 года</div>
              <div className="text-[13px] text-tx-m font-semibold mt-1">Мин. возраст детей</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}