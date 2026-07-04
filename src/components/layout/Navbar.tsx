import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // БЛОКИРОВКА СКРОЛЛА ПРИ ОТКРЫТОМ МЕНЮ
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Защита: если компонент удалится, скролл точно разблокируется
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
    <nav className={`fixed top-0 left-0 right-0 z-[40] transition-all duration-300 py-4 px-5 md:px-10 flex items-center justify-between border-b border-sage/20 bg-ww/98 backdrop-blur-xl ${scrolled ? 'shadow-sm' : ''}`}>
      <Link to="/" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); closeMenu(); }} className="flex items-center gap-2 font-fredoka text-xl lg:text-2xl font-semibold text-em hover:opacity-80 transition-opacity z-50">
        <img src="/logo.png" alt="АРТ-ЛОГОС" className="h-8 w-auto object-contain" />
        <div>АРТ-<span className="text-tx">ЛОГОС</span></div>
      </Link>
      
      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-4 xl:gap-7">
        <li><a href="#about" className="text-[14px] xl:text-[15px] font-semibold text-tx-m hover:text-em transition-colors">О центре</a></li>
        <li><a href="#services" className="text-[14px] xl:text-[15px] font-semibold text-tx-m hover:text-em transition-colors">Направления</a></li>
        <li><a href="#team" className="text-[14px] xl:text-[15px] font-semibold text-tx-m hover:text-em transition-colors">Специалисты</a></li>
        <li><a href="#parents" className="text-[14px] xl:text-[15px] font-semibold text-tx-m hover:text-em transition-colors">Родителям</a></li>
        <li><a href="#cta" className="text-[14px] xl:text-[15px] font-semibold text-tx-m hover:text-em transition-colors">Контакты</a></li>
        
        {/* Временно скрываем кнопку "Детям" на десктопе 
        <li>
          <Link to="/kids" className="bg-orange-400 text-white px-4 xl:px-5 py-2 rounded-full text-[14px] xl:text-[15px] font-bold shadow-md hover:bg-orange-500 hover:-translate-y-0.5 transition-all flex items-center gap-2">
            🎈 Детям
          </Link>
        </li>
        */}
      </ul>
      
      <div className="hidden lg:block">
        <a 
          href="tel:+79301228133" 
          className="bg-em text-white rounded-full py-2.5 px-5 xl:px-6 text-[14px] xl:text-[15px] font-bold hover:bg-em-l hover:-translate-y-[1px] transition-all shadow-[0_4px_16px_rgba(12,97,75,.35)]"
        >
          Записаться
        </a>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button 
        className="lg:hidden z-50 p-2 text-em focus:outline-none" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        )}
      </button>
    </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-ww/98 backdrop-blur-xl z-[35] flex flex-col pt-24 px-6 pb-6 overflow-y-auto lg:hidden">
          <ul className="flex flex-col gap-6 text-center">
            <li><a href="#about" onClick={closeMenu} className="text-xl font-semibold text-tx hover:text-em transition-colors">О центре</a></li>
            <li><a href="#services" onClick={closeMenu} className="text-xl font-semibold text-tx hover:text-em transition-colors">Направления</a></li>
            <li><a href="#team" onClick={closeMenu} className="text-xl font-semibold text-tx hover:text-em transition-colors">Специалисты</a></li>
            <li><a href="#parents" onClick={closeMenu} className="text-xl font-semibold text-tx hover:text-em transition-colors">Родителям</a></li>
            <li><a href="#cta" onClick={closeMenu} className="text-xl font-semibold text-tx hover:text-em transition-colors">Контакты</a></li>
            
            {/* Временно скрываем кнопку "Детям" на мобильных
            <li className="flex justify-center mt-4">
              <Link to="/kids" onClick={closeMenu} className="bg-orange-400 text-white px-8 py-3 rounded-full text-lg font-bold shadow-md hover:bg-orange-500 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 w-full max-w-xs">
                🎈 Детям
              </Link>
            </li>
            */}
            
            <li className="flex justify-center mt-2">
              <a 
                href="tel:+79301228133" 
                onClick={closeMenu}
                className="bg-em text-white rounded-full py-3 px-8 text-lg font-bold hover:bg-em-l hover:-translate-y-[1px] transition-all shadow-[0_4px_16px_rgba(12,97,75,.35)] w-full max-w-xs text-center"
              >
                Записаться
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}