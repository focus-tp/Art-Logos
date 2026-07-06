import { Section, Reveal } from '../ui/Section';
import { IconBrush, IconSand, IconPlay, IconMusic } from '../ui/Icons';

export default function About() {
  return (
    <Section id="about" className="bg-cream border-t border-sage-l/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        <Reveal>
          <div className="inline-flex items-center gap-1.5 bg-em-p text-em rounded-full py-1.5 px-4 text-[13px] font-extrabold tracking-wide uppercase mb-5">
            ✦ Философия центра АРТ-ЛОГОС
          </div>
          <h2 className="font-fredoka text-[clamp(30px,4vw,46px)] font-bold leading-[1.15] mb-4 tracking-[-0.5px]">
            Речь раскрывается<br/>через радость<br/>и творчество
          </h2>
          <p className="text-[19px] text-tx-m font-medium leading-[1.6] max-w-[560px]">
            Мы не просто учим звукам. Мы используем уникальные методики арт-терапии, которые снимают напряжение и помогают ребёнку заговорить естественно и с удовольствием.
          </p>
          
          <div className="bg-em text-white rounded-2xl p-7 mt-8 relative overflow-hidden">
            <div className="absolute font-fredoka text-[121px] font-bold -top-5 left-4 opacity-15 leading-none">"</div>
            <p className="relative z-10 text-[18px] font-semibold leading-[1.6]">
              Каждый ребёнок — уникальная вселенная. Ключ к её раскрытию лежит через искренний интерес, доверие и бережное искусство.
            </p>
            <div className="mt-3 text-[15px] opacity-75 font-semibold z-10 relative">
              — Надежда, основатель центра
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-4">
          <Reveal delay={0.1}>
            <div className="bg-white rounded-[20px] p-6 flex gap-5 items-center shadow-card hover:-translate-y-[3px] hover:shadow-card-hover transition-all">
              <div className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center shrink-0 bg-peach-l">
                <IconBrush className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-[18px] font-extrabold mb-1">Изо-терапия</h3>
                <p className="text-[15px] text-tx-m leading-[1.5]">Рисуем, лепим и развиваем мелкую моторику, которая напрямую связана с речевыми центрами мозга.</p>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="bg-white rounded-[20px] p-6 flex gap-5 items-center shadow-card hover:-translate-y-[3px] hover:shadow-card-hover transition-all">
              <div className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center shrink-0 bg-sage-l">
                <IconSand className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-[18px] font-extrabold mb-1">Песочная терапия</h3>
                <p className="text-[15px] text-tx-m leading-[1.5]">Игры с кинетическим и кварцевым песком снимают тревожность и помогают малышу расслабиться.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="bg-white rounded-[20px] p-6 flex gap-5 items-center shadow-card hover:-translate-y-[3px] hover:shadow-card-hover transition-all">
              <div className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center shrink-0 bg-blue-100">
                <IconPlay className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-[18px] font-extrabold mb-1">Игровая терапия</h3>
                <p className="text-[15px] text-tx-m leading-[1.5]">Специальные логопедические игры, где ребёнок — главный герой. Обучение без ощущения урока.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="bg-white rounded-[20px] p-6 flex gap-5 items-center shadow-card hover:-translate-y-[3px] hover:shadow-card-hover transition-all">
              <div className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center shrink-0 bg-em-p">
                <IconMusic className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-[18px] font-extrabold mb-1">Музыко-терапия</h3>
                <p className="text-[15px] text-tx-m leading-[1.5]">Развиваем фонематический слух, чувство ритма и правильное речевое дыхание через звуки и песни.</p>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </Section>
  );
}