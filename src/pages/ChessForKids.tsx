import { Link } from 'react-router-dom';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import ContactSection from '@/components/sections/ContactSection';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ChessForKids = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation scrollToSection={() => {}} />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">Шахматы для детей в Ульяновске</h1>
            <p className="text-xl text-gray-600">Развитие логики и стратегического мышления</p>
          </div>

          <Card className="p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Icon name="Puzzle" size={40} className="text-teal-500" />
              <div>
                <h2 className="text-2xl font-bold text-navy mb-2">Обучение шахматам</h2>
                <p className="text-gray-600">От основ до уверенной игры</p>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Изучение правил и основ игры</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Развитие логического мышления</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Обучение тактикам и стратегиям</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Участие в турнирах</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1" size={20} />
                <span>Развитие концентрации внимания</span>
              </li>
            </ul>

            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-4">Польза шахмат для ребёнка</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Icon name="Brain" className="text-teal-500" size={24} />
                  <div>
                    <p className="font-semibold">Интеллект</p>
                    <p className="text-sm text-gray-600">Развитие мышления</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Target" className="text-teal-500" size={24} />
                  <div>
                    <p className="font-semibold">Концентрация</p>
                    <p className="text-sm text-gray-600">Внимание и усидчивость</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Award" className="text-teal-500" size={24} />
                  <div>
                    <p className="font-semibold">Успехи</p>
                    <p className="text-sm text-gray-600">Турниры и разряды</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Users" className="text-teal-500" size={24} />
                  <div>
                    <p className="font-semibold">Общение</p>
                    <p className="text-sm text-gray-600">Дружеские партии</p>
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

export default ChessForKids;
