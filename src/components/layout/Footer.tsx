export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tx text-white pt-16 pb-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Логотип и контакты */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-fredoka text-2xl font-semibold text-white mb-4">
            <img src="/logo.png" alt="АРТ-ЛОГОС" className="h-8 w-auto object-contain" />
            <div>АРТ-<span className="text-sage">ЛОГОС</span></div>
          </div>
          <p className="text-sm text-white/55 leading-relaxed mb-6 max-w-sm">
            Уютный цифровой мир для развития речи детей от 2 лет. Логопедический центр с любовью к детям.
          </p>
          <div className="flex gap-3">
            <a href="tel:+79301228133" aria-label="Позвонить нам" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg hover:bg-em transition-colors">📞</a>
            <a href="https://t.me/art_logos_ekb" aria-label="Написать в Telegram" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg hover:bg-em transition-colors">✈️</a>
            <a href="https://vk.com/write-236774762" aria-label="Написать ВКонтакте" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg hover:bg-em transition-colors">👥</a>
          </div>
        </div>
        
        {/* Навигация: Центр */}
        <div className="flex flex-col">
          <h4 className="text-sm font-extrabold mb-4 text-white/50 tracking-wide uppercase">Центр</h4>
          <ul className="flex flex-col gap-2.5">
            <li><a href="#about" className="text-sm text-white/70 hover:text-white transition-colors">О нас</a></li>
            <li><a href="#services" className="text-sm text-white/70 hover:text-white transition-colors">Направления</a></li>

          </ul>
        </div>
        
        {/* Навигация: Родителям */}
        <div className="flex flex-col">
          <h4 className="text-sm font-extrabold mb-4 text-white/50 tracking-wide uppercase">Родителям</h4>
          <ul className="flex flex-col gap-2.5">
            <li><a href="#parents" className="text-sm text-white/70 hover:text-white transition-colors">Как мы работаем</a></li>
            <li><a href="#faq" className="text-sm text-white/70 hover:text-white transition-colors">Вопросы и ответы</a></li>
            <li><a href="#cta" className="text-sm text-white/70 hover:text-white transition-colors">Записаться</a></li>
          </ul>
        </div>
      </div>
      
      {/* Юридическая информация и Копирайт */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[12px] text-white/40 gap-4 text-center md:text-left">
        <div className="flex flex-col gap-1">
          <span>© {currentYear} АРТ-ЛОГОС. Все права защищены.</span>
          {/* Впиши сюда реальные ФИО и ИНН девушки-организатора */}
          <span>Лебедева Надежда Юрьевна | ИНН 442200605444</span>
        </div>
        
        <span className="text-[10px] text-white/30 text-center md:text-right max-w-xs">
          Продолжая использовать сайт, вы соглашаетесь с использованием файлов cookie.
        </span>
      </div>
    </footer>
  );
}