import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  return (
    <footer className="bg-coral text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <img 
            src="https://cdn.poehali.dev/files/ff712fea-7ace-451a-b5db-973df14b807d.png" 
            alt="Мажорик логотип"
            className="h-24 sm:h-32 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => scrollToSection('главная')}
          />
        </div>
        <p className="text-white/90 mb-2 text-base sm:text-lg">Детский центр в Ульяновске</p>
        <p className="text-white/90 mb-1 text-sm sm:text-base lg:text-lg">г. Ульяновск, Новый город, ул. Карбышева, 49</p>
        <p className="text-white/90 mb-4 text-sm sm:text-base lg:text-lg">г. Ульяновск, Кашубы, 4к1</p>
        <Separator className="my-6 bg-white/30" />
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-4">
          <Link to="/privacy" className="text-white/90 hover:text-white transition-colors text-sm sm:text-base lg:text-lg underline">
            Политика конфиденциальности
          </Link>
        </div>
        <p className="text-white/80 text-sm sm:text-base">© 2025 Мажорик. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;