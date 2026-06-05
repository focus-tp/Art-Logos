import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const ANIMALS = [
  { id: "cow", img: "/game/cow.png", soundText: "МУ-У!", color: "#FDE68A", audioPath: "/sound/cow.mp3" },
  { id: "dog", img: "/game/dog.png", soundText: "ГАВ-ГАВ!", color: "#BFDBFE", audioPath: "/sound/Dog.mp3" },
  { id: "cat", img: "/game/cat.png", soundText: "МЯУ!", color: "#FBCFE8", audioPath: "/sound/cat.mp3" },
  {
    id: "duck",
    img: "/game/duck.png",
    soundText: "КРЯ-КРЯ!",
    color: "#FEF08A",
    audioPath: "/sound/duck.mp3"
  },
  {
    id: "frog",
    img: "/game/frog.png",
    soundText: "КВА-КВА!",
    color: "#BBF7D0",
    audioPath: "/sound/frog.mp3"
  },
  { id: "pig", img: "/game/pig.png", soundText: "ХРЮ-ХРЮ!", color: "#FFCFD2", audioPath: "/sound/pig.mp3" },
  {
    id: "tiger",
    img: "/game/tiger.png",
    soundText: "Р-Р-Р!",
    color: "#FDBA74",
    audioPath: "/sound/tiger.mp3"
  },
];

const MASCOT_PHRASES = ["Молодец!", "Ура!", "Отлично!", "Здорово!", "Ещё!"];

const playAnimalSound = (path: string) => {
  const audio = new Audio(path);
  audio.play().catch((error) => console.log('Ошибка воспроизведения:', error));
};

const BubbleTrack: React.FC<{
  initialDelay: number;
  onPop: (animal: any, x: number, y: number) => void;
}> = ({ initialDelay, onPop }) => {
  const [key, setKey] = useState(0);
  const animal = React.useMemo(
    () => ANIMALS[Math.floor(Math.random() * ANIMALS.length)],
    [key],
  );
  const duration = React.useMemo(() => 8 + Math.random() * 7, [key]);
  const xPercent = React.useMemo(() => 15 + Math.random() * 70, [key]);
  const delay = React.useMemo(() => (key === 0 ? initialDelay : 0), [key]);

  const handlePop = (e: React.PointerEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    onPop(animal, rect.left + rect.width / 2, rect.top + rect.height / 2);
    playAnimalSound(animal.audioPath);
    setKey((k) => k + 1);
  };

  return (
    <div
      className="absolute top-0 bottom-0 w-40 pointer-events-none"
      style={{ left: `calc(${xPercent}% - 80px)` }}
    >
      <AnimatePresence>
        <motion.div
          key={key}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{ y: "-20vh", opacity: 1 }}
          transition={{ duration, delay, ease: "linear" }}
          onAnimationComplete={() => setKey((k) => k + 1)}
          onPointerDown={handlePop}
          className="absolute left-4 md:left-0 cursor-pointer flex items-center justify-center select-none w-32 h-32 md:w-40 md:h-40 pointer-events-auto"
          style={{
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(200,240,255,0.6))",
            boxShadow:
              "inset 0 0 20px rgba(255,255,255,1), 0 4px 10px rgba(0,0,0,0.1), inset -5px -5px 15px rgba(0,0,0,0.1)",
            border: "2px solid rgba(255,255,255,0.8)",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={animal.img}
            alt="animal"
            className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-md z-10"
          />
          <div className="absolute top-4 left-6 w-5 h-5 rounded-full bg-white opacity-70 z-20"></div>
          <div className="absolute top-10 left-4 w-3 h-3 rounded-full bg-white opacity-50 z-20"></div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default function BubblePop() {
  const { width, height } = useWindowSize();
  const [stars, setStars] = useState(0);
  const [popEvents, setPopEvents] = useState<any[]>([]);
  const [heroBouncing, setHeroBouncing] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handlePop = useCallback(
    (animal: any, x: number, y: number) => {
      // If they were at 5, immediate drop to 1 (if they tap fast).
      // Otherwise add 1.
      const newStars = stars >= 5 ? 1 : stars + 1;
      setStars(newStars);

      const id = Date.now() + Math.random();
      setPopEvents((prev) => [...prev, { id, animal, x, y }]);
      setTimeout(() => {
        setPopEvents((prev) => prev.filter((p) => p.id !== id));
      }, 1500);

      setHeroBouncing(true);
      setTimeout(() => {
        setHeroBouncing(false);
      }, 1500);

      if (newStars === 5) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2500);
        // reset to 0 after 2 seconds to match confetti
        setTimeout(() => setStars((s) => (s === 5 ? 0 : s)), 2000);
      }
    },
    [stars],
  );

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden bg-sky-200">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[10%] text-white text-8xl opacity-80"
        >
          ☁️
        </motion.div>
        <motion.div
          animate={{ x: [0, -100, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute top-[25%] right-[20%] text-white text-7xl opacity-70"
        >
          ☁️
        </motion.div>
        <motion.div
          animate={{ x: [0, 80, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] left-[5%] text-white text-6xl opacity-60"
        >
          ☁️
        </motion.div>

        {/* Grass */}
        <div className="bg-green-400 h-24 absolute bottom-0 w-full rounded-t-[50%] scale-x-150"></div>

        {/* Butterflies */}
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-[15%] left-[20%] text-3xl"
        >
          🦋
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], x: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-[12%] right-[25%] text-3xl"
        >
          🦋
        </motion.div>
      </div>

      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={200}
        />
      )}

      {/* Hero at the top center */}
      <div className="absolute top-[3vh] left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center">
        <div className="relative">
          <motion.img
            src="/mascot-a.png"
            alt="Hero"
            className="w-24 h-auto drop-shadow-lg"
            animate={{ y: heroBouncing ? -15 : 0 }}
          />
        </div>

        {/* Stars Counter */}
        <div className="mt-4 flex gap-2 justify-center bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-sm">
          {[...Array(5)].map((_, i) => {
            const isActive = i < stars;
            return (
              <motion.div
                key={i}
                className="text-4xl"
                initial={false}
                animate={{
                  scale: isActive ? 1.2 : 0.8,
                  filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
                  opacity: isActive ? 1 : 0.4,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                ⭐
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bubble Tracks */}
      {[0, 2, 4].map((delay, i) => (
        <BubbleTrack key={i} initialDelay={delay} onPop={handlePop} />
      ))}

      {/* Pop Events */}
      <AnimatePresence>
        {popEvents.map((event) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2, transition: { duration: 0.3 } }}
            className="absolute z-40 pointer-events-none flex flex-col items-center justify-center font-fredoka font-bold"
            style={{
              left: Math.min(Math.max(event.x - 75, 20), width - 170),
              top: event.y - 75,
              width: 150,
              height: 150,
            }}
          >
            <div className="relative flex flex-col items-center">
              <img
                src={event.animal.img}
                alt="animal"
                className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
              />
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.5 }}
                animate={{ opacity: 1, y: -40, scale: 1 }}
                className="absolute -top-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:-right-16 bg-white text-orange-600 font-bold text-xl md:text-2xl py-1 px-4 rounded-2xl md:rounded-bl-none shadow-xl border-2 border-orange-200 whitespace-nowrap"
              >
                {event.animal.soundText}
              </motion.div>
              {/* Star sparks */}
              <motion.div
                animate={{ rotate: 180, scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 right-0 text-3xl"
              >
                ✨
              </motion.div>
              <motion.div
                animate={{ rotate: -180, scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-0 left-0 text-3xl"
              >
                ✨
              </motion.div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}