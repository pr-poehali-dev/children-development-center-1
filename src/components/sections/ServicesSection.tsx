import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const services = [
  { 
    title: 'Мини-сад', 
    subtitle: 'от 3х лет',
    icon: 'Home', 
    bgColor: 'from-red-400 to-red-500',
    circleColor: 'bg-red-300/40'
  },
  { 
    title: 'Логопед', 
    subtitle: '',
    icon: 'MessageCircle', 
    bgColor: 'from-teal-400 to-teal-500',
    circleColor: 'bg-teal-300/40'
  },
  { 
    title: 'Вместе с мамой', 
    subtitle: '',
    icon: 'Heart', 
    bgColor: 'from-yellow-400 to-yellow-500',
    circleColor: 'bg-yellow-300/40'
  },
  { 
    title: 'Учусь, играя', 
    subtitle: '(от 4-6 лет)',
    icon: 'Gamepad2', 
    bgColor: 'from-orange-500 to-orange-600',
    circleColor: 'bg-orange-400/40'
  },
  { 
    title: 'Скоро в школу', 
    subtitle: '(от 5-6 лет)',
    icon: 'Calendar', 
    bgColor: 'from-sky-400 to-sky-500',
    circleColor: 'bg-sky-300/40'
  },
  { 
    title: 'Английский', 
    subtitle: '(от 5-8 лет)',
    icon: 'BookOpen', 
    bgColor: 'from-indigo-500 to-indigo-600',
    circleColor: 'bg-indigo-400/40'
  },
  { 
    title: 'Говорушки', 
    subtitle: '(от 3-4 лет)',
    icon: 'Users', 
    bgColor: 'from-red-400 to-red-500',
    circleColor: 'bg-red-300/40'
  },
  { 
    title: 'Шахматы', 
    subtitle: '',
    icon: 'Puzzle', 
    bgColor: 'from-teal-400 to-teal-500',
    circleColor: 'bg-teal-300/40'
  },
  { 
    title: 'Рисование + Мастер класс', 
    subtitle: '',
    icon: 'Palette', 
    bgColor: 'from-yellow-400 to-yellow-500',
    circleColor: 'bg-yellow-300/40'
  },
  { 
    title: 'Арт-терапия', 
    subtitle: '',
    icon: 'Paintbrush', 
    bgColor: 'from-orange-500 to-orange-600',
    circleColor: 'bg-orange-400/40'
  },
  { 
    title: 'Психолог', 
    subtitle: '',
    icon: 'User', 
    bgColor: 'from-sky-400 to-sky-500',
    circleColor: 'bg-sky-300/40'
  },
  { 
    title: 'Няня на час', 
    subtitle: '',
    icon: 'UserCheck', 
    bgColor: 'from-indigo-500 to-indigo-600',
    circleColor: 'bg-indigo-400/40'
  },
  { 
    title: 'Вместе с мамой', 
    subtitle: '',
    icon: 'Heart', 
    bgColor: 'from-yellow-400 to-yellow-500',
    circleColor: 'bg-yellow-300/40'
  },
  { 
    title: 'Рисование + Мастер класс', 
    subtitle: '',
    icon: 'Palette', 
    bgColor: 'from-yellow-400 to-yellow-500',
    circleColor: 'bg-yellow-300/40'
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-3 sm:mb-4">Наши занятия</h2>
          <p className="text-lg sm:text-xl text-gray-600">Развивающие программы для каждого ребёнка</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`hover-scale border-0 shadow-lg overflow-hidden !bg-gradient-to-br ${service.bgColor} relative group cursor-pointer transition-transform duration-300`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 sm:h-56 flex flex-col items-start justify-start p-6 overflow-hidden">
                <div className={`absolute bottom-4 right-4 w-32 h-32 sm:w-40 sm:h-40 ${service.circleColor} rounded-full blur-2xl`}></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 bg-white/30 rounded-full"></div>
                <div className="relative z-10 text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 leading-tight">
                    {service.title}
                  </h3>
                  {service.subtitle && (
                    <p className="text-sm sm:text-base text-white/90">{service.subtitle}</p>
                  )}
                </div>
                <div className="absolute bottom-8 right-8 transform transition-transform duration-300 group-hover:scale-110">
                  <div className={`w-24 h-24 sm:w-28 sm:h-28 ${service.circleColor} rounded-full flex items-center justify-center`}>
                    <Icon name={service.icon} size={48} className="text-gray-900/80" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;