import { Link } from 'react-router-dom';
import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ScheduleSection from '@/components/sections/ScheduleSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ServicesSection />
      
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">Наши услуги в Ульяновске</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-navy mb-3">
                <Link to="/mini-sad" className="hover:text-indigo-600 transition-colors">Мини-сад в Ульяновске</Link>
              </h3>
              <p className="text-gray-600 mb-3">Частный детский садик с малыми группами для детей от 3 лет. Уютная домашняя атмосфера и индивидуальный подход.</p>
              <Link to="/mini-sad" className="text-indigo-600 hover:text-indigo-700">Подробнее →</Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-navy mb-3">
                <Link to="/rannee-razvitie" className="hover:text-indigo-600 transition-colors">Раннее развитие детей</Link>
              </h3>
              <p className="text-gray-600 mb-3">Комплексные развивающие занятия для малышей от 1 до 4 лет. Развитие речи, моторики, творческих способностей.</p>
              <Link to="/rannee-razvitie" className="text-indigo-600 hover:text-indigo-700">Подробнее →</Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-navy mb-3">
                <Link to="/podgotovka-k-shkole" className="hover:text-indigo-600 transition-colors">Подготовка к школе</Link>
              </h3>
              <p className="text-gray-600 mb-3">Курсы дошкольной подготовки для детей 5-7 лет. Обучение чтению, письму, математике по программе ФГОС.</p>
              <Link to="/podgotovka-k-shkole" className="text-indigo-600 hover:text-indigo-700">Подробнее →</Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-navy mb-3">
                <Link to="/angliyskiy-dlya-detey" className="hover:text-indigo-600 transition-colors">Английский для детей</Link>
              </h3>
              <p className="text-gray-600 mb-3">Курсы английского языка для детей 5-8 лет. Игровая форма обучения, разговорная практика.</p>
              <Link to="/angliyskiy-dlya-detey" className="text-indigo-600 hover:text-indigo-700">Подробнее →</Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-navy mb-3">
                <Link to="/logoped" className="hover:text-indigo-600 transition-colors">Логопед в Ульяновске</Link>
              </h3>
              <p className="text-gray-600 mb-3">Профессиональная коррекция речи, постановка звуков, развитие фонематического слуха у детей.</p>
              <Link to="/logoped" className="text-indigo-600 hover:text-indigo-700">Подробнее →</Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-navy mb-3">
                <Link to="/shahmaty" className="hover:text-indigo-600 transition-colors">Шахматы для детей</Link>
              </h3>
              <p className="text-gray-600 mb-3">Кружки шахмат в Ульяновске. Обучение от основ до участия в турнирах, развитие логического мышления.</p>
              <Link to="/shahmaty" className="text-indigo-600 hover:text-indigo-700">Подробнее →</Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-navy mb-3">
                <Link to="/art-terapiya" className="hover:text-indigo-600 transition-colors">Арт-терапия для детей</Link>
              </h3>
              <p className="text-gray-600 mb-3">Рисование и творческие занятия для детей. Развитие эмоционального интеллекта через искусство.</p>
              <Link to="/art-terapiya" className="text-indigo-600 hover:text-indigo-700">Подробнее →</Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-navy mb-3">
                <Link to="/nyanya" className="hover:text-indigo-600 transition-colors">Няня на час</Link>
              </h3>
              <p className="text-gray-600 mb-3">Услуги няни в Ульяновске. Опытные специалисты с педагогическим образованием для ухода за детьми.</p>
              <Link to="/nyanya" className="text-indigo-600 hover:text-indigo-700">Подробнее →</Link>
            </div>
          </div>
        </div>
      </section>
      
      <ScheduleSection />
      <ReviewsSection />
      <ContactSection />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Index;