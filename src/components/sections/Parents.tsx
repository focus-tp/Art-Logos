import React, { useState } from 'react';
import { Section, Reveal } from '../ui/Section';
import { Modal } from '../ui/Modal';
import { FAQS, REVIEWS } from '../../data';

export default function Parents() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Section id="parents" className="bg-cream">
      <Reveal className="mb-14">
        <div className="inline-flex items-center gap-1.5 bg-em-p text-em rounded-full py-1.5 px-4 text-[12px] font-extrabold tracking-wide uppercase mb-5">
          ✦ Для родителей
        </div>
        <h2 className="font-fredoka text-[clamp(30px,4vw,46px)] font-bold leading-[1.15]">
          Всё понятно<br/>с первого шага
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        <Reveal>
          <h3 className="font-fredoka text-[26px] font-bold mb-8">Как мы работаем</h3>
          <div className="flex flex-col">
            {[ 
              { title: 'Бесплатная консультация', desc: 'Рассказываете о ребёнке, мы слушаем и задаём важные вопросы. Без давления.' },
              { title: 'Диагностика речи', desc: 'В игровой форме оцениваем, где находится малыш, и что поможет двигаться вперёд.' },
              { title: 'Индивидуальный план', desc: 'Составляем маршрут специально для вашего ребёнка. Конкретно, понятно, честно.' },
              { title: 'Занятия и результат', desc: 'Регулярно сообщаем о прогрессе. Вы видите динамику и чувствуете, что всё идёт правильно.' }
            ].map((step, i, arr) => (
              <div key={i} className={`flex gap-5 relative ${i < arr.length - 1 ? 'pb-8' : ''}`}>
                {i < arr.length - 1 && (
                  <div className="absolute left-[24px] top-[50px] bottom-0 w-[2px] bg-sage-l" />
                )}
                <div className="w-12 h-12 rounded-full bg-em text-white font-fredoka text-[20px] font-bold flex items-center justify-center shrink-0 relative z-10 shadow-[0_4px_16px_rgba(15,139,109,.3)]">
                  {i + 1}
                </div>
                <div className="pt-2">
                  <h3 className="text-[17px] font-extrabold mb-1.5">{step.title}</h3>
                  <p className="text-[14px] text-tx-m leading-[1.6]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <h3 className="font-fredoka text-[26px] font-bold mb-8">Частые вопросы</h3>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-[14px] overflow-hidden shadow-card">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-5 py-4 text-[15px] font-bold flex justify-between items-center transition-colors hover:text-em"
                >
                  <span className="pr-4">{faq.q}</span>
                  <span className={`text-[18px] text-em transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                    ⌄
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="px-5 pb-5 pt-0 text-[14px] text-tx-m leading-[1.65]">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
        {REVIEWS.map((r, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="bg-white rounded-[20px] p-6 lg:p-7 shadow-card h-full flex flex-col justify-between">
               <div>
                  <div className="text-[18px] mb-3 leading-none">{r.stars}</div>
                  <p className="text-[15px] leading-[1.65] text-tx-m mb-5">{r.text}</p>
               </div>
               <div className="flex items-center gap-3">
                 <div>
                   <div className="text-[14px] font-extrabold">{r.name}</div>
                   <div className="text-[12px] text-tx-m">{r.age}</div>
                 </div>
               </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
