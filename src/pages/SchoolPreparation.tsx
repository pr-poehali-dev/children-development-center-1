import { Link } from 'react-router-dom';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import ContactSection from '@/components/sections/ContactSection';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const SchoolPreparation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation scrollToSection={() => {}} />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">Подготовка к школе в Ульяновске</h1>
            <p className="text-xl text-gray-600">Качественная дошкольная подготовка для детей 5-7 лет</p>
          </div>

          <Card className="p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Icon name="GraduationCap" size={40} className="text-sky-500" />
              <div>
                <h2 className="text-2xl font-bold text-navy mb-2">Комплексная подготовка</h2>
                <p className="text-gray-600">Всё необходимое для успешного старта в школе</p>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Обучение чтению и письму</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Математика и логика</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Развитие речи и окружающий мир</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Подготовка руки к письму</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Психологическая готовность</span>
              </li>
            </ul>

            <div className="bg-sky-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-4">Что получит ваш ребёнок</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Icon name="BookOpen" className="text-sky-500" size={24} />
                  <div>
                    <p className="font-semibold">Знания</p>
                    <p className="text-sm text-gray-600">Полная программа</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Users" className="text-sky-500" size={24} />
                  <div>
                    <p className="font-semibold">Социализация</p>
                    <p className="text-sm text-gray-600">Работа в коллективе</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Brain" className="text-sky-500" size={24} />
                  <div>
                    <p className="font-semibold">Мышление</p>
                    <p className="text-sm text-gray-600">Логика и внимание</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Target" className="text-sky-500" size={24} />
                  <div>
                    <p className="font-semibold">Мотивация</p>
                    <p className="text-sm text-gray-600">Интерес к учёбе</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <Link to="/" className="inline-block px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
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

export default SchoolPreparation;
