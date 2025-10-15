import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ClassItem {
  emoji: string;
  name: string;
  age: string;
  time: string;
  teacher: string;
  price: string;
}

interface ScheduleDay {
  day: string;
  classes: ClassItem[];
}

const schedule: ScheduleDay[] = [
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

const ScheduleSection = () => {
  return (
    <section id="расписание" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-3 sm:mb-4">Расписание</h2>
          <p className="text-lg sm:text-xl text-gray-600">График работы и занятий</p>
        </div>
        <div className="grid gap-6 max-w-6xl mx-auto">
          {schedule.map((item, index) => (
            <Card key={index} className="border-0 shadow-xl overflow-hidden hover-scale">
              <div className="bg-gradient-to-r from-coral to-coral/80 px-4 sm:px-6 py-3 sm:py-4">
                <CardTitle className="text-white text-xl sm:text-2xl font-bold">{item.day}</CardTitle>
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-4">
                  {item.classes.map((cls, clsIndex) => (
                    <div key={clsIndex} className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-turquoise/5 hover:bg-turquoise/10 transition-colors">
                      <div className="text-2xl sm:text-3xl flex-shrink-0">{cls.emoji}</div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <div>
                            <h3 className="font-bold text-navy text-base sm:text-lg">{cls.name}</h3>
                            <p className="text-xs sm:text-sm text-gray-600">Возраст: {cls.age}</p>
                          </div>
                          <Badge className="bg-coral/20 text-coral border-coral text-xs sm:text-sm">{cls.time}</Badge>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-700"><span className="font-semibold">Педагог:</span> {cls.teacher}</p>
                        <p className="text-xs sm:text-sm font-semibold text-turquoise">{cls.price}</p>
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
  );
};

export default ScheduleSection;