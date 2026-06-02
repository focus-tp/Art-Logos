import { Section, Reveal } from '../ui/Section';
import { GAMES } from '../../data';

export default function Playworld({ childName, onPlayGame, hideHeader }: { childName?: string, onPlayGame?: (id: string) => void, hideHeader?: boolean }) {

  return (
    <Section id="playworld" className="bg-gradient-to-b from-cream to-sage-l text-center relative overflow-hidden">
      
      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[120px] h-[120px] rounded-full bg-em/10 top-[10%] left-[5%] animate-[pulse_7s_ease-in-out_infinite]" />
        <div className="absolute w-[80px] h-[80px] rounded-full bg-peach/40 top-[20%] right-[10%] animate-[pulse_9s_ease-in-out_infinite_reverse]" />
        <div className="absolute w-[60px] h-[60px] rounded-full bg-sage/50 bottom-[25%] left-[15%] animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute w-[100px] h-[100px] rounded-full bg-em/10 bottom-[15%] right-[8%] animate-[pulse_6s_ease-in-out_infinite_reverse]" />
      </div>

      {!hideHeader && (
        <Reveal className="relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-em-p text-em rounded-full py-1.5 px-4 text-[12px] font-extrabold tracking-wide uppercase mb-5">
            ✦ Игровой мир
          </div>
          <h2 className="font-fredoka text-[clamp(30px,4vw,46px)] font-bold leading-[1.15] mb-4">
            Мини-игры для {childName ? childName : 'малышей'}
          </h2>
          <p className="text-[18px] text-tx-m font-medium leading-[1.6] max-w-[560px] mx-auto">
            Нажмите на игру — и начинайте прямо сейчас!
          </p>
        </Reveal>
      )}
      
      {hideHeader && (
        <Reveal className="relative z-10 mb-8 mt-4 text-center">
          <h2 className="font-fredoka text-4xl md:text-5xl font-bold mb-4 text-indigo-600">
             🎮 Выбирай игру, {childName || 'малыш'}!
          </h2>
        </Reveal>
      )}

      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ${hideHeader ? 'mt-4' : 'mt-14'} relative z-10`}>
        {GAMES.map((gm, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div 
              onClick={() => onPlayGame && gm.id && onPlayGame(gm.id)}
              className={`bg-white rounded-[28px] p-9 text-center shadow-[0_8px_32px_rgba(0,0,0,.06)] transition-all duration-300 ${gm.id ? 'cursor-pointer hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(15,139,109,.2)]' : 'cursor-default opacity-80'}`}
            >
              <span className="text-[52px] block mb-4" style={{ animation: `bounce 3s infinite ease-in-out ${i*0.2}s` }}>
                {gm.e}
              </span>
              <h3 className="font-fredoka text-[20px] font-semibold mb-2">{gm.title}</h3>
              <p className="text-[13px] text-tx-m leading-[1.5] mb-4">{gm.desc}</p>
              
              <span className={`inline-block rounded-full py-1.5 px-4 text-[12px] font-bold ${gm.badge === 'go' ? 'bg-peach-l text-[#C47A4A]' : 'bg-em-p text-em'}`}>
                {gm.badgeTxt}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
