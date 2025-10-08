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
    { title: 'Мини-сад', age: 'от 3 лет', icon: 'Home', color: 'bg-gradient-to-br from-pink-200 to-pink-300' },
    { title: 'Логопед', age: 'индивидуально', icon: 'MessageCircle', color: 'bg-gradient-to-br from-yellow-200 to-yellow-300' },
    { title: 'Английский', age: 'от 5 лет', icon: 'Globe', color: 'bg-gradient-to-br from-cyan-200 to-cyan-300' },
    { title: 'Шахматы', age: 'от 5 лет', icon: 'Trophy', color: 'bg-gradient-to-br from-purple-200 to-purple-300' },
    { title: 'Рисование', age: 'от 4 лет', icon: 'Palette', color: 'bg-gradient-to-br from-mint-200 to-mint-300' },
    { title: 'Психолог', age: 'любой возраст', icon: 'Heart', color: 'bg-gradient-to-br from-rose-200 to-rose-300' },
  ];

  const teachers = [
    { name: 'Анна Смирнова', role: 'Логопед', experience: '12 лет опыта', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anna' },
    { name: 'Мария Петрова', role: 'Преподаватель английского', experience: '8 лет опыта', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria' },
    { name: 'Елена Козлова', role: 'Психолог', experience: '15 лет опыта', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena' },
    { name: 'Ольга Новикова', role: 'Педагог раннего развития', experience: '10 лет опыта', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Olga' },
  ];

  const reviews = [
    { name: 'Екатерина М.', text: 'Отличный центр! Ребёнок ходит с удовольствием. Преподаватели — профессионалы своего дела.', rating: 5 },
    { name: 'Алексей П.', text: 'Очень благодарны логопеду Анне! За 3 месяца невероятный прогресс у сына.', rating: 5 },
    { name: 'Наталья К.', text: 'Уютная атмосфера, внимательный персонал. Дочка каждый день просится на занятия!', rating: 5 },
    { name: 'Дмитрий С.', text: 'Рекомендую всем! Индивидуальный подход к каждому ребёнку.', rating: 5 },
  ];

  const schedule = [
    { day: 'Понедельник', time: '09:00 - 19:00', classes: 'Мини-сад, Английский, Логопед' },
    { day: 'Вторник', time: '09:00 - 19:00', classes: 'Мини-сад, Рисование, Шахматы' },
    { day: 'Среда', time: '09:00 - 19:00', classes: 'Мини-сад, Английский, Психолог' },
    { day: 'Четверг', time: '09:00 - 19:00', classes: 'Мини-сад, Логопед, Рисование' },
    { day: 'Пятница', time: '09:00 - 19:00', classes: 'Мини-сад, Шахматы, Английский' },
    { day: 'Суббота', time: '10:00 - 16:00', classes: 'Группы выходного дня' },
  ];

  const prices = [
    { title: 'Разовое занятие', price: '800₽', features: ['1 занятие', 'Любое направление', 'Без абонемента'] },
    { title: 'Абонемент 8 занятий', price: '5600₽', features: ['8 занятий', 'Любое направление', 'Скидка 12%'], popular: true },
    { title: 'Мини-сад (полдня)', price: '12000₽/мес', features: ['Пн-Пт 9:00-13:00', 'Питание включено', 'Развивающие занятия'] },
    { title: 'Мини-сад (полный день)', price: '18000₽/мес', features: ['Пн-Пт 9:00-19:00', 'Питание включено', 'Все занятия'] },
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
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-turquoise to-cyan rounded-2xl flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold text-navy">Мажорик</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {['Главная', 'Галерея', 'Преподаватели', 'Расписание', 'Отзывы', 'Цены', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-navy hover:text-turquoise transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 animate-fade-in">
              {['Главная', 'Галерея', 'Преподаватели', 'Расписание', 'Отзывы', 'Цены', 'Контакты'].map((item) => (
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

      {/* Hero Section */}
      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-mint text-navy">Детский центр в Ульяновске</Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-navy leading-tight">
                Занятия для детей от 3 лет
              </h1>
              <p className="text-xl text-gray-600">
                Мини-сад, логопед, английский и другие развивающие курсы. 
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
                  onClick={() => scrollToSection('цены')}
                >
                  Посмотреть цены
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

      {/* Services */}
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
                  <CardDescription className="text-lg">{service.age}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
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

      {/* Teachers */}
      <section id="преподаватели" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Преподаватели</h2>
            <p className="text-xl text-gray-600">Профессиональная команда экспертов</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <CardDescription className="text-lg">{teacher.role}</CardDescription>
                  <Badge variant="secondary" className="mt-2">{teacher.experience}</Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
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
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="sm:w-1/4">
                      <CardTitle className="text-turquoise">{item.day}</CardTitle>
                      <p className="text-gray-600 mt-1">{item.time}</p>
                    </div>
                    <Separator orientation="vertical" className="hidden sm:block h-12" />
                    <div className="sm:w-3/4">
                      <p className="text-gray-700">{item.classes}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
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

      {/* Prices */}
      <section id="цены" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Цены</h2>
            <p className="text-xl text-gray-600">Прозрачные тарифы без скрытых платежей</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {prices.map((price, index) => (
              <Card 
                key={index} 
                className={`hover-scale border-0 shadow-lg ${
                  price.popular ? 'ring-2 ring-turquoise' : ''
                }`}
              >
                {price.popular && (
                  <div className="bg-turquoise text-white text-center py-2 font-medium">
                    Популярный
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-navy">{price.title}</CardTitle>
                  <div className="text-4xl font-bold text-turquoise mt-4">{price.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {price.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-mint mt-1" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6 bg-turquoise hover:bg-turquoise/90"
                    onClick={() => scrollToSection('контакты')}
                  >
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
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
                      <CardDescription className="mt-2">г. Ульяновск, ул. Еремецкого, 38</CardDescription>
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
                      <Icon name="Mail" className="text-navy" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-navy text-lg">Email</CardTitle>
                      <CardDescription className="mt-2">info@majorik.com</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 rounded-3xl overflow-hidden shadow-2xl h-96">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=48.574368%2C54.388171&mode=whatshere&whatshere%5Bpoint%5D=48.574369%2C54.388171&whatshere%5Bzoom%5D=17&z=17"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              style={{ position: 'relative' }}
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-turquoise to-cyan rounded-2xl flex items-center justify-center">
              <Icon name="Sparkles" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold">Мажорик</span>
          </div>
          <p className="text-gray-400 mb-4">Детский центр в Ульяновске</p>
          <Separator className="my-6 bg-gray-700" />
          <p className="text-gray-500">© 2025 Мажорик. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
