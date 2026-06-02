"use client";

import { useState } from "react";

const letters = [
  { letter: "А", sound: "А-а-а!" },
  { letter: "Б", sound: "Б-б-б!" },
  { letter: "В", sound: "В-в-в!" },
  { letter: "Г", sound: "Г-г-г!" },
];

export default function HappyLetters() {
  const [current, setCurrent] = useState(0);
  const [jumping, setJumping] = useState(false);
  const [happy, setHappy] = useState(false);

  const speakLetter = () => {
    const synth = window.speechSynthesis;

    const utterance = new SpeechSynthesisUtterance(
      letters[current].sound
    );

    utterance.lang = "ru-RU";
    utterance.rate = 0.8;
    utterance.pitch = 1.4;

    synth.cancel();
    synth.speak(utterance);

    setJumping(true);
    setHappy(true);

    setTimeout(() => {
      setJumping(false);
      setHappy(false);
    }, 700);
  };

  const nextLetter = () => {
    setCurrent((prev) => (prev + 1) % letters.length);
  };

  const prevLetter = () => {
    setCurrent((prev) =>
      prev === 0 ? letters.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-10 px-4">
      <div className="max-w-xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-blue-800 mb-2">
          Весёлые буквы
        </h2>

        <p className="text-gray-500 mb-8">
          Нажми на букву и послушай звук
        </p>

        <div
          onClick={speakLetter}
          className={`
            relative mx-auto
            w-72 h-72
            rounded-full
            bg-gradient-to-br from-yellow-200 to-orange-200
            flex items-center justify-center
            cursor-pointer
            select-none
            shadow-xl
            transition-transform
            ${jumping ? "-translate-y-4 scale-110" : ""}
          `}
        >
          {/* глаза */}
          <div className="absolute top-20 left-24 flex gap-10">
            <div
              className={`w-6 h-6 rounded-full bg-black ${
                happy ? "scale-125" : ""
              }`}
            />
            <div
              className={`w-6 h-6 rounded-full bg-black ${
                happy ? "scale-125" : ""
              }`}
            />
          </div>

          {/* рот */}
          <div
            className={`
              absolute top-36
              w-20 h-10
              border-b-4 border-black
              rounded-b-full
              ${happy ? "scale-125" : ""}
            `}
          />

          {/* буква */}
          <span className="text-[140px] font-black text-white drop-shadow-lg">
            {letters[current].letter}
          </span>
        </div>

        <p className="mt-6 text-lg font-semibold text-gray-700">
          Нажми на букву
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevLetter}
            className="px-6 py-3 rounded-xl bg-gray-200 hover:bg-gray-300"
          >
            ← Назад
          </button>

          <button
            onClick={nextLetter}
            className="px-6 py-3 rounded-xl bg-blue-700 text-white hover:bg-blue-800"
          >
            Вперёд →
          </button>
        </div>
      </div>
    </section>
  );
}
