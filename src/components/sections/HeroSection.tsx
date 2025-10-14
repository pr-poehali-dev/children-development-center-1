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
          <div className="relative h-screen hidden lg:flex items-center justify-center p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-turquoise/20 to-coral/20 blur-3xl opacity-40"></div>
            <svg viewBox="0 0 800 900" className="w-full h-auto max-h-[85vh] drop-shadow-2xl animate-scale-in">
              <defs>
                <linearGradient id="deskGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#8B4513', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#654321', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#FF6B6B', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#FF8E8E', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              
              <ellipse cx="400" cy="750" rx="180" ry="30" fill="#D3D3D3" opacity="0.4" />
              
              <g transform="translate(200, 500)">
                <rect x="0" y="80" width="400" height="15" rx="8" fill="url(#deskGrad)" />
                <rect x="-20" y="95" width="440" height="120" rx="15" fill="#A0522D" />
                <rect x="0" y="95" width="400" height="100" fill="#8B7355" opacity="0.3" />
                <rect x="20" y="105" width="80" height="3" fill="#654321" opacity="0.5" />
                <polygon points="50,215 80,280 20,280" fill="#654321" />
                <polygon points="350,215 380,280 320,280" fill="#654321" />
              </g>
              
              <g transform="translate(280, 580)">
                <rect x="0" y="0" width="100" height="120" rx="5" fill="url(#bookGrad)" />
                <rect x="50" y="0" width="3" height="120" fill="#8B0000" />
                <line x1="10" y1="20" x2="45" y2="20" stroke="white" strokeWidth="2" opacity="0.7" />
                <line x1="10" y1="35" x2="45" y2="35" stroke="white" strokeWidth="2" opacity="0.7" />
                <line x1="10" y1="50" x2="45" y2="50" stroke="white" strokeWidth="2" opacity="0.7" />
                <text x="15" y="80" fill="white" fontSize="32" fontWeight="bold">ABC</text>
              </g>
              
              <g transform="translate(400, 595)">
                <rect x="0" y="0" width="90" height="100" rx="5" fill="#4169E1" />
                <rect x="45" y="0" width="3" height="100" fill="#1E40AF" />
                <circle cx="20" cy="30" r="8" fill="#FFD700" />
                <text x="15" y="65" fill="white" fontSize="28" fontWeight="bold">123</text>
              </g>
              
              <g transform="translate(320, 610)">
                <rect x="0" y="0" width="60" height="70" rx="4" fill="#2ECC71" transform="rotate(-15 30 35)" />
                <line x1="15" y1="20" x2="45" y2="20" stroke="white" strokeWidth="1.5" opacity="0.8" transform="rotate(-15 30 35)" />
                <line x1="15" y1="30" x2="45" y2="30" stroke="white" strokeWidth="1.5" opacity="0.8" transform="rotate(-15 30 35)" />
              </g>
              
              <g transform="translate(280, 300)">
                <ellipse cx="120" cy="100" rx="80" ry="90" fill="#FFE4B5" />
                <ellipse cx="90" cy="90" rx="25" ry="35" fill="#FFDAB9" />
                <ellipse cx="150" cy="90" rx="25" ry="35" fill="#FFDAB9" />
                
                <circle cx="120" cy="70" r="50" fill="#FFD4A3" />
                <path d="M 90 50 Q 100 35 110 45 Q 115 40 120 45 Q 125 40 130 45 Q 140 35 150 50" 
                      fill="#8B4513" stroke="#654321" strokeWidth="2" />
                
                <circle cx="108" cy="68" r="7" fill="#2C3E50" />
                <circle cx="132" cy="68" r="7" fill="#2C3E50" />
                <circle cx="110" cy="70" r="3" fill="white" />
                <circle cx="134" cy="70" r="3" fill="white" />
                
                <ellipse cx="120" cy="85" rx="8" ry="6" fill="#FF9999" opacity="0.6" />
                <path d="M 108 80 Q 120 88 132 80" stroke="#FF6B9D" strokeWidth="3" fill="none" strokeLinecap="round" />
                
                <rect x="60" y="150" width="120" height="140" rx="20" fill="#4ECDC4" />
                <rect x="90" y="165" width="60" height="50" rx="10" fill="#45B7AA" />
                
                <path d="M 60 190 L 40 240 L 50 280 L 75 285" stroke="#4ECDC4" strokeWidth="25" fill="none" strokeLinecap="round" />
                <path d="M 180 190 L 200 240 L 190 280 L 165 285" stroke="#4ECDC4" strokeWidth="25" fill="none" strokeLinecap="round" />
                
                <rect x="80" y="290" width="35" height="100" rx="12" fill="#2C5F6F" />
                <rect x="125" y="290" width="35" height="100" rx="12" fill="#2C5F6F" />
                <ellipse cx="97" cy="395" rx="22" ry="12" fill="#1E3A47" />
                <ellipse cx="142" cy="395" rx="22" ry="12" fill="#1E3A47" />
                
                <path d="M 135 165 Q 145 170 150 165" stroke="#2C3E50" strokeWidth="2" fill="none" />
              </g>
              
              <g transform="translate(500, 650)">
                <circle cx="0" cy="0" r="25" fill="#FFD700" opacity="0.3" />
                <path d="M -10 -5 L 0 -20 L 10 -5 L 5 0 L 15 15 L 0 8 L -15 15 L -5 0 Z" fill="#FFD93D" />
              </g>
              
              <g transform="translate(250, 400)">
                <circle cx="0" cy="0" r="20" fill="rgba(255,182,193,0.4)" />
              </g>
              
              <g transform="translate(600, 500)">
                <circle cx="0" cy="0" r="30" fill="rgba(135,206,235,0.4)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
