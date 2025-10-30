import { Link } from 'react-router-dom';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import ContactSection from '@/components/sections/ContactSection';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const EnglishForKids = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation scrollToSection={() => {}} />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">Английский для детей в Ульяновске</h1>
            <p className="text-xl text-gray-600">Увлекательное изучение языка для детей 5-8 лет</p>
          </div>

          <Card className="p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Icon name="Globe" size={40} className="text-indigo-500" />
              <div>
                <h2 className="text-2xl font-bold text-navy mb-2">Программа обучения</h2>
                <p className="text-gray-600">Игровой подход к изучению английского языка</p>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Обучение через игры и песни</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Развитие разговорных навыков</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Изучение алфавита и чтение</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Пополнение словарного запаса</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Творческие проекты на английском</span>
              </li>
            </ul>

            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-4">Особенности курса</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Icon name="Smile" className="text-indigo-500" size={24} />
                  <div>
                    <p className="font-semibold">Без стресса</p>
                    <p className="text-sm text-gray-600">Игровая форма</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MessageCircle" className="text-indigo-500" size={24} />
                  <div>
                    <p className="font-semibold">Разговорная практика</p>
                    <p className="text-sm text-gray-600">Упор на общение</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Star" className="text-indigo-500" size={24} />
                  <div>
                    <p className="font-semibold">Опытные педагоги</p>
                    <p className="text-sm text-gray-600">Знание детской психологии</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="TrendingUp" className="text-indigo-500" size={24} />
                  <div>
                    <p className="font-semibold">Прогресс</p>
                    <p className="text-sm text-gray-600">Видимые результаты</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <Link to="/" className="inline-block px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors">
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

export default EnglishForKids;
