import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="главная" className="min-h-screen flex items-center px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-turquoise/20 text-navy border-turquoise">Детский центр в Ульяновске</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-navy leading-tight">
              Занятия для детей от 1 года
            </h1>
            <p className="text-xl text-gray-600">
              Мини-сад, раннее развитие, английский и другие программы. 
              Создаём пространство, где дети растут счастливыми!
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button 
                size="lg" 
                className="bg-coral hover:bg-coral/90 text-white"
                onClick={() => scrollToSection('контакты')}
              >
                Записаться на занятие
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('расписание')}
              >
                Посмотреть расписание
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-turquoise/30 to-coral/30 rounded-[3rem] blur-3xl opacity-50"></div>
            <img 
              src="https://cdn.poehali.dev/projects/afe0c899-c9af-4cdc-abfd-00dca9600f22/files/05bb118e-22e7-4d02-90cc-feeec6256e98.jpg" 
              alt="Дети играют с пирамидками"
              className="relative rounded-[3rem] shadow-2xl w-full object-cover h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;