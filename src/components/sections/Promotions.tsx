import { Reveal } from '../ui/Section';

export default function Promotions() {
  return (
    <section id="promotions" className="py-20 px-5 md:px-10 max-w-7xl mx-auto">
      <Reveal>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-600 rounded-full py-1.5 px-4 text-[12px] font-extrabold tracking-wide uppercase mb-5">
            🎁 Специальные предложения
          </div>
          <h2 className="font-fredoka text-[clamp(28px,4vw,42px)] font-bold leading-[1.15] mb-4 text-tx">
            С чего начать знакомство с «АРТ-ЛОГОС»?
          </h2>
          <p className="text-[17px] text-tx-m max-w-[600px] mx-auto leading-[1.6]">
            Специальные предложения и скидки для новых учеников нашей студии в Академическом районе.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Reveal delay={0.1}>
          <div className="bg-white rounded-3xl p-8 shadow-card hover:-translate-y-1 hover:shadow-card-hover transition-all flex flex-col h-full border border-rose-100/50 relative overflow-hidden">
            <div className="absolute -top-2 -right-4 text-7xl opacity-20">🎉</div>
            <div className="w-14 h-14 bg-rose-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
              �
            </div>
            <h3 className="font-fredoka text-[22px] font-bold leading-[1.2] mb-3 text-tx">
              Первое занятие — 0₽
            </h3>
            <p className="text-tx-m text-[15px] leading-[1.6] mb-8 flex-1">
              Приходите на первое полноценное занятие совершенно бесплатно! Вы и ваш ребёнок познакомитесь с логопедом, поймёте его подход, а малыш погрузится в нашу уникальную развивающую среду. Без скрытых платежей — просто красивое начало большого пути!
            </p>
            <a 
              href="#cta"
              className="inline-flex justify-center items-center bg-rose-500 text-white rounded-xl py-3 px-6 text-[15px] font-bold hover:bg-rose-600 transition-colors w-full"
            >
              Записаться на занятие
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="bg-white rounded-3xl p-8 shadow-card hover:-translate-y-1 hover:shadow-card-hover transition-all flex flex-col h-full border border-blue-100">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
              🤖
            </div>
            <h3 className="font-fredoka text-[22px] font-bold leading-[1.2] mb-3 text-tx">
              Робототехника — пробный урок за 0 ₽
            </h3>
            <p className="text-tx-m text-[15px] leading-[1.6] mb-8 flex-1">
              Приглашаем маленьких инженеров на первое бесплатное занятие! Ребёнок сам соберёт своего первого робота, запустит моторчики и напишет первый код. Развиваем логику и мелкую моторику через творчество.
            </p>
            <a 
              href="#cta"
              className="inline-flex justify-center items-center bg-blue-500 text-white rounded-xl py-3 px-6 text-[15px] font-bold hover:bg-blue-600 transition-colors w-full"
            >
              Попробовать бесплатно
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="bg-white rounded-3xl p-8 shadow-card hover:-translate-y-1 hover:shadow-card-hover transition-all flex flex-col h-full border border-orange-100">
            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
              🎙️
            </div>
            <h3 className="font-fredoka text-[22px] font-bold leading-[1.2] mb-3 text-tx">
              Бесплатная диагностика речи
            </h3>
            <p className="text-tx-m text-[15px] leading-[1.6] mb-8 flex-1">
              Первая встреча с логопедом — полностью за наш счёт. Проверим звукопроизношение, артикуляционный аппарат и понимание речи в игровой форме. Вы получите честный разбор и пошаговый план развития речи вашего ребёнка.
            </p>
            <a 
              href="#cta"
              className="inline-flex justify-center items-center bg-orange-400 text-white rounded-xl py-3 px-6 text-[15px] font-bold hover:bg-orange-500 transition-colors w-full"
            >
              Записаться на диагностику
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
