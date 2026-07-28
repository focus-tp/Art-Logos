import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем, было ли уже дано согласие
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Небольшая задержка перед появлением для плавности
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, type: 'spring', stiffness: 200, damping: 20 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm bg-white rounded-2xl shadow-[0_8px_30px_rgba(7,54,40,0.12)] border border-sage-l/60 p-5 z-[9999]"
        >
          <div className="flex items-start gap-4">
            <div className="bg-em-p text-em p-2.5 rounded-full shrink-0">
              <Cookie className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-teal-950 font-bold text-[16px] mb-1 leading-tight">
                Мы используем Cookie
              </h4>
              <p className="text-[13px] text-tx-m leading-relaxed mb-4">
                Этот сайт использует файлы cookie, чтобы обеспечить вам наилучший пользовательский опыт. 
                Продолжая навигацию, вы соглашаетесь с их использованием.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleAccept}
                  className="bg-em text-white px-5 py-2 rounded-full text-[13px] font-bold hover:bg-em-l transition-colors focus:outline-none focus:ring-2 focus:ring-em focus:ring-offset-2"
                >
                  Хорошо, согласен
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
