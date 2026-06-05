import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Playworld from '../components/sections/Playworld';
import Videos from '../components/sections/Videos';
import { Link } from 'react-router-dom';
import { GAMES } from '../data';
import MemoryGame from '../components/games/MemoryGame';
import BubblePop from '../components/games/BubblePop';
import HappyLetters from '../components/games/HappyLetters';
import NamingGame from '../components/games/NamingGame';
import FeedMe from '../components/games/FeedMe';
import HideAndSeek from '../components/games/HideAndSeek';
import { Modal } from '../components/ui/Modal';

export default function KidsPage() {
  const [childName, setChildName] = useState('');
  const [hasName, setHasName] = useState(false);
  const [greetingParams, setGreetingParams] = useState({ phraseTemplate: '', gameTitle: '' });
  const inputRef = useRef<HTMLInputElement>(null);
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<'hub' | 'games' | 'cartoons' | 'warmups'>('hub');

  const renderGame = () => {
    switch (activeGame) {
      case 'memory': return <MemoryGame />;
      case 'bubbles': return <BubblePop />;
      case 'letters': return <HappyLetters />;
      case 'naming': return <NamingGame />;
      case 'feedme': return <FeedMe />;
      case 'hideandseek': return <HideAndSeek />;
      default: return null;
    }
  };

  useEffect(() => {
    const activeGames = GAMES.filter(g => g.id !== null);
    const phrases = [
      "{name}, давай поиграем в {game} и выучим новые слова!",
      "Ура, {name} здесь! Как насчёт игры {game}?",
      "{name}, смотри что я нашел! Тут есть {game}, давай сыграем?",
      "Отличный день для игры, {name}! Запускаем {game}?",
      "{name}, я приготовил специально для тебя {game}! Попробуем?"
    ];
    let gameTitle = 'Лопни пузырь';
    if (activeGames.length > 0) {
      const randomGame = activeGames[Math.floor(Math.random() * activeGames.length)];
      gameTitle = randomGame.title;
    }
    const template = phrases[Math.floor(Math.random() * phrases.length)];
    setGreetingParams({ phraseTemplate: template, gameTitle });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (childName.trim()) {
      setHasName(true);
    }
  };

  const renderGreeting = () => {
    if (!greetingParams.phraseTemplate) return null;
    const parts = greetingParams.phraseTemplate.split(/(\{name\}|\{game\})/g);
    return (
      <>
        {parts.map((part, i) => {
          if (part === '{name}') return <span key={i}>{childName}</span>;
          if (part === '{game}') return <span key={i} className="text-orange-500">{greetingParams.gameTitle}</span>;
          return <span key={i}>{part}</span>;
        })}
      </>
    );
  };

  return (
    <div className="font-kids bg-gradient-to-br from-yellow-400 via-amber-400 to-rose-400 min-h-screen text-tx relative overflow-hidden flex flex-col">
      <header className="p-5 flex justify-between items-center relative z-20">
        <Link to="/" className="inline-flex items-center gap-2 bg-white/70 hover:bg-white px-4 py-2 rounded-full font-bold text-tx-m transition-colors shadow-sm">
          <span>⬅️</span> Взрослый раздел
        </Link>
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-orange-500 hover:opacity-80 transition-opacity">
          <img src="/logo.png" alt="АРТ-ЛОГОС" className="h-8 w-auto object-contain" />
          <span>ДЕТЯМ</span>
        </Link>
      </header>

      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] left-[10%] text-4xl opacity-50">⭐</motion.div>
        <motion.div animate={{ y: [10, -10, 10], rotate: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[20%] left-[8%] text-5xl opacity-40">🎵</motion.div>
        <motion.div animate={{ y: [-10, 10, -10], rotate: [0, 15, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-[30%] right-[10%] text-5xl opacity-50">🎈</motion.div>
        <motion.div animate={{ y: [15, -15, 15], rotate: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3 }} className="absolute bottom-[40%] right-[5%] text-4xl opacity-40">🌈</motion.div>
        <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-[50%] left-[20%] text-3xl opacity-30">🌻</motion.div>
      </div>

      <main className="flex-1 relative z-10 flex flex-col items-center justify-center p-5">
        <AnimatePresence mode="wait">
          {!hasName ? (
            <motion.div 
              key="ask-name"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -40 }}
              className="max-w-3xl w-full flex flex-col md:flex-row-reverse items-center justify-center gap-10"
            >
              <motion.img 
                src="/mascot-a.png" 
                alt="Маскот Буковка А"
                className="w-64 h-auto drop-shadow-2xl z-20 cursor-pointer"
                animate={{ y: [0, -15, 0], rotate: [-2, 2, -2] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                whileHover={{ scale: 1.15, rotate: 5, transition: { duration: 0.2 } }}
              />

              <div className="w-full max-w-md text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">
                  Привет, я Буковка А! 🎨
                </h1>
                <p className="text-xl text-teal-700 font-medium mb-8">
                  А как тебя зовут?
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input 
                    ref={inputRef}
                    type="text" 
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    placeholder="Введи своё имя..."
                    className="w-full bg-white text-center md:text-left text-3xl font-bold py-5 px-6 rounded-full border-4 border-orange-300 focus:border-orange-500 focus:outline-none shadow-inner text-indigo-900 placeholder:text-indigo-900/40"
                    autoFocus
                  />
                  
                  <button 
                    type="submit"
                    disabled={!childName.trim()}
                    className="bg-orange-500 disabled:bg-orange-300 disabled:shadow-none text-white font-bold text-xl py-4 px-8 rounded-full shadow-[0_8px_0_#c2410c] active:translate-y-2 active:shadow-none transition-all disabled:translate-y-0"
                  >
                    Поиграем! 🚀
                  </button>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="content"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-6xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center gap-6 mb-16 mt-8 justify-center">
                <motion.img 
                  src="/mascot-a.png" 
                  alt="Маскот Буковка А"
                  className="w-32 h-auto drop-shadow-2xl z-20 cursor-pointer"
                  animate={{ y: [0, -15, 0], rotate: [-2, 2, -2] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  whileHover={{ scale: 1.15, rotate: 5, transition: { duration: 0.2 } }}
                />
                <div className="bg-white py-4 px-8 rounded-3xl rounded-tl-none md:rounded-tl-3xl md:rounded-l-none shadow border-2 border-orange-100 relative">
                   <div className="absolute w-4 h-4 bg-white border-b-2 border-l-2 border-orange-100 transform -rotate-45 -top-2 left-8 md:top-8 md:-left-2 z-0 hidden md:block"></div>
                   <h2 className="text-2xl md:text-3xl font-bold text-teal-800 relative z-10">
                     {renderGreeting()}
                   </h2>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {activeSection === 'hub' && (
                  <motion.div
                    key="hub"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-w-5xl mx-auto px-4 mt-8 pb-20"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <motion.div 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveSection('games')}
                        className="bg-white rounded-[32px] p-0 shadow-xl cursor-pointer border-4 border-indigo-400 flex flex-col items-center justify-center text-center aspect-square md:aspect-auto md:min-h-[300px] relative overflow-hidden group"
                      >
                        <div className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('/game/gamescard.jpeg')" }}>
                        </div>
                      </motion.div>

                      <motion.div 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveSection('cartoons')}
                        className="bg-white rounded-[32px] p-0 shadow-xl cursor-pointer border-4 border-rose-400 flex flex-col items-center justify-center text-center aspect-square md:aspect-auto md:min-h-[300px] relative overflow-hidden group"
                      >
                        <div className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('/game/multcard.jpeg')" }}>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveSection('warmups')}
                        className="bg-white rounded-[32px] p-0 shadow-xl cursor-pointer border-4 border-emerald-400 flex flex-col items-center justify-center text-center aspect-square md:aspect-auto md:min-h-[300px] relative overflow-hidden group"
                      >
                        <div className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('/game/razminkacard.jpeg')" }}>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {activeSection === 'games' && (
                  <motion.div
                    key="games"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="w-full pb-20"
                  >
                    <button onClick={() => setActiveSection('hub')} className="mb-6 bg-white/80 hover:bg-white px-6 py-3 rounded-full font-bold text-indigo-600 shadow-md transition-all active:scale-95 inline-flex items-center gap-2">
                       <span>⬅️</span> Назад в меню
                    </button>
                    <div className="bg-white/80 backdrop-blur-md rounded-[40px] overflow-hidden border border-white shadow-xl">
                      <Playworld childName={childName} onPlayGame={setActiveGame} hideHeader />
                    </div>
                  </motion.div>
                )}

                {activeSection === 'cartoons' && (
                  <motion.div
                    key="cartoons"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="w-full pb-20"
                  >
                    <button onClick={() => setActiveSection('hub')} className="mb-6 bg-white/80 hover:bg-white px-6 py-3 rounded-full font-bold text-rose-600 shadow-md transition-all active:scale-95 inline-flex items-center gap-2">
                      <span>⬅️</span> Назад в меню
                    </button>
                    <div className="bg-white/80 backdrop-blur-md rounded-[40px] overflow-hidden border border-white shadow-xl">
                      <Videos childName={childName} category="cartoons" />
                    </div>
                  </motion.div>
                )}

                {activeSection === 'warmups' && (
                  <motion.div
                    key="warmups"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="w-full pb-20"
                  >
                    <button onClick={() => setActiveSection('hub')} className="mb-6 bg-white/80 hover:bg-white px-6 py-3 rounded-full font-bold text-emerald-600 shadow-md transition-all active:scale-95 inline-flex items-center gap-2">
                      <span>⬅️</span> Назад в меню
                    </button>
                    <div className="bg-white/80 backdrop-blur-md rounded-[40px] overflow-hidden border border-white shadow-xl">
                      <Videos childName={childName} category="warmups" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Modal 
        isOpen={activeGame !== null} 
        onClose={() => setActiveGame(null)}
        title={null}
        maxWidth="max-w-none"
        className="bg-transparent"
      >
        {renderGame()}
      </Modal>
    </div>
  );
}