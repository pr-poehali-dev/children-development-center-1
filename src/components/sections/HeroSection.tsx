import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="главная" className="min-h-screen flex items-center bg-gradient-to-br from-turquoise/5 via-white to-coral/5">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 items-center">
          <div className="space-y-10 animate-fade-in px-8 lg:px-16 xl:px-24 py-12">
            <Badge className="bg-turquoise/20 text-navy border-turquoise text-xl px-8 py-3">Детский центр в Ульяновске</Badge>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-navy leading-[1.1]">
              Занятия для детей от 1 года
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-600 leading-relaxed">
              Мини-сад, раннее развитие, английский и другие программы. 
              Создаём пространство, где дети растут счастливыми!
            </p>
            <div className="flex gap-6 flex-wrap">
              <Button 
                size="lg" 
                className="bg-coral hover:bg-coral/90 text-white text-xl px-12 py-8 h-auto rounded-2xl"
                onClick={() => scrollToSection('контакты')}
              >
                Записаться на занятие
                <Icon name="ArrowRight" className="ml-3" size={28} />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-xl px-12 py-8 h-auto rounded-2xl border-2"
                onClick={() => scrollToSection('расписание')}
              >
                Посмотреть расписание
              </Button>
            </div>
          </div>
          <div className="relative h-screen flex items-center justify-center p-8 lg:p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-turquoise/20 to-coral/20 blur-3xl opacity-40"></div>
            <img 
              src="https://cdn.poehali.dev/projects/afe0c899-c9af-4cdc-abfd-00dca9600f22/files/c6e22f61-653f-41a2-8182-2189246002fc.jpg" 
              alt="Дети из мультфильма Disney играют"
              className="relative w-full h-auto max-h-[85vh] object-contain drop-shadow-2xl animate-scale-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;