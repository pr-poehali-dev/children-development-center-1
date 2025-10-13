import { useState } from 'react';
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

  const services = [
    { title: 'Мини-сад', age: 'от 3 лет, Пн/Ср/Пт 9:00-13:00', icon: 'Home', color: 'bg-gradient-to-br from-pink-200 to-pink-300' },
    { title: 'Вместе с мамой', age: '1-1.5 года, Вт/Чт 9:00-13:00', icon: 'Heart', color: 'bg-gradient-to-br from-yellow-200 to-yellow-300' },
    { title: 'Говорушки', age: '3-4 года, Пн/Ср 17:00-18:00', icon: 'MessageCircle', color: 'bg-gradient-to-br from-cyan-200 to-cyan-300' },
    { title: 'Учусь, играя', age: '4-6 лет, Вт/Чт 17:00-19:30', icon: 'BookOpen', color: 'bg-gradient-to-br from-purple-200 to-purple-300' },
    { title: 'Скоро в школу', age: '6-7 лет, Вт/Чт 17:15-18:15', icon: 'GraduationCap', color: 'bg-gradient-to-br from-mint-200 to-mint-300' },
    { title: 'Английский язык', age: 'от 3 до 11 лет', icon: 'Globe', color: 'bg-gradient-to-br from-rose-200 to-rose-300' },
    { title: 'Рисование', age: '4-12 лет, Сб 10:15-11:15', icon: 'Palette', color: 'bg-gradient-to-br from-pink-200 to-pink-300' },
    { title: 'Мастер-класс', age: '4-12 лет, Сб 11:15-12:15', icon: 'Paintbrush', color: 'bg-gradient-to-br from-yellow-200 to-yellow-300' },
    { title: 'Экспресс-курс', age: 'Подготовка к школе, Сб', icon: 'Zap', color: 'bg-gradient-to-br from-cyan-200 to-cyan-300' },
  ];

  const teachers = [
    { name: 'Ольга Анатольевна', role: 'Педагог мини-сада и подготовки к школе', experience: '15+ лет опыта', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Olga' },
    { name: 'Лилия Николаевна', role: 'Педагог раннего развития', experience: '10+ лет опыта', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Liliya' },
    { name: 'Елизавета Сергеевна', role: 'Логопед', experience: '8+ лет опыта', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elizaveta' },
    { name: 'Надежда Сергеевна', role: 'Педагог развивающих занятий', experience: '12+ лет опыта', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nadezhda' },
    { name: 'Алина Сергеевна', role: 'Преподаватель английского', experience: '9+ лет опыта', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alina' },
    { name: 'Татьяна Петровна', role: 'Педагог по рисованию', experience: '14+ лет опыта', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tatyana' },
  ];

  const reviews = [
    { name: 'Екатерина М.', text: 'Отличный центр! Ребёнок ходит с удовольствием. Преподаватели — профессионалы своего дела.', rating: 5 },
    { name: 'Алексей П.', text: 'Очень благодарны логопеду Елизавете Сергеевне! За 3 месяца невероятный прогресс у сына.', rating: 5 },
    { name: 'Наталья К.', text: 'Уютная атмосфера, внимательный персонал. Дочка каждый день просится на занятия!', rating: 5 },
    { name: 'Дмитрий С.', text: 'Рекомендую всем! Индивидуальный подход к каждому ребёнку.', rating: 5 },
  ];

  const schedule = [
    { day: 'Понедельник', classes: 'Мини-сад (9:00-13:00), Говорушки (17:00-18:00), Английский (17:00-18:30, 18:30-19:30)' },
    { day: 'Вторник', classes: 'Вместе с мамой (9:00-13:00), Учусь играя (17:00-18:00), Скоро в школу (17:15-18:15)' },
    { day: 'Среда', classes: 'Мини-сад (9:00-13:00), Говорушки (17:00-18:00), Английский (18:30-19:30)' },
    { day: 'Четверг', classes: 'Вместе с мамой (9:00-13:00), Учусь играя (17:00-18:00, 18:30-19:30), Скоро в школу (17:15-18:15)' },
    { day: 'Пятница', classes: 'Мини-сад (9:00-13:00)' },
    { day: 'Суббота', classes: 'Говорушки (10:00-12:00), Рисование (10:15-11:15), Мастер-класс (11:15-12:15), Экспресс-курс (12:15-14:00)' },
    { day: 'Воскресенье', classes: 'Английский язык 1 класс (10:00-11:30)' },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800',
    'https://images.unsplash.com/photo-1587616211892-cc1b8faec8d4?w=800',
    'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800',
    'https://images.unsplash.com/photo-1560421683-6856ea585c78?w=800',
    'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
  ];

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
              <div className="w-12 h-12 bg-gradient-to-br from-turquoise to-cyan rounded-2xl flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold text-navy">Мажорик</span>
            </div>
            
            <div className="hidden md:flex gap-8">
              {['Главная', 'Галерея', 'Преподаватели', 'Расписание', 'Отзывы', 'Контакты'].map((item) => (
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
              {['Главная', 'Галерея', 'Преподаватели', 'Расписание', 'Отзывы', 'Контакты'].map((item) => (
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
              <Badge className="bg-mint text-navy">Детский центр в Ульяновске</Badge>
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
                  className="bg-turquoise hover:bg-turquoise/90 text-white"
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
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-pink-200 to-yellow-200 rounded-[3rem] blur-3xl opacity-50"></div>
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
                  <Icon name={service.icon} size={48} className="text-white" />
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

      <section id="галерея" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Галерея</h2>
            <p className="text-xl text-gray-600">Моменты радости и развития</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((img, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-3xl shadow-lg hover-scale group"
              >
                <img 
                  src={img} 
                  alt={`Галерея ${index + 1}`}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
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
          <div className="grid gap-4 max-w-4xl mx-auto">
            {schedule.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover-scale">
                <CardHeader>
                  <div className="flex flex-col gap-3">
                    <CardTitle className="text-turquoise text-xl">{item.day}</CardTitle>
                    <p className="text-gray-700 leading-relaxed">{item.classes}</p>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4 bg-gradient-to-br from-pink-50 to-yellow-50">
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
                          <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
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
                  <Button type="submit" className="w-full bg-turquoise hover:bg-turquoise/90 h-12">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-turquoise/10 rounded-xl flex items-center justify-center flex-shrink-0">
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
              src="https://yandex.ru/map-widget/v1/?ll=48.389347%2C54.316821&z=17&l=map&pt=48.389347,54.316821,pm2rdm"
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
            <div className="w-12 h-12 bg-gradient-to-br from-turquoise to-cyan rounded-2xl flex items-center justify-center">
              <Icon name="Sparkles" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold">Мажорик</span>
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
