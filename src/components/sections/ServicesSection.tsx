const services = [
  { 
    title: 'Мини-сад', 
    subtitle: 'от 3х лет',
    icon: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="140" r="50" fill="rgba(255,150,150,0.3)" />
        <rect x="60" y="100" width="80" height="70" rx="10" fill="#2C3E50" stroke="#1a1a1a" strokeWidth="3" />
        <rect x="75" y="110" width="20" height="25" rx="3" fill="#FFD93D" />
        <rect x="105" y="110" width="20" height="25" rx="3" fill="#FFD93D" />
        <polygon points="100,70 55,100 145,100" fill="#FF6B6B" stroke="#d14545" strokeWidth="3" />
        <rect x="85" y="145" width="30" height="25" rx="3" fill="#8B4513" />
        <path d="M 70 130 Q 80 140 90 130" stroke="#555" strokeWidth="2" fill="none" />
      </svg>
    ),
    color: 'from-red-400 to-pink-400'
  },
  { 
    title: 'Логопед', 
    subtitle: '3-7 лет',
    icon: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="120" r="55" fill="rgba(100,200,200,0.3)" />
        <ellipse cx="70" cy="100" rx="25" ry="35" fill="#FFE4B5" />
        <ellipse cx="130" cy="100" rx="25" ry="35" fill="#FFE4B5" />
        <path d="M 75 90 Q 100 70 125 90" stroke="#2C3E50" strokeWidth="4" fill="none" strokeLinecap="round" />
        <rect x="55" y="130" width="90" height="50" rx="15" fill="#4ECDC4" />
        <path d="M 70 145 L 80 155 L 75 145" fill="none" stroke="#2C3E50" strokeWidth="3" strokeLinecap="round" />
        <path d="M 110 145 L 120 155 L 115 145" fill="none" stroke="#2C3E50" strokeWidth="3" strokeLinecap="round" />
        <circle cx="80" cy="95" r="6" fill="#2C3E50" />
        <circle cx="120" cy="95" r="6" fill="#2C3E50" />
      </svg>
    ),
    color: 'from-teal-400 to-cyan-400'
  },
  { 
    title: 'Вместе с мамой', 
    subtitle: '1-2.5 года',
    icon: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="120" cy="140" r="50" fill="rgba(255,200,100,0.3)" />
        <ellipse cx="130" cy="80" rx="30" ry="35" fill="#FFDAB9" />
        <circle cx="130" cy="70" r="25" fill="#FFE4B5" />
        <path d="M 100 60 Q 120 50 130 65" stroke="#8B4513" strokeWidth="4" fill="none" />
        <circle cx="122" cy="68" r="4" fill="#2C3E50" />
        <circle cx="138" cy="68" r="4" fill="#2C3E50" />
        <path d="M 122 78 Q 130 82 138 78" stroke="#FF6B9D" strokeWidth="2" fill="none" />
        <rect x="105" y="100" width="50" height="60" rx="15" fill="#98D8C8" />
        <ellipse cx="75" cy="140" rx="18" ry="20" fill="#FFDAB9" />
        <circle cx="75" cy="135" r="15" fill="#FFE4B5" />
        <circle cx="70" cy="133" r="3" fill="#2C3E50" />
        <circle cx="80" cy="133" r="3" fill="#2C3E50" />
        <rect x="63" y="150" width="24" height="30" rx="8" fill="#FFB6C1" />
      </svg>
    ),
    color: 'from-yellow-400 to-orange-300'
  },
  { 
    title: 'Учусь, играя', 
    subtitle: '4-6 лет',
    icon: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="130" r="50" fill="rgba(255,150,100,0.3)" />
        <g transform="translate(80, 120)">
          <rect x="0" y="30" width="40" height="10" rx="5" fill="#F4A261" />
          <rect x="10" y="20" width="20" height="20" rx="3" fill="#E76F51" />
          <circle cx="20" cy="15" r="8" fill="#E9C46A" />
          <circle cx="20" cy="8" r="5" fill="#2A9D8F" />
        </g>
        <rect x="50" y="80" width="35" height="40" rx="5" fill="#264653" />
        <circle cx="67" cy="75" r="18" fill="#FFE4B5" />
        <circle cx="62" cy="72" r="3" fill="#2C3E50" />
        <circle cx="72" cy="72" r="3" fill="#2C3E50" />
        <rect x="110" y="85" width="30" height="35" rx="5" fill="#E76F51" />
        <circle cx="125" cy="80" r="16" fill="#FFE4B5" />
        <circle cx="120" cy="78" r="3" fill="#2C3E50" />
        <circle cx="130" cy="78" r="3" fill="#2C3E50" />
      </svg>
    ),
    color: 'from-orange-400 to-red-400'
  },
  { 
    title: 'Скоро в школу', 
    subtitle: '5-6 лет',
    icon: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="130" r="50" fill="rgba(150,200,255,0.3)" />
        <rect x="60" y="100" width="80" height="60" rx="8" fill="#87CEEB" />
        <rect x="75" y="110" width="15" height="20" rx="2" fill="#FFF" />
        <rect x="110" y="110" width="15" height="20" rx="2" fill="#FFF" />
        <rect x="90" y="140" width="20" height="20" rx="2" fill="#8B4513" />
        <text x="78" y="125" fontSize="24" fill="#2C3E50" fontFamily="Arial" fontWeight="bold">01</text>
        <path d="M 100 90 L 65 105 L 70 100 L 100 85 L 130 100 L 135 105 Z" fill="#4682B4" />
      </svg>
    ),
    color: 'from-sky-400 to-blue-400'
  },
  { 
    title: 'Английский', 
    subtitle: 'от 5-8 лет',
    icon: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="130" r="50" fill="rgba(100,100,200,0.3)" />
        <rect x="50" y="90" width="100" height="70" rx="10" fill="#2C3E50" />
        <rect x="60" y="100" width="80" height="50" rx="5" fill="#4A5568" />
        <text x="75" y="135" fontSize="32" fill="#FFF" fontFamily="Arial" fontWeight="bold">EN</text>
        <rect x="70" y="145" width="60" height="4" rx="2" fill="#CBD5E0" />
        <rect x="75" y="152" width="50" height="3" rx="1.5" fill="#CBD5E0" />
      </svg>
    ),
    color: 'from-indigo-500 to-purple-500'
  },
  { 
    title: 'Говорушки', 
    subtitle: '3-4 года',
    icon: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="120" r="50" fill="rgba(150,255,150,0.3)" />
        <ellipse cx="90" cy="100" rx="30" ry="35" fill="#FFE4B5" />
        <ellipse cx="110" cy="100" rx="30" ry="35" fill="#FFE4B5" />
        <circle cx="100" cy="90" r="28" fill="#FFDAB9" />
        <circle cx="92" cy="88" r="5" fill="#2C3E50" />
        <circle cx="108" cy="88" r="5" fill="#2C3E50" />
        <path d="M 88 98 Q 100 108 112 98" stroke="#FF6B9D" strokeWidth="3" fill="none" strokeLinecap="round" />
        <ellipse cx="100" cy="125" rx="35" ry="25" fill="#FFB6C1" opacity="0.7" />
        <path d="M 75 115 Q 70 125 75 130" stroke="#FF6B9D" strokeWidth="3" fill="none" />
        <path d="M 125 115 Q 130 125 125 130" stroke="#FF6B9D" strokeWidth="3" fill="none" />
      </svg>
    ),
    color: 'from-green-400 to-emerald-400'
  },
  { 
    title: 'Рисование', 
    subtitle: '4-12 лет',
    icon: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="130" r="50" fill="rgba(255,200,255,0.3)" />
        <rect x="70" y="90" width="60" height="80" rx="5" fill="#FFF" stroke="#CBD5E0" strokeWidth="3" />
        <circle cx="85" cy="110" r="8" fill="#FF6B6B" />
        <rect x="100" y="105" width="20" height="12" fill="#4ECDC4" />
        <polygon points="85,135 95,145 75,145" fill="#FFD93D" />
        <path d="M 140 160 L 155 100 L 160 105 L 145 165 Z" fill="#F4A261" />
        <circle cx="157" cy="95" r="8" fill="#E76F51" />
      </svg>
    ),
    color: 'from-pink-400 to-rose-400'
  },
  { 
    title: 'Мастер-класс', 
    subtitle: '4-12 лет',
    icon: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="130" r="50" fill="rgba(255,220,150,0.3)" />
        <path d="M 100 80 L 130 110 L 100 140 L 70 110 Z" fill="#FFD93D" stroke="#F4A460" strokeWidth="3" />
        <circle cx="100" cy="110" r="18" fill="#FF6B6B" />
        <path d="M 85 95 L 100 80 L 115 95" fill="#4ECDC4" />
        <rect x="95" y="135" width="10" height="30" rx="2" fill="#8B4513" />
        <polygon points="75,165 125,165 120,175 80,175" fill="#654321" />
      </svg>
    ),
    color: 'from-amber-400 to-yellow-400'
  },
];

const ServicesSection = () => {
  return (
    <section className="min-h-screen flex items-center py-20 px-4 lg:px-8 bg-white">
      <div className="w-full max-w-[1800px] mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-6">Наши занятия</h2>
          <p className="text-2xl lg:text-3xl text-gray-600">Развивающие программы для каждого ребёнка</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`rounded-[2rem] p-8 bg-gradient-to-br ${service.color} hover:scale-105 transition-transform duration-300 shadow-xl cursor-pointer group relative overflow-hidden`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
              <div className="absolute top-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              
              <div className="relative">
                <div className="w-full h-48 mb-6 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-navy mb-2">{service.title}</h3>
                <p className="text-lg lg:text-xl text-navy/80 font-medium">{service.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
