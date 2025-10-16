import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

const Navigation = ({ scrollToSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ['Главная', 'Расписание', 'Отзывы', 'Контакты'];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          <div className="flex items-center gap-3 px-2 sm:px-8 lg:px-16 xl:px-24">
            <img 
              src="https://cdn.poehali.dev/files/d6d4a00a-f308-4b62-a0e7-86b6552a12a3.png" 
              alt="Мажорик логотип"
              className="h-20 sm:h-24 w-auto object-contain py-2 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => scrollToSection('главная')}
            />
          </div>
          
          <div className="hidden md:flex gap-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-navy hover:text-turquoise transition-colors font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="md:hidden mr-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 px-4 animate-fade-in">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-3 px-2 text-navy hover:text-turquoise transition-colors font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;