import { Link } from 'react-router-dom';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import ContactSection from '@/components/sections/ContactSection';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const NannyService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation scrollToSection={() => {}} />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">Няня на час в Ульяновске</h1>
            <p className="text-xl text-gray-600">Профессиональный уход за вашим ребёнком</p>
          </div>

          <Card className="p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Icon name="UserCheck" size={40} className="text-indigo-500" />
              <div>
                <h2 className="text-2xl font-bold text-navy mb-2">Что включает услуга</h2>
                <p className="text-gray-600">Квалифицированная няня позаботится о вашем ребёнке, пока вы заняты</p>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Присмотр за ребёнком от 1 года</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Развивающие игры и занятия</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Кормление и соблюдение режима</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Прогулки на свежем воздухе</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Опытные педагоги с документами</span>
              </li>
            </ul>

            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-4">Почему выбирают нас</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Icon name="Shield" className="text-indigo-500" size={24} />
                  <div>
                    <p className="font-semibold">Безопасность</p>
                    <p className="text-sm text-gray-600">Проверенные специалисты</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Heart" className="text-indigo-500" size={24} />
                  <div>
                    <p className="font-semibold">Забота</p>
                    <p className="text-sm text-gray-600">Индивидуальный подход</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-indigo-500" size={24} />
                  <div>
                    <p className="font-semibold">Гибкий график</p>
                    <p className="text-sm text-gray-600">От 1 часа</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Star" className="text-indigo-500" size={24} />
                  <div>
                    <p className="font-semibold">Опыт</p>
                    <p className="text-sm text-gray-600">Педагогическое образование</p>
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

export default NannyService;
