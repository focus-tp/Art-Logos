import React, { useState } from 'react';

const NAMING_ITEMS = [
  {e:'🍎',n:'Яблоко'},{e:'🚗',n:'Машина'},{e:'🌳',n:'Дерево'},{e:'🏠',n:'Дом'},
  {e:'🌸',n:'Цветок'},{e:'🐟',n:'Рыбка'},{e:'🌙',n:'Луна'},{e:'☀️',n:'Солнце'},
  {e:'✈️',n:'Самолёт'},{e:'🎈',n:'Шарик'},{e:'🍕',n:'Пицца'},{e:'🐢',n:'Черепашка'},
];

export default function NamingGame() {
  const [score, setScore] = useState(0);
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [shuffled, setShuffled] = useState(() => [...NAMING_ITEMS].sort(() => Math.random() - 0.5));
  const [finished, setFinished] = useState(false);

  const startOver = () => {
    setShuffled([...NAMING_ITEMS].sort(() => Math.random() - 0.5));
    setScore(0);
    setIdx(0);
    setRevealed(false);
    setFinished(false);
  };

  const handleNext = (correct: boolean) => {
    if (correct) setScore(s => s + 1);
    if (idx + 1 >= shuffled.length) {
      setFinished(true);
    } else {
      setIdx(i => i + 1);
      setRevealed(false);
    }
  };

  if (finished) {
    return (
      <div className="text-center py-10 px-5">
        <div className="text-[81px] mb-5">🎉</div>
        <div className="font-fredoka text-[33px] font-bold text-em mb-3">Молодец!</div>
        <div className="text-[19px] text-tx-m mb-7">Ты назвал {score} из {shuffled.length} слов правильно!</div>
        <button onClick={startOver} className="bg-em text-white rounded-full py-3 px-8 font-bold hover:bg-em-l transition-colors">
          🔄 Ещё раз
        </button>
      </div>
    );
  }

  const currentItem = shuffled[idx];

  return (
    <div className="w-full h-full bg-[#f8f6f0] p-4 flex flex-col pt-12 items-center">
      <div className="flex justify-center gap-8 mb-6">
        <div className="text-center">
          <div className="font-fredoka text-[29px] font-bold text-em leading-none">{score}</div>
          <div className="text-[13px] font-semibold text-tx-m">Очков</div>
        </div>
        <div className="text-center">
          <div className="font-fredoka text-[29px] font-bold text-em leading-none">{shuffled.length - idx}</div>
          <div className="text-[13px] font-semibold text-tx-m">Осталось</div>
        </div>
      </div>

      <div 
        onClick={() => setRevealed(true)}
        className="bg-em-p rounded-[24px] p-10 text-center cursor-pointer transition-all mb-6 hover:shadow-card hover:-translate-y-1"
      >
        <div className="text-[91px] mb-3 leading-none select-none">{currentItem.e}</div>
        {!revealed ? (
          <div className="text-[21px] text-em font-bold font-fredoka">Нажми, чтобы узнать!</div>
        ) : (
          <div className="text-[33px] text-em font-bold font-fredoka">{currentItem.n}</div>
        )}
      </div>

      <div className="flex gap-3 justify-center">
        <button 
          onClick={() => handleNext(false)}
          className="bg-em-p text-em rounded-full py-3 px-6 font-bold hover:bg-em/10 transition-colors"
        >
          😅 Не знаю
        </button>
        <button 
          onClick={() => handleNext(true)}
          className="bg-em text-white rounded-full py-3 px-8 font-bold hover:bg-em-l transition-colors"
        >
          ✅ Знаю!
        </button>
      </div>
    </div>
  );
}
