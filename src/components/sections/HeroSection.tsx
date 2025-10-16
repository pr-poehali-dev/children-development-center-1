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
          <div className="space-y-8 lg:space-y-10 animate-fade-in px-6 sm:px-8 lg:px-16 xl:px-24 py-12">
            <Badge className="bg-turquoise/20 text-navy border-turquoise text-base sm:text-lg lg:text-xl px-6 sm:px-8 py-2 sm:py-3">Детский центр в Ульяновске</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-navy leading-[1.1]">
              Занятия для детей от 1 года
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-600 leading-relaxed">
              Мини-сад, раннее развитие, английский и другие программы. 
              Создаём пространство, где дети растут счастливыми!
            </p>
            <div className="flex gap-4 sm:gap-6 flex-wrap">
              <Button 
                size="lg" 
                className="bg-coral hover:bg-coral/90 text-white text-base sm:text-lg lg:text-xl px-8 sm:px-12 py-6 sm:py-8 h-auto rounded-2xl"
                onClick={() => scrollToSection('контакты')}
              >
                Записаться на занятие
                <Icon name="ArrowRight" className="ml-2 sm:ml-3" size={24} />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-base sm:text-lg lg:text-xl px-8 sm:px-12 py-6 sm:py-8 h-auto rounded-2xl border-2"
                onClick={() => scrollToSection('расписание')}
              >
                Посмотреть расписание
              </Button>
            </div>
          </div>
          <div className="relative h-screen hidden lg:flex items-center justify-center p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-turquoise/20 to-coral/20 blur-3xl opacity-40"></div>
            <img 
              src="https://cdn.poehali.dev/files/6a70dd5c-bccb-400d-a115-0752b393c1ce.png" 
              alt="Ребёнок с книгами" 
              className="w-4/5 h-auto max-h-[70vh] drop-shadow-2xl animate-scale-in object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;