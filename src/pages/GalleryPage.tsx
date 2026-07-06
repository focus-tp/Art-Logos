import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

// Импорт стилей Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const photos = [
  '/gallery/2025-10-12 20-02-08 — средний размер.jpeg',
  '/gallery/2025-10-12 20-08-07 — средний размер.jpeg',
  '/gallery/2025-10-13 05-20-43 — средний размер.jpeg',
  '/gallery/2025-11-12 20-26-11 — средний размер.jpeg',
  '/gallery/2025-11-29 18-04-00 — средний размер.jpeg',
  '/gallery/2025-12-21 17-05-01 — средний размер.jpeg',
  '/gallery/2025-12-21 17-07-48 — средний размер.jpeg',
  '/gallery/2026-01-19 10-29-40 — средний размер.jpeg',
  '/gallery/2026-01-31 17-34-40 — средний размер.jpeg',
  '/gallery/2026-01-31 18-01-06 — средний размер.jpeg',
  '/gallery/2026-02-16 10-25-50 — средний размер.jpeg',
  '/gallery/2026-02-22 15-44-37 — средний размер.jpeg',
  '/gallery/2026-03-24 16-14-41 — средний размер.jpeg',
  '/gallery/2026-03-24 16-15-19 — средний размер.jpeg',
  '/gallery/2026-04-09 19-49-42 — средний размер.jpeg',
  '/gallery/2026-04-13 20-36-44_1779217608812 — средний размер.jpeg',
  '/gallery/2026-05-03 10-17-41 — средний размер.jpeg',
  '/gallery/2026-05-03 10-17-45 — средний размер.jpeg',
  '/gallery/2026-06-03 15-10-06 — средний размер.jpeg',
  '/gallery/IMG_20260521_100714878_HDR — средний размер.jpeg',
  '/gallery/IMG_20260521_100845872_HDR — средний размер.jpeg',
  '/gallery/IMG_20260526_165347045_HDR — средний размер.jpeg',
  '/gallery/IMG_20260526_192155910_PORTRAIT — средний размер.jpeg',
  '/gallery/IMG_20260526_192926843_HDR — средний размер.jpeg',
  '/gallery/IMG_20260526_194922905_HDR — средний размер.jpeg',
  '/gallery/IMG_20260623_191127425_HDR — средний размер.jpeg',
  '/gallery/IMG_20260623_194136888_HDR — средний размер.jpeg',
  '/gallery/IMG_20260704_020055_593 — средний размер.jpeg',
  '/gallery/IMG_20260704_020101_826 — средний размер.jpeg',
  '/gallery/IMG_20260704_020235_984 — средний размер.jpeg',
  '/gallery/photo_2026-03-30_18-06-45 — средний размер.jpeg'
];

export default function GalleryPage() {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-rose-100 min-h-screen text-teal-900 relative overflow-hidden py-8 md:py-12 flex flex-col">
      
      {/* Кнопка "Назад" */}
      <div className="px-6 md:px-12 mb-4 relative z-20 flex justify-between items-center w-full max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-md px-6 py-3 text-sm font-bold text-teal-900 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 hover:bg-white border border-white/50">
          <span>⬅️</span> Назад на сайт
        </Link>
      </div>

      {/* Заголовки */}
      <div className="text-center px-4 mb-10 relative z-20">
        <div className="inline-block mb-3 px-4 py-1.5 rounded-full bg-orange-100/80 backdrop-blur-sm border border-orange-200/60 shadow-sm">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-orange-600 font-bold">
            Территория счастливого детства
          </p>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-teal-900 tracking-tight">
          Наша жизнь в <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">деталях</span>
        </h1>
        <p className="mt-4 text-teal-700/80 max-w-xl mx-auto font-medium text-lg">
          Листайте фотографии вручную 🖐️
        </p>
      </div>

      {/* 3D Карусель */}
      <div className="w-full relative flex-grow flex items-center justify-center py-4">
        
        {/* Градиенты по краям (опционально, но добавляют шарма) */}
        <div className="absolute top-0 left-0 w-8 md:w-32 h-full bg-gradient-to-r from-orange-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-8 md:w-32 h-full bg-gradient-to-l from-rose-100 to-transparent z-10 pointer-events-none"></div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'} // 'auto' позволяет задать ширину слайдов через CSS
          coverflowEffect={{
            rotate: 25, // угол поворота боковых слайдов
            stretch: 0,
            depth: 250, // глубина ухода на задний план
            modifier: 1,
            slideShadows: true, // добавляет легкие тени на боковые слайды для 3D эффекта
          }}
          autoplay={{
            delay: 3500, // Плавное медленное листание каждые 3.5 сек
            disableOnInteraction: false, // Продолжать автовоспроизведение после взаимодействия
          }}
          loop={true} // Бесконечная карусель
          pagination={{ 
            clickable: true,
            dynamicBullets: true // Пагинация точками внизу
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full max-w-7xl mx-auto py-10"
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={index} className="!w-72 !h-96 sm:!w-96 sm:!h-[30rem] md:!w-[36rem] md:!h-[36rem] lg:!w-[42rem] lg:!h-[42rem]">
              <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/80 bg-white/20 backdrop-blur-sm transition-all duration-300">
                <img 
                  src={photo} 
                  alt={`Фото ${index}`} 
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Стили для кастомизации точек пагинации Swiper */}
      <style>{`
        .swiper-pagination-bullet {
          background-color: #f97316 !important; /* Оранжевый цвет */
          opacity: 0.6;
        }
        .swiper-pagination-bullet-active {
          background-color: #f43f5e !important; /* Розовый для активного */
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}