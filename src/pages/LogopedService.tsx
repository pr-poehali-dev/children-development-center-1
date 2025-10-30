import { Link } from 'react-router-dom';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import ContactSection from '@/components/sections/ContactSection';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const LogopedService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation scrollToSection={() => {}} />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">Логопед в Ульяновске</h1>
            <p className="text-xl text-gray-600">Профессиональная помощь в развитии речи</p>
          </div>

          <Card className="p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Icon name="MessageCircle" size={40} className="text-teal-500" />
              <div>
                <h2 className="text-2xl font-bold text-navy mb-2">Логопедические занятия</h2>
                <p className="text-gray-600">Коррекция речевых нарушений у детей</p>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Постановка звуков</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Развитие фонематического слуха</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Расширение словарного запаса</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Развитие связной речи</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Подготовка к школе</span>
              </li>
            </ul>

            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-4">Что мы предлагаем</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Icon name="User" className="text-teal-500" size={24} />
                  <div>
                    <p className="font-semibold">Квалификация</p>
                    <p className="text-sm text-gray-600">Опытный специалист</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Target" className="text-teal-500" size={24} />
                  <div>
                    <p className="font-semibold">Индивидуально</p>
                    <p className="text-sm text-gray-600">Персональный план</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Smile" className="text-teal-500" size={24} />
                  <div>
                    <p className="font-semibold">Комфорт</p>
                    <p className="text-sm text-gray-600">Игровая форма</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="TrendingUp" className="text-teal-500" size={24} />
                  <div>
                    <p className="font-semibold">Результат</p>
                    <p className="text-sm text-gray-600">Заметный прогресс</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <Link to="/" className="inline-block px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
              Вернуться на главную
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer scrollToSection={() => {}} />
    </div>
  );
};

export default LogopedService;
