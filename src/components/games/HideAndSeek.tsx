import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

const ANIMALS = [
  { id: "cow", img: "/game/cow.png", audioPath: "/sound/cow.mp3", audioPath2: "/sound/cow-2.mp3" },
  { id: "dog", img: "/game/dog.png", audioPath: "/sound/Dog.mp3", audioPath2: "/sound/dog-2.mp3" },
  { id: "cat", img: "/game/cat.png", audioPath: "/sound/cat.mp3", audioPath2: "/sound/cat-2.mp3" },
  { id: "duck", img: "/game/duck.png", audioPath: "/sound/duck.mp3", audioPath2: "/sound/duck-2.mp3" },
  { id: "frog", img: "/game/frog.png", audioPath: "/sound/frog.mp3", audioPath2: "/sound/frog-2.mp3" },
  { id: "pig", img: "/game/pig.png", audioPath: "/sound/pig.mp3", audioPath2: "/sound/pig-2.mp3" },
  { id: "tiger", img: "/game/tiger.png", audioPath: "/sound/tiger.mp3", audioPath2: "/sound/tiger-2.mp3" },
];

export default function HideAndSeek() {
  const [gameState, setGameState] = useState<'start' | 'idle' | 'asking' | 'revealed' | 'done'>('start');
  const [currentAnimal, setCurrentAnimal] = useState(() => ANIMALS[Math.floor(Math.random() * ANIMALS.length)]);
  const activeAudio = useRef<HTMLAudioElement | null>(null);
  const isSequenceTriggered = useRef(false);

  useEffect(() => {
    return () => {
      if (activeAudio.current) {
        activeAudio.current.pause();
        activeAudio.current.currentTime = 0;
      }
    };
  }, []);

  const playIntro = () => {
    setGameState('asking');
    isSequenceTriggered.current = false;
    
    try {
      if (activeAudio.current) {
        activeAudio.current.pause();
        activeAudio.current.currentTime = 0;
      }
      
      const introAudio = new Audio("/sound/whos-there.mp3");
      activeAudio.current = introAudio;
      
      introAudio.onended = () => {
        setGameState(prev => prev === 'asking' ? 'idle' : prev);
      };
      
      introAudio.play().catch((e) => {
        console.warn('Intro audio error:', e);
        setGameState('idle');
      });
    } catch(e) {
      setGameState('idle');
    }
  };

  const handleStartGame = () => {
    playIntro();
  };

  const triggerRevealSequence = () => {
    if (isSequenceTriggered.current) return;
    isSequenceTriggered.current = true;
    
    console.log("🚀 Облако улетает!");
    setGameState('revealed'); 

    if (activeAudio.current) {
      activeAudio.current.pause();
      activeAudio.current.currentTime = 0;
    }

    const animalAudio = new Audio(currentAnimal.audioPath);
    activeAudio.current = animalAudio;
    
    // Вынесли запуск второго звука в отдельную функцию для надежности
    const playNameAudio = () => {
      setTimeout(() => {
        const nameAudio = new Audio(currentAnimal.audioPath2);
        activeAudio.current = nameAudio;
        
        nameAudio.onended = () => {
          console.log("✅ Игра завершена, можно тапать на животное");
          setGameState('done'); 
        };

        // Если сломался второй звук, все равно разрешаем сброс игры
        nameAudio.play().catch((e) => {
          console.warn('Ошибка названия:', e);
          setGameState('done'); 
        });
      }, 500);
    };

    animalAudio.onended = playNameAudio;

    // Если сломался первый звук, принудительно переходим ко второму
    animalAudio.play().catch((e) => {
      console.warn('Ошибка звука животного:', e);
      playNameAudio(); 
    });
  };

  const handleCloudClick = () => {
    console.log("👆 Клик по облаку, статус:", gameState);
    if (gameState !== 'idle' && gameState !== 'asking') return;
    
    // Если вопрос еще играет, мы его прервем и запустим раскрытие
    triggerRevealSequence();
  };

  const handleReset = () => {
    if (gameState !== 'done') return;

    if (activeAudio.current) {
      activeAudio.current.pause();
      activeAudio.current.currentTime = 0;
    }

    let newAnimal = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
    while (newAnimal.id === currentAnimal.id) {
      newAnimal = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
    }
    setCurrentAnimal(newAnimal);
    console.log("🔄 Игра сброшена");
    playIntro();
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-blue-50 relative overflow-hidden rounded-3xl touch-manipulation p-4">
      {gameState === 'start' && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-blue-50/80 backdrop-blur-sm">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStartGame}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-fredoka text-3xl font-bold py-4 px-10 rounded-full shadow-xl"
          >
            Начать игру 🎮
          </motion.button>
        </div>
      )}

      <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80">
        
        {/* Животное */}
        <motion.div 
          className={`absolute z-10 w-full h-full flex items-center justify-center pt-8 ${gameState === 'done' ? 'cursor-pointer' : ''}`}
          onClick={gameState === 'done' ? handleReset : undefined}
          initial={{ scale: 0.8 }}
          animate={
            gameState === 'revealed' ? { scale: [0.8, 1.2, 1.1], transition: { duration: 0.5 } } : 
            gameState === 'done' ? { scale: [1.1, 1.15, 1.1], transition: { repeat: Infinity, duration: 1.5 } } : 
            { scale: 0.8, transition: { type: 'spring', duration: 0.5 } }
          }
        >
          <img 
            src={currentAnimal.img} 
            alt="hidden character" 
            className="w-56 h-56 md:w-72 md:h-72 object-contain drop-shadow-md select-none" 
            draggable={false}
          />
        </motion.div>

        {/* Облако */}
        <motion.div
          onClick={handleCloudClick}
          initial={{ y: 0, opacity: 1 }}
          animate={{ 
            y: (gameState === 'revealed' || gameState === 'done') ? -800 : 0,
            opacity: (gameState === 'revealed' || gameState === 'done') ? 0 : 1
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          // ИСПРАВЛЕНИЕ: разрешаем клик, если статус idle ИЛИ asking
          className={`absolute z-20 flex items-center justify-center w-full h-full pb-10 ${
            (gameState !== 'idle' && gameState !== 'asking') ? "pointer-events-none" : "cursor-pointer"
          }`}
        >
          <motion.div
            animate={
              gameState === 'asking' 
                ? { scale: [1, 1.05, 0.95, 1] } 
                : { scale: 1 }
            }
            transition={
              gameState === 'asking' 
                ? { repeat: Infinity, duration: 0.6 } 
                : { duration: 0.2 }
            }
            whileTap={(gameState === 'idle' || gameState === 'asking') ? { scale: 0.95 } : undefined}
            className="w-full h-full flex items-center justify-center"
          >
            <img 
              src="/game/cloud.png" 
              alt="облако"
              draggable={false} 
              className="w-[200%] h-[200%] md:w-[240%] md:h-[240%] max-w-none object-contain select-none drop-shadow-2xl translate-y-8"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Текст внизу */}
      <div className="h-24 mt-8 flex flex-col items-center justify-center z-30 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className={`font-fredoka text-2xl md:text-3xl font-bold text-blue-400 ${gameState === 'idle' || gameState === 'start' || gameState === 'done' ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        >
          {gameState === 'done' ? 'Тапни на животное 👆' : 'Кто там прячется?'}
        </motion.div>
      </div>
    </div>
  );
}