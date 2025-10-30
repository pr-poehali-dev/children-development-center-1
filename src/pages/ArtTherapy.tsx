import { Link } from 'react-router-dom';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import ContactSection from '@/components/sections/ContactSection';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ArtTherapy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation scrollToSection={() => {}} />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">Арт-терапия для детей в Ульяновске</h1>
            <p className="text-xl text-gray-600">Творчество как способ самовыражения и развития</p>
          </div>

          <Card className="p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Icon name="Paintbrush" size={40} className="text-orange-500" />
              <div>
                <h2 className="text-2xl font-bold text-navy mb-2">Рисование и творчество</h2>
                <p className="text-gray-600">Гармоничное развитие через искусство</p>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Рисование различными техниками</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Лепка из глины и пластилина</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Аппликация и коллаж</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Работа с природными материалами</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Развитие эмоционального интеллекта</span>
              </li>
            </ul>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-4">Польза арт-терапии</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Icon name="Heart" className="text-orange-500" size={24} />
                  <div>
                    <p className="font-semibold">Эмоции</p>
                    <p className="text-sm text-gray-600">Выражение чувств</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Sparkles" className="text-orange-500" size={24} />
                  <div>
                    <p className="font-semibold">Творчество</p>
                    <p className="text-sm text-gray-600">Развитие фантазии</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Smile" className="text-orange-500" size={24} />
                  <div>
                    <p className="font-semibold">Релаксация</p>
                    <p className="text-sm text-gray-600">Снятие стресса</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Hand" className="text-orange-500" size={24} />
                  <div>
                    <p className="font-semibold">Моторика</p>
                    <p className="text-sm text-gray-600">Развитие навыков</p>
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

export default ArtTherapy;
