import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-coral text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <img 
            src="https://cdn.poehali.dev/files/dd22a4e3-5081-43fc-ba0d-95a46b82f4fb.jpg" 
            alt="Мажорик логотип"
            className="h-16 sm:h-20 w-auto object-contain"
          />
        </div>
        <p className="text-white/90 mb-2 text-base sm:text-lg">Детский центр в Ульяновске</p>
        <p className="text-white/90 mb-4 text-sm sm:text-base lg:text-lg">г. Ульяновск, Новый город, ул. Карбышева, 49</p>
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