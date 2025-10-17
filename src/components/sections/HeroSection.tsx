import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <header id="главная" className="min-h-screen flex items-center bg-gradient-to-br from-turquoise/5 via-white to-coral/5">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 items-center">
          <div className="space-y-8 lg:space-y-10 animate-fade-in px-6 sm:px-8 lg:px-16 xl:px-24 py-12">
            <div className="flex justify-start">
              <Badge className="bg-turquoise/20 text-navy border-turquoise text-xs sm:text-sm lg:text-base xl:text-lg px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 inline-block">Детский центр в Ульяновске</Badge>
            </div>
            <h1 itemProp="name" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy leading-tight">
              Занятия для детей от 1 года в Новом городе
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed">
              Мини-сад, раннее развитие, английский и другие программы. 
              Создаём пространство, где дети растут счастливыми!
            </p>
            <div className="flex gap-3 sm:gap-4 flex-col sm:flex-row">
              <Button 
                size="lg" 
                className="bg-coral hover:bg-coral/90 text-white text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-5 sm:py-6 lg:py-7 h-auto rounded-xl sm:rounded-2xl w-full sm:w-auto"
                onClick={() => scrollToSection('контакты')}
              >
                Записаться на занятие
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-5 sm:py-6 lg:py-7 h-auto rounded-xl sm:rounded-2xl border-2 w-full sm:w-auto"
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
    </header>
  );
};

export default HeroSection;