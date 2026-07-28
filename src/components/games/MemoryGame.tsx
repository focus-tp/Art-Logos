import React, { useState } from 'react';
import { motion } from 'motion/react';

const MEM_PAIRS = ['🐱','🐶','🐸','🦊','🐨','🐼','🦁','🐯'];

export default function MemoryGame() {
  const [cards, setCards] = useState<string[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [started, setStarted] = useState(false);

  const initGame = () => {
    setCards([...MEM_PAIRS, ...MEM_PAIRS].sort(() => Math.random() - 0.5));
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setStarted(true);
  };

  const handleFlip = (i: number) => {
    if (flipped.length === 2 || flipped.includes(i) || matched.includes(i)) return;
    
    const newFlipped = [...flipped, i];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      const [a, b] = newFlipped;
      if (cards[a] === cards[b]) {
        setMatched([...matched, a, b]);
        setFlipped([]);
      } else {
        setTimeout(() => {
          setFlipped([]);
        }, 900);
      }
    }
  };

  if (!started) {
    return (
      <div className="text-center py-10">
        <p className="text-tx-m mb-6 text-lg">Тренируем память и словарный запас!</p>
        <button onClick={initGame} className="bg-em text-white rounded-full py-3 px-8 font-bold hover:bg-em-l transition-colors focus:outline-none">
          Начать игру
        </button>
      </div>
    );
  }

  const isWon = matched.length === cards.length;

  return (
    <div className="w-full h-full bg-[#f8f6f0] p-4 flex flex-col pt-12 items-center">
      <style>{`
        .safari-flip-fix, .safari-flip-fix * {
          -webkit-backface-visibility: hidden !important;
          backface-visibility: hidden !important;
        }
      `}</style>
      <div className="flex justify-center gap-8 mb-6">
        <div className="text-center">
          <div className="font-fredoka text-[29px] font-bold text-em leading-none">{moves}</div>
          <div className="text-[13px] font-semibold text-tx-m">Ходов</div>
        </div>
        <div className="text-center">
          <div className="font-fredoka text-[29px] font-bold text-em leading-none">{matched.length / 2}</div>
          <div className="text-[13px] font-semibold text-tx-m">Пар найдено</div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-6 perspective-[1000px]">
        {cards.map((c, i) => {
          const isFlipped = flipped.includes(i) || matched.includes(i);
          const isMatched = matched.includes(i);
          return (
            <div 
              key={i} 
              onClick={() => handleFlip(i)}
              className="aspect-square relative cursor-pointer group rounded-2xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div 
                className="absolute inset-0 transition-all duration-300 ease-out" 
                style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
              >
                {/* Back (Cover) */}
                <motion.div 
                  className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center text-4xl shadow-[0_4px_16px_rgba(0,0,0,.08)] safari-flip-fix"
                  style={{ transform: 'rotateY(0deg) translateZ(1px)', WebkitBackfaceVisibility: 'hidden' }}
                  animate={{ opacity: isFlipped ? 0 : 1 }}
                  transition={{ duration: 0.1, delay: isFlipped ? 0.05 : 0.1 }}
                >
                  <span className="opacity-30 text-2xl">⭐</span>
                </motion.div>
                {/* Front (Content) */}
                <motion.div 
                  className={`absolute inset-0 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl safari-flip-fix ${isMatched ? 'bg-em-p text-em' : 'bg-em text-white'}`}
                  style={{ transform: 'rotateY(180deg) translateZ(1px)', WebkitBackfaceVisibility: 'hidden' }}
                  animate={{ opacity: isFlipped ? 1 : 0 }}
                  transition={{ duration: 0.1, delay: isFlipped ? 0.1 : 0.05 }}
                >
                  {c}
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </div>

      <div className="text-center font-fredoka text-[23px] font-semibold text-em min-h-[30px] mb-4">
        {isWon ? `🎉 Ура! Все пары найдены за ${moves} ходов!` : "Найди все пары! 🎮"}
      </div>
      
      <div className="flex justify-center">
        <button onClick={initGame} className="bg-em text-white rounded-full py-3 px-8 font-bold hover:bg-em-l transition-colors">
          🔄 Новая игра
        </button>
      </div>
    </div>
  );
}
