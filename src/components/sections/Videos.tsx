import { useState } from 'react';
import { Section, Reveal } from '../ui/Section';
import { Modal } from '../ui/Modal';
import { VIDEOS, VCATS } from '../../data';

export default function Videos({ childName, category }: { childName?: string, category?: 'cartoons' | 'warmups' | 'all' }) {
  const [activeCat, setActiveCat] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<{ yt: string, title: string } | null>(null);

  // Determine which global categories to include based on the parent 'category' prop
  const allowedCategories = category === 'warmups' 
    ? ['logorhythm', 'breath', 'fingers']
    : category === 'cartoons'
    ? ['animals', 'emotions', 'sounds']
    : VCATS.map(c => c.id);

  // Filter the available tabs
  const availableTabs = VCATS.filter(cat => cat.id === 'all' || allowedCategories.includes(cat.id));

  // Initialize active cat if it's not present in availableTabs
  if (activeCat !== 'all' && !allowedCategories.includes(activeCat)) {
    setActiveCat('all');
  }

  const baseVideos = VIDEOS.filter(v => allowedCategories.includes(v.cat));
  
  const filteredVideos = activeCat === 'all' 
    ? baseVideos 
    : baseVideos.filter(v => v.cat === activeCat);

  return (
    <Section id="videos" className="bg-ww border-t border-sage-l/50">
      {category !== 'warmups' && category !== 'cartoons' && (
        <Reveal className="mb-14">
          <div className="inline-flex items-center gap-1.5 bg-em-p text-em rounded-full py-1.5 px-4 text-[13px] font-extrabold tracking-wide uppercase mb-5">
            ✦ Образовательные мультики
          </div>
          <h2 className="font-fredoka text-[clamp(30px,4vw,46px)] font-bold leading-[1.15] mb-4">
            Учимся говорить<br/>вместе с мультиками
          </h2>
          <p className="text-[19px] text-tx-m font-medium leading-[1.6] max-w-[560px]">
            Куратированный детский контент для развития речи. Нажмите — и смотрите!
          </p>
        </Reveal>
      )}
      {(category === 'warmups' || category === 'cartoons') && (
        <Reveal className="mb-8 text-center mt-4">
          <h2 className={`font-fredoka text-4xl md:text-5xl font-bold mb-4 ${category === 'warmups' ? 'text-emerald-600' : 'text-rose-600'}`}>
            {category === 'warmups' ? '🤸‍♀️ Полезные разминки' : '📺 Мультики'}
          </h2>
        </Reveal>
      )}

      <div className="flex gap-3 flex-wrap mb-9">
        {availableTabs.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCat(cat.id)}
            className={`border-2 rounded-full py-2 px-5 text-[15px] font-bold transition-all ${
              activeCat === cat.id 
                ? 'bg-em border-em text-white' 
                : 'bg-white border-tx/10 text-tx-m hover:bg-em hover:border-em hover:text-white'
            }`}
          >
            {cat.lbl}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredVideos.map((v, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div 
              onClick={() => setSelectedVideo({ yt: v.yt, title: v.title })}
              className="bg-white rounded-[20px] overflow-hidden shadow-card cursor-pointer hover:-translate-y-1 hover:shadow-card-hover transition-all group"
            >
              <div 
                className="aspect-video relative flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: v.bg }}
              >
                <span className="text-5xl">{v.e}</span>
                <div className="absolute inset-0 bg-transparent group-hover:bg-em/20 flex items-center justify-center transition-colors">
                  <div className="w-[54px] h-[54px] rounded-full bg-white flex items-center justify-center text-xl shadow-[0_4px_20px_rgba(0,0,0,.2)] scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                    ▶
                  </div>
                </div>
              </div>
              <div className="p-4 md:p-5">
                <div className="text-[12px] font-extrabold uppercase tracking-wide text-em mb-1.5">{v.catLbl}</div>
                <div className="text-[16px] font-bold leading-[1.4] mb-1.5 text-tx">{v.title}</div>
                <div className="text-[14px] text-tx-m">⏱ {v.dur}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Modal 
        isOpen={selectedVideo !== null} 
        onClose={() => setSelectedVideo(null)}
        title={selectedVideo?.title}
        maxWidth="max-w-4xl"
        className="bg-[#111] text-white overflow-hidden rounded-[20px]"
      >
        {selectedVideo && (
          <div className="aspect-video w-full bg-black">
            <iframe 
              src={`https://vkvideo.ru/video_ext.php?oid=-123456&id=${selectedVideo.yt}&hd=1&autoplay=1`} 
              title={selectedVideo.title}
              className="w-full h-full border-0"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture" 
              allowFullScreen
            />
          </div>
        )}
      </Modal>
    </Section>
  );
}
