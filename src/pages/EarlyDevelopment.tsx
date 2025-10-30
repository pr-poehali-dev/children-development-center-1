import { Link } from 'react-router-dom';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import ContactSection from '@/components/sections/ContactSection';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const EarlyDevelopment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation scrollToSection={() => {}} />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">Раннее развитие детей в Ульяновске</h1>
            <p className="text-xl text-gray-600">Комплексные занятия для малышей от 1 до 3 лет</p>
          </div>

          <Card className="p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Icon name="Sparkles" size={40} className="text-orange-500" />
              <div>
                <h2 className="text-2xl font-bold text-navy mb-2">Программа раннего развития</h2>
                <p className="text-gray-600">Всестороннее развитие малыша в игровой форме</p>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Развитие мелкой моторики и сенсорики</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Музыкальные занятия и ритмика</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Творческая деятельность</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Развитие речи и коммуникации</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Физическое развитие</span>
              </li>
            </ul>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-4">Наши преимущества</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Icon name="Users" className="text-orange-500" size={24} />
                  <div>
                    <p className="font-semibold">Малые группы</p>
                    <p className="text-sm text-gray-600">До 6 детей</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Brain" className="text-orange-500" size={24} />
                  <div>
                    <p className="font-semibold">Методики</p>
                    <p className="text-sm text-gray-600">Проверенные программы</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Heart" className="text-orange-500" size={24} />
                  <div>
                    <p className="font-semibold">Атмосфера</p>
                    <p className="text-sm text-gray-600">Комфорт и забота</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Award" className="text-orange-500" size={24} />
                  <div>
                    <p className="font-semibold">Результат</p>
                    <p className="text-sm text-gray-600">Видимый прогресс</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <Link to="/" className="inline-block px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
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

export default EarlyDevelopment;
