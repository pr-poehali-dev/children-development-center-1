import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState<Record<string, number>>({});

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

  const teachers = [
    { name: 'Ольга Анатольевна', role: 'Педагог мини-сада и подготовки к школе', experience: '15+ лет опыта', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop' },
    { name: 'Лилия Николаевна', role: 'Педагог раннего развития', experience: '10+ лет опыта', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
    { name: 'Елизавета Сергеевна', role: 'Логопед', experience: '8+ лет опыта', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop' },
    { name: 'Надежда Сергеевна', role: 'Педагог развивающих занятий', experience: '12+ лет опыта', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop' },
    { name: 'Алина Сергеевна', role: 'Преподаватель английского', experience: '9+ лет опыта', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop' },
    { name: 'Татьяна Петровна', role: 'Педагог по рисованию', experience: '14+ лет опыта', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop' },
  ];

  const reviews = [
    { name: 'Екатерина М.', text: 'Отличный центр! Ребёнок ходит с удовольствием. Преподаватели — профессионалы своего дела.', rating: 5 },
    { name: 'Алексей П.', text: 'Очень благодарны логопеду Елизавете Сергеевне! За 3 месяца невероятный прогресс у сына.', rating: 5 },
    { name: 'Наталья К.', text: 'Уютная атмосфера, внимательный персонал. Дочка каждый день просится на занятия!', rating: 5 },
    { name: 'Дмитрий С.', text: 'Рекомендую всем! Индивидуальный подход к каждому ребёнку.', rating: 5 },
  ];

  const schedule = [
    {
      day: 'Понедельник',
      classes: [
        { emoji: '👶👧', name: 'Мини-сад', age: 'от 3 лет', time: '9:00-13:00', teacher: 'Ольга Анатольевна и Лилия Николаевна', price: '7500₽ (12 занятий)' },
        { emoji: '👩🧑', name: 'Говорушки', age: '3-4 года', time: '17:00-18:00', teacher: 'Елизавета Сергеевна', price: 'Абонемент: 4500₽, Разово: 650₽' },
        { emoji: '📔', name: 'Английский язык', age: 'от 3 до 6 лет', time: '17:00-18:30', teacher: 'Алина Сергеевна', price: 'Абонемент: 3000₽' },
      ]
    },
    {
      day: 'Вторник',
      classes: [
        { emoji: '👼🏼', name: 'Вместе с мамой', age: '1-1.5 года', time: '9:00-10:00', teacher: 'Лилия Николаевна', price: 'Абонемент: 4000₽, Разово: 650₽' },
        { emoji: '👼🏼', name: 'Вместе с мамой', age: '1-1.5 года', time: '10:00-11:00', teacher: 'Лилия Николаевна', price: 'Абонемент: 4000₽, Разово: 650₽' },
        { emoji: '👼🏼', name: 'Вместе с мамой', age: '1.5-2.5 года', time: '11:00-12:00', teacher: 'Лилия Николаевна', price: 'Абонемент: 4000₽, Разово: 650₽' },
        { emoji: '🧸📚', name: 'Учусь, играя', age: '4-5 лет', time: '17:00-18:00', teacher: 'Надежда Сергеевна', price: 'Абонемент: 4000₽, Разово: 650₽' },
        { emoji: '🧮📖', name: 'Скоро в школу', age: '6-7 лет', time: '17:15-18:15', teacher: 'Ольга Анатольевна', price: 'Абонемент: 4000₽, Разово: 650₽' },
      ]
    },
    {
      day: 'Среда',
      classes: [
        { emoji: '👶👧', name: 'Мини-сад', age: 'от 3 лет', time: '9:00-13:00', teacher: 'Ольга Анатольевна и Лилия Николаевна', price: '7500₽ (12 занятий)' },
        { emoji: '👩🧑', name: 'Говорушки', age: '3-4 года', time: '17:00-18:00', teacher: 'Елизавета Сергеевна', price: 'Абонемент: 4500₽, Разово: 650₽' },
        { emoji: '📔', name: 'Английский язык', age: '10-11 лет', time: '18:30-19:30', teacher: 'Алина Сергеевна', price: 'Абонемент: 4000₽' },
      ]
    },
    {
      day: 'Четверг',
      classes: [
        { emoji: '👼🏼', name: 'Вместе с мамой', age: '1-1.5 года', time: '9:00-10:00', teacher: 'Лилия Николаевна', price: 'Абонемент: 4000₽, Разово: 650₽' },
        { emoji: '👼🏼', name: 'Вместе с мамой', age: '1-1.5 года', time: '10:00-11:00', teacher: 'Лилия Николаевна', price: 'Абонемент: 4000₽, Разово: 650₽' },
        { emoji: '👼🏼', name: 'Вместе с мамой', age: '1.5-2.5 года', time: '11:00-12:00', teacher: 'Лилия Николаевна', price: 'Абонемент: 4000₽, Разово: 650₽' },
        { emoji: '🧸📚', name: 'Учусь, играя', age: '4-5 лет', time: '17:00-18:00', teacher: 'Надежда Сергеевна', price: 'Абонемент: 4000₽, Разово: 650₽' },
        { emoji: '🧸📚', name: 'Учусь, играя', age: '5-6 лет', time: '18:30-19:30', teacher: 'Ольга Анатольевна', price: 'Абонемент: 4000₽, Разово: 650₽' },
        { emoji: '🧮📖', name: 'Скоро в школу', age: '6-7 лет', time: '17:15-18:15', teacher: 'Ольга Анатольевна', price: 'Абонемент: 4000₽, Разово: 650₽' },
      ]
    },
    {
      day: 'Пятница',
      classes: [
        { emoji: '👶👧', name: 'Мини-сад', age: 'от 3 лет', time: '9:00-13:00', teacher: 'Ольга Анатольевна и Лилия Николаевна', price: '7500₽ (12 занятий)' },
      ]
    },
    {
      day: 'Суббота',
      classes: [
        { emoji: '👩🧑', name: 'Говорушки', age: '3-4 года', time: '10:00-12:00', teacher: 'Ольга Анатольевна', price: '600₽/час' },
        { emoji: '🎨', name: 'Рисование', age: '4-12 лет', time: '10:15-11:15', teacher: 'Татьяна Петровна', price: '600₽' },
        { emoji: '🏞️', name: 'Мастер-класс', age: '4-12 лет', time: '11:15-12:15', teacher: 'Татьяна Петровна', price: '600₽' },
        { emoji: '🧮📖', name: 'Скоро в школу (экспресс)', age: 'Подготовка к школе', time: '12:15-14:00', teacher: 'Ольга Анатольевна', price: 'Абонемент: 3000₽' },
      ]
    },
    {
      day: 'Воскресенье',
      classes: [
        { emoji: '📔', name: 'Английский язык', age: '7-8 лет (1 класс)', time: '10:00-11:30', teacher: 'Алина Сергеевна', price: 'Абонемент: 3000₽' },
      ]
    },
  ];

  const servicesPricing = [
    { id: 'mini-sad', title: 'Мини-сад', price: 3500, unit: 'мес' },
    { id: 'mama', title: 'Вместе с мамой', price: 2500, unit: 'мес' },
    { id: 'govorushki', title: 'Говорушки', price: 2000, unit: 'мес' },
    { id: 'uchus', title: 'Учусь, играя', price: 2800, unit: 'мес' },
    { id: 'shkola', title: 'Скоро в школу', price: 2400, unit: 'мес' },
    { id: 'english', title: 'Английский язык', price: 3000, unit: 'мес' },
    { id: 'risovanie', title: 'Рисование', price: 1600, unit: 'мес' },
    { id: 'master', title: 'Мастер-класс', price: 1600, unit: 'мес' },
    { id: 'express', title: 'Экспресс-курс', price: 2200, unit: 'мес' },
  ];

  const totalCost = useMemo(() => {
    return Object.entries(selectedServices).reduce((sum, [id, count]) => {
      const service = servicesPricing.find(s => s.id === id);
      return sum + (service ? service.price * count : 0);
    }, 0);
  }, [selectedServices]);

  const handleServiceChange = (id: string, value: number) => {
    if (value <= 0) {
      const newServices = { ...selectedServices };
      delete newServices[id];
      setSelectedServices(newServices);
    } else {
      setSelectedServices({ ...selectedServices, [id]: value });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/dd22a4e3-5081-43fc-ba0d-95a46b82f4fb.jpg" 
                alt="Мажорик логотип"
                className="h-16 w-auto object-contain"
              />
            </div>
            
            <div className="hidden md:flex gap-8">
              {['Главная', 'Калькулятор', 'Преподаватели', 'Расписание', 'Отзывы', 'Контакты'].map((item) => (
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
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4 animate-fade-in">
              {['Главная', 'Калькулятор', 'Преподаватели', 'Расписание', 'Отзывы', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-3 text-navy hover:text-turquoise transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-turquoise/20 text-navy border-turquoise">Детский центр в Ульяновске</Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-navy leading-tight">
                Занятия для детей от 1 года
              </h1>
              <p className="text-xl text-gray-600">
                Мини-сад, раннее развитие, английский и другие программы. 
                Создаём пространство, где дети растут счастливыми!
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button 
                  size="lg" 
                  className="bg-coral hover:bg-coral/90 text-white"
                  onClick={() => scrollToSection('контакты')}
                >
                  Записаться на занятие
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('расписание')}
                >
                  Посмотреть расписание
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-turquoise/30 to-coral/30 rounded-[3rem] blur-3xl opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1587616211892-cc1b8faec8d4?w=800" 
                alt="Дети на занятии"
                className="relative rounded-[3rem] shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Наши занятия</h2>
            <p className="text-xl text-gray-600">Развивающие программы для каждого ребёнка</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover-scale border-0 shadow-lg overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-32 ${service.color} flex items-center justify-center`}>
                  <Icon name={service.icon} size={48} className="text-turquoise" />
                </div>
                <CardHeader>
                  <CardTitle className="text-navy">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.age}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="калькулятор" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Калькулятор услуг</h2>
            <p className="text-xl text-gray-600">Рассчитайте стоимость занятий для вашего ребёнка</p>
          </div>
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-navy text-2xl">Выберите занятия</CardTitle>
              <CardDescription>Укажите количество занятий в месяц</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {servicesPricing.map((service) => (
                  <div key={service.id} className="flex items-center justify-between p-4 rounded-xl bg-turquoise/5 hover:bg-turquoise/10 transition-colors">
                    <div className="flex-1">
                      <h3 className="font-semibold text-navy">{service.title}</h3>
                      <p className="text-sm text-gray-600">{service.price} ₽/{service.unit}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleServiceChange(service.id, (selectedServices[service.id] || 0) - 1)}
                        disabled={!selectedServices[service.id]}
                        className="h-8 w-8 p-0"
                      >
                        <Icon name="Minus" size={16} />
                      </Button>
                      <span className="w-8 text-center font-semibold">{selectedServices[service.id] || 0}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleServiceChange(service.id, (selectedServices[service.id] || 0) + 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Icon name="Plus" size={16} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Separator className="my-6" />
              <div className="flex items-center justify-between p-6 rounded-xl bg-coral/10">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Итого к оплате</p>
                  <p className="text-3xl font-bold text-coral">{totalCost.toLocaleString()} ₽</p>
                </div>
                <Button 
                  size="lg" 
                  className="bg-coral hover:bg-coral/90 text-white"
                  onClick={() => scrollToSection('контакты')}
                  disabled={totalCost === 0}
                >
                  Записаться
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="преподаватели" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Преподаватели</h2>
            <p className="text-xl text-gray-600">Профессиональная команда экспертов</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <Card key={index} className="text-center hover-scale border-0 shadow-lg">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Avatar className="w-32 h-32">
                      <AvatarImage src={teacher.image} />
                      <AvatarFallback>{teacher.name[0]}</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-navy">{teacher.name}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{teacher.role}</CardDescription>
                  <Badge variant="secondary" className="mt-2">{teacher.experience}</Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="расписание" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Расписание</h2>
            <p className="text-xl text-gray-600">График работы и занятий</p>
          </div>
          <div className="grid gap-6 max-w-6xl mx-auto">
            {schedule.map((item, index) => (
              <Card key={index} className="border-0 shadow-xl overflow-hidden hover-scale">
                <div className="bg-gradient-to-r from-coral to-coral/80 px-6 py-4">
                  <CardTitle className="text-white text-2xl font-bold">{item.day}</CardTitle>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {item.classes.map((cls, clsIndex) => (
                      <div key={clsIndex} className="flex gap-4 p-4 rounded-xl bg-turquoise/5 hover:bg-turquoise/10 transition-colors">
                        <div className="text-3xl flex-shrink-0">{cls.emoji}</div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-start justify-between gap-4 flex-wrap">
                            <div>
                              <h3 className="font-bold text-navy text-lg">{cls.name}</h3>
                              <p className="text-sm text-gray-600">Возраст: {cls.age}</p>
                            </div>
                            <Badge className="bg-coral/20 text-coral border-coral">{cls.time}</Badge>
                          </div>
                          <p className="text-sm text-gray-700"><span className="font-semibold">Педагог:</span> {cls.teacher}</p>
                          <p className="text-sm font-semibold text-turquoise">{cls.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Отзывы</h2>
            <p className="text-xl text-gray-600">Что говорят родители</p>
          </div>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index}>
                  <Card className="border-0 shadow-xl">
                    <CardHeader>
                      <div className="flex gap-1 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={24} />
                        ))}
                      </div>
                      <CardDescription className="text-lg text-gray-700 italic">
                        "{review.text}"
                      </CardDescription>
                      <CardTitle className="text-turquoise mt-4">— {review.name}</CardTitle>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-gradient-to-br from-turquoise/10 to-cyan/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Оставьте заявку, и мы свяжемся с вами</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-navy">Оставить заявку</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Спасибо! Мы скоро свяжемся с вами.'); }}>
                  <div>
                    <Input placeholder="Ваше имя" className="h-12" required />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" className="h-12" required />
                  </div>
                  <div>
                    <Textarea placeholder="Сообщение (необязательно)" rows={4} />
                  </div>
                  <Button type="submit" className="w-full bg-coral hover:bg-coral/90 h-12">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-turquoise/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-turquoise" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-navy text-lg">Адрес</CardTitle>
                      <CardDescription className="mt-2">г. Ульяновск, Новый город<br />ул. Карбышева, 49</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-mint/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-navy" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-navy text-lg">Телефон</CardTitle>
                      <CardDescription className="mt-2">+7 908 479 58 63</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="text-navy" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-navy text-lg">Режим работы</CardTitle>
                      <CardDescription className="mt-2">Пн-Пт: 9:00 - 19:30<br />Сб-Вс: 10:00 - 14:00</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>

          <div className="mt-12 rounded-3xl overflow-hidden shadow-2xl h-96">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=48.413845%2C54.335877&z=17&l=map&pt=48.413845,54.335877,pm2rdm"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              style={{ position: 'relative' }}
              title="Карта"
            ></iframe>
          </div>
        </div>
      </section>

      <footer className="bg-navy text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img 
              src="https://cdn.poehali.dev/files/dd22a4e3-5081-43fc-ba0d-95a46b82f4fb.jpg" 
              alt="Мажорик логотип"
              className="h-20 w-auto object-contain"
            />
          </div>
          <p className="text-gray-400 mb-2">Детский центр в Ульяновске</p>
          <p className="text-gray-400 mb-4">г. Ульяновск, Новый город, ул. Карбышева, 49</p>
          <Separator className="my-6 bg-gray-700" />
          <p className="text-gray-500">© 2025 Мажорик. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;