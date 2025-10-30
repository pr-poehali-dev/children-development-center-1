import { Link } from 'react-router-dom';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import ContactSection from '@/components/sections/ContactSection';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const MiniGarden = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation scrollToSection={() => {}} />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">Мини-сад в Ульяновске</h1>
            <p className="text-xl text-gray-600">Частный детский садик для детей от 3 лет</p>
          </div>

          <Card className="p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Icon name="Home" size={40} className="text-red-500" />
              <div>
                <h2 className="text-2xl font-bold text-navy mb-2">Домашняя атмосфера</h2>
                <p className="text-gray-600">Уютный частный садик с малыми группами</p>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Группы до 10 детей</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Развивающие занятия каждый день</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Здоровое питание</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Прогулки на свежем воздухе</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Творческие мастерские</span>
              </li>
            </ul>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-4">Почему родители выбирают нас</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Icon name="Users" className="text-red-500" size={24} />
                  <div>
                    <p className="font-semibold">Малые группы</p>
                    <p className="text-sm text-gray-600">Внимание каждому</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Heart" className="text-red-500" size={24} />
                  <div>
                    <p className="font-semibold">Забота</p>
                    <p className="text-sm text-gray-600">Как дома</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Shield" className="text-red-500" size={24} />
                  <div>
                    <p className="font-semibold">Безопасность</p>
                    <p className="text-sm text-gray-600">Контроль 24/7</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="BookOpen" className="text-red-500" size={24} />
                  <div>
                    <p className="font-semibold">Развитие</p>
                    <p className="text-sm text-gray-600">Полная программа</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <Link to="/" className="inline-block px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
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

export default MiniGarden;
