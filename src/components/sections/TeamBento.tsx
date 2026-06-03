import { motion } from 'motion/react';

export default function TeamBento() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="team" className="py-20 px-5 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-fredoka text-[clamp(32px,5vw,48px)] font-bold text-teal-800 leading-[1.1] mb-4">
            Наша команда
          </h2>
          <p className="text-[18px] md:text-[20px] text-teal-700 font-medium">
            Специалисты, которые с любовью относятся к своему делу
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1: md:col-span-2 - Flex-row */}
          <motion.div variants={item} className="md:col-span-2 bg-[#F7F2EC] rounded-3xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-full bg-white shadow-inner flex items-center justify-center text-5xl border-4 border-white/50 overflow-hidden">
               <img src="/nadya.jpeg" alt="Надежда Лебедева" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col text-center sm:text-left h-full justify-center">
              <h3 className="font-fredoka text-2xl font-bold text-teal-800 mb-1">Надежда Лебедева</h3>
              <p className="font-bold text-orange-500 mb-3">Основатель студии, логопед</p>
              <p className="italic text-teal-700 mb-4 text-lg">«Речь и таланты детей расцветают через творчество»</p>
              <p className="text-sm text-teal-600/80 font-medium leading-tight">Образование:<br/>УрГПУ (дефектология, логопедия), логопедический массаж.</p>
            </div>
          </motion.div>

          {/* Card 2: md:col-span-1 - Vertical */}
          <motion.div variants={item} className="md:col-span-1 bg-[#F7F2EC] rounded-3xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all flex flex-col items-center text-center">
            <div className="w-28 h-28 shrink-0 rounded-full bg-white shadow-inner flex items-center justify-center text-4xl border-4 border-white/50 mb-4 overflow-hidden">
              <img src="/nadezda.jpeg" alt="Надежда Гурская" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-fredoka text-xl font-bold text-teal-800 mb-1">Надежда Гурская</h3>
            <p className="font-bold text-orange-500 text-sm mb-3">Логопед</p>
            <p className="italic text-teal-700 mb-4 flex-1">«Терпение и труд всё перетрут»</p>
            <p className="text-xs text-teal-600/80 font-medium">Образование:<br/>УрГПУ (логопедия).</p>
          </motion.div>

          {/* Card 3: md:col-span-1 - Vertical */}
          <motion.div variants={item} className="md:col-span-1 bg-[#F7F2EC] rounded-3xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all flex flex-col items-center text-center">
            <div className="w-28 h-28 shrink-0 rounded-full bg-white shadow-inner flex items-center justify-center text-4xl border-4 border-white/50 mb-4 overflow-hidden">
               <img src="/goncharuk.jpeg" alt="Анна Гончарук" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-fredoka text-xl font-bold text-teal-800 mb-1">Анна Гончарук</h3>
            <p className="font-bold text-orange-500 text-sm mb-3">Логопед-дефектолог</p>
            <p className="italic text-teal-700 mb-4 flex-1">«Говорите правильно — достигайте большего»</p>
            <p className="text-xs text-teal-600/80 font-medium">Образование:<br/>УрГПУ, зондовый массаж при дизартрии.</p>
          </motion.div>

          {/* Card 4: md:col-span-2 - Flex-row */}
          <motion.div variants={item} className="md:col-span-2 bg-[#F7F2EC] rounded-3xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-full bg-white shadow-inner flex items-center justify-center text-5xl border-4 border-white/50 overflow-hidden">
              <img src="/chirkovskaya.jpeg" alt="Полина Чирковская" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col text-center sm:text-left h-full justify-center">
              <h3 className="font-fredoka text-2xl font-bold text-teal-800 mb-1">Полина Чирковская</h3>
              <p className="font-bold text-orange-500 mb-3">Специалист по раннему развитию</p>
              <p className="italic text-teal-700 mb-4 text-lg">«Каждый ребёнок — уникальный мир, требующий чуткого сердца»</p>
              <p className="text-sm text-teal-600/80 font-medium leading-tight">Образование:<br/>Современные методики развития детей раннего возраста.</p>
            </div>
          </motion.div>

          {/* Card 5: md:col-span-2 - Flex-row */}
          <motion.div variants={item} className="md:col-span-2 bg-[#F7F2EC] rounded-3xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-full bg-white shadow-inner flex items-center justify-center text-5xl border-4 border-white/50 overflow-hidden">
              <img src="/solovieva.jpeg" alt="Анастасия Соловьёва" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col text-center sm:text-left h-full justify-center">
              <h3 className="font-fredoka text-2xl font-bold text-teal-800 mb-1">Анастасия Соловьёва</h3>
              <p className="font-bold text-orange-500 mb-3">Педагог по английскому языку</p>
              <p className="italic text-teal-700 mb-4 text-lg">«Каждый ученик может больше, чем сам о себе думает»</p>
              <p className="text-sm text-teal-600/80 font-medium leading-tight">Образование:<br/>УрФУ им. Б.Н. Ельцина.</p>
            </div>
          </motion.div>

          {/* Card 6: md:col-span-1 - Vertical */}
          <motion.div variants={item} className="md:col-span-1 bg-[#F7F2EC] rounded-3xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all flex flex-col items-center text-center">
            <div className="w-28 h-28 shrink-0 rounded-full bg-white shadow-inner flex items-center justify-center text-4xl border-4 border-white/50 mb-4 overflow-hidden">
               <img src="/yugova.jpeg" alt="Наталья Югова" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-fredoka text-xl font-bold text-teal-800 mb-1">Наталья Югова</h3>
            <p className="font-bold text-orange-500 text-sm mb-3">Педагог по рисованию</p>
            <p className="italic text-teal-700 mb-4 flex-1">«Этому миру нужно больше художников»</p>
            <p className="text-xs text-teal-600/80 font-medium">Образование:<br/>Художественная школа «Два-ТриТона».</p>
          </motion.div>

          {/* Card 7: md:col-span-3 */}
          <motion.div variants={item} className="md:col-span-3 bg-teal-600 rounded-3xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all text-center flex items-center justify-center min-h-[100px]">
             <p className="text-white font-bold text-lg md:text-xl">
               Все специалисты проходят строгий отбор и работают по единой игровой методике АРТ ЛОГОС
             </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}