import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const FOODS = ['🍎', '🍌', '🍓', '🥕', '🧀'];

export default function FeedMe() {
  const [score, setScore] = useState(0);
  const [isEating, setIsEating] = useState(false);
  const [foodIndex, setFoodIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const handleFeed = () => {
    if (isEating || showConfetti) return;
    
    setIsEating(true);
    
    setTimeout(() => {
      setIsEating(false);
      setScore(s => {
        const next = s + 1;
        if (next >= 5) {
          setShowConfetti(true);
          setTimeout(() => {
            setShowConfetti(false);
            setScore(0);
          }, 5000);
          return 5;
        }
        return next;
      });
      setFoodIndex(prev => (prev + 1) % FOODS.length);
    }, 800); // the duration of the eating animation
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-between py-10 bg-orange-50 relative overflow-hidden rounded-3xl selection:bg-transparent touch-manipulation">
      {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={300} />}
      
      {/* Top Stars */}
      <div className="flex gap-2 z-10 pt-4">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`text-5xl ${i < score ? 'text-yellow-400 drop-shadow-md' : 'text-gray-300 grayscale opacity-50'}`}
          >
            ⭐
          </motion.div>
        ))}
      </div>

      {/* Center Character */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1">
        <AnimatePresence>
          {isEating && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute -top-16 bg-white text-orange-600 font-black text-3xl md:text-4xl py-3 px-8 rounded-3xl rounded-br-none shadow-xl border-4 border-orange-200 z-20 whitespace-nowrap"
            >
              АМ-АМ!
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div
          animate={isEating ? { scale: [1, 1.15, 0.9, 1.1, 1], y: [0, -10, 5, -5, 0] } : { scale: 1, y: 0 }}
          transition={{ duration: 0.5, repeat: isEating ? 1 : 0 }}
          className="text-[140px] md:text-[180px] drop-shadow-2xl select-none leading-none"
        >
          🐻
        </motion.div>
      </div>

      {/* Bottom Food */}
      <div className="relative z-10 h-40 w-full flex justify-center items-center pb-8">
        {!showConfetti && (
          <motion.div
            key={foodIndex}
            onClick={handleFeed}
            animate={
              isEating 
                ? { y: -250, scale: 0, opacity: 0, rotate: rotateForFood(foodIndex) } 
                : { y: [0, -20, 0] }
            }
            transition={
              isEating 
                ? { duration: 0.6, ease: "easeIn" } 
                : { repeat: Infinity, duration: 2, ease: "easeInOut" }
            }
            className="text-[100px] md:text-[120px] cursor-pointer hover:drop-shadow-2xl select-none drop-shadow-lg active:scale-95 transition-transform"
          >
            {FOODS[foodIndex]}
          </motion.div>
        )}
        
        {showConfetti && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-8 font-fredoka text-2xl text-orange-600 font-bold bg-white/80 px-6 py-3 rounded-full shadow-sm"
          >
            Ура! Мишка сыт! 🎉
          </motion.div>
        )}
      </div>
    </div>
  );
}

function rotateForFood(index: number) {
  return [15, -15, 20, -10, 25][index % 5];
}
