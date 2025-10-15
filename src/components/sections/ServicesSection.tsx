import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const services = [
  { title: 'Мини-сад', age: 'от 3 лет, Пн/Ср/Пт 9:00-13:00', icon: 'Home', color: 'bg-turquoise/20' },
  { title: 'Вместе с мамой', age: '1-1.5 года, Вт/Чт 9:00-13:00', icon: 'Heart', color: 'bg-coral/20' },
  { title: 'Говорушки', age: '3-4 года, Пн/Ср 17:00-18:00', icon: 'MessageCircle', color: 'bg-turquoise/20' },
  { title: 'Учусь, играя', age: '4-6 лет, Вт/Чт 17:00-19:30', icon: 'BookOpen', color: 'bg-coral/20' },
  { title: 'Скоро в школу', age: '6-7 лет, Вт/Чт 17:15-18:15', icon: 'GraduationCap', color: 'bg-turquoise/20' },
  { title: 'Английский язык', age: 'от 3 до 11 лет', icon: 'Globe', color: 'bg-coral/20' },
  { title: 'Рисование', age: '4-12 лет, Сб 10:15-11:15', icon: 'Palette', color: 'bg-turquoise/20' },
  { title: 'Мастер-класс', age: '4-12 лет, Сб 11:15-12:15', icon: 'Paintbrush', color: 'bg-coral/20' },
  { title: 'Экспресс-курс', age: 'Подготовка к школе, Сб', icon: 'Zap', color: 'bg-turquoise/20' },
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
              className="hover-scale border-0 shadow-lg overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-24 sm:h-32 ${service.color} flex items-center justify-center`}>
                <Icon name={service.icon} size={40} className="text-turquoise sm:w-12 sm:h-12" />
              </div>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-navy text-lg sm:text-xl">{service.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base leading-relaxed">{service.age}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;