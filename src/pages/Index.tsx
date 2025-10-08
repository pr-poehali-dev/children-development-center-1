import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentServiceSlide, setCurrentServiceSlide] = useState(0);
  const [currentGallerySlide, setCurrentGallerySlide] = useState(0);

  const services = [
    [
      { title: 'Мини - сад: от 3х лет', bg: '#FFF0B8' },
      { title: 'Логопед', bg: '#FFE8E8' },
      { title: 'Вместе с мамой', bg: '#E8F4FF' },
      { title: 'Учусь, играя (от 4-6 лет)', bg: '#E8FFE8' },
      { title: 'Скоро в школу (от 5-6 лет)', bg: '#FFE8F4' },
      { title: 'Английский (от 5-8 лет)', bg: '#F4E8FF' },
    ],
    [
      { title: 'Говорушки (от 3-4 лет)', bg: '#F4E8FF' },
      { title: 'Шахматы', bg: '#FFE8F4' },
      { title: 'Рисование + Мастер класс', bg: '#E8FFE8' },
      { title: 'Арт - терапия', bg: '#E8F4FF' },
      { title: 'Психолог', bg: '#FFE8E8' },
      { title: 'Няня на час', bg: '#FFF0B8' },
    ],
  ];

  const gallery = [
    [
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800',
      'https://images.unsplash.com/photo-1587616211892-cc1b8faec8d4?w=800',
      'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800',
      'https://images.unsplash.com/photo-1560421683-6856ea585c78?w=800',
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    ],
    [
      'https://images.unsplash.com/photo-1587616211892-cc1b8faec8d4?w=800',
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800',
      'https://images.unsplash.com/photo-1560421683-6856ea585c78?w=800',
      'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800',
    ],
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Спасибо! Мы скоро с вами свяжемся.');
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-[1230px] mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="flex items-center">
            <div className="text-2xl font-bold text-turquoise">Мажорик</div>
          </a>
          
          <nav className="hidden lg:block">
            <ul className="flex gap-6 text-sm">
              {['Главная', 'Наши занятия', 'Галерея', 'Оставить заявку', 'Контактная информация'].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(['home', 'slider1', 'gallery', 'post', 'map'][index])}
                    className="hover:text-turquoise transition-colors relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="lg:hidden flex flex-col gap-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden bg-black/80 backdrop-blur-md fixed top-[75px] right-0 w-full h-screen">
            <ul className="flex flex-col items-end gap-6 p-8 text-white text-lg">
              {['Главная', 'Наши занятия', 'Галерея', 'Оставить заявку', 'Контактная информация'].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(['home', 'slider1', 'gallery', 'post', 'map'][index])}
                    className="hover:text-turquoise transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <section
        id="home"
        className="h-screen relative flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1587616211892-cc1b8faec8d4?w=1200)' }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-[1230px] w-full mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Оставьте заявку<br />И мы скоро с вами свяжемся
            </h1>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-md w-full">
            <h2 className="text-2xl font-bold text-center mb-6">Оставить заявку</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input type="text" placeholder="Введите ваше имя" required className="h-12" />
              <Input type="tel" placeholder="Введите ваш номер телефона" className="h-12" />
              <p className="text-sm opacity-50 text-center">Хорошего вам дня =)</p>
              <Button type="submit" className="w-full h-12 bg-turquoise hover:bg-turquoise/90 text-white">
                Отправить
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section id="slider1" className="min-h-screen bg-white py-20 flex items-center justify-center">
        <div className="max-w-[1230px] w-full mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Наши Услуги</h2>
          
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 gap-4" style={{ transform: `translateX(-${currentServiceSlide * 100}%)` }}>
              {services.map((slideGroup, slideIndex) => (
                <div key={slideIndex} className="min-w-full grid grid-cols-2 md:grid-cols-3 gap-4">
                  {slideGroup.map((service, index) => (
                    <div key={index} className="rounded-lg p-6 h-[200px] md:h-[250px] relative shadow-md" style={{ backgroundColor: service.bg }}>
                      <p className="text-lg md:text-xl font-medium">{service.title}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={() => setCurrentServiceSlide(Math.max(0, currentServiceSlide - 1))} className="p-3 hover:bg-gray-100 rounded-lg" disabled={currentServiceSlide === 0}>
              <svg width="15" height="25" viewBox="0 0 15 25"><path d="M12 3L3 12.5L12 22" stroke="black" strokeWidth="2"/></svg>
            </button>
            <button onClick={() => setCurrentServiceSlide(Math.min(services.length - 1, currentServiceSlide + 1))} className="p-3 hover:bg-gray-100 rounded-lg" disabled={currentServiceSlide === services.length - 1}>
              <svg width="15" height="25" viewBox="0 0 15 25"><path d="M3 3L12 12.5L3 22" stroke="black" strokeWidth="2"/></svg>
            </button>
          </div>
        </div>
      </section>

      <section id="gallery" className="min-h-screen bg-[#2E2E2E] py-20 flex items-center justify-center">
        <div className="max-w-[1230px] w-full mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Галерея</h2>
          
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentGallerySlide * 100}%)` }}>
              {gallery.map((slideGroup, slideIndex) => (
                <div key={slideIndex} className="min-w-full grid grid-cols-2 md:grid-cols-3 gap-4">
                  {slideGroup.map((img, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                      <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-[200px] md:h-[250px] object-cover hover:scale-105 transition-transform duration-300 cursor-pointer" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={() => setCurrentGallerySlide(Math.max(0, currentGallerySlide - 1))} className="p-3 hover:bg-gray-700 rounded-lg" disabled={currentGallerySlide === 0}>
              <svg width="15" height="25" viewBox="0 0 15 25"><path d="M12 3L3 12.5L12 22" stroke="white" strokeWidth="2"/></svg>
            </button>
            <button onClick={() => setCurrentGallerySlide(Math.min(gallery.length - 1, currentGallerySlide + 1))} className="p-3 hover:bg-gray-700 rounded-lg" disabled={currentGallerySlide === gallery.length - 1}>
              <svg width="15" height="25" viewBox="0 0 15 25"><path d="M3 3L12 12.5L3 22" stroke="white" strokeWidth="2"/></svg>
            </button>
          </div>
        </div>
      </section>

      <section id="post" className="h-screen relative flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 bg-white rounded-lg p-8 shadow-xl max-w-2xl w-full mx-4">
          <h2 className="text-2xl font-bold text-center mb-6">Если остались вопросы, оставьте заявление</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="text" placeholder="Введите ваше имя" required className="h-12" />
            <Input type="tel" placeholder="Введите ваш номер телефона" className="h-12" />
            <p className="text-sm opacity-50 text-center">Хорошего вам дня =)</p>
            <Button type="submit" className="w-full h-12 bg-turquoise hover:bg-turquoise/90 text-white">
              Отправить
            </Button>
          </form>
        </div>
      </section>

      <section id="map" className="h-[75vh] relative">
        <iframe src="https://yandex.ru/map-widget/v1/?ll=48.574368%2C54.388171&mode=whatshere&whatshere%5Bpoint%5D=48.574369%2C54.388171&whatshere%5Bzoom%5D=17&z=17" width="100%" height="100%" frameBorder="0" allowFullScreen className="w-full h-full"></iframe>
      </section>

      <footer className="bg-[#181818] text-white py-8">
        <div className="max-w-[1230px] mx-auto px-4 flex flex-col items-center justify-center gap-4">
          <p>Адрес: г. Ульяновск Еремецкого 38</p>
          <p>+7 908 479 58 63</p>
          <p>Email: info@majorik.com</p>
          <p className="text-sm opacity-70">Политика конфиденциальности</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
