import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Icon from '@/components/ui/icon';

const reviews = [
  { name: 'Екатерина М.', text: 'Отличный центр! Ребёнок ходит с удовольствием. Преподаватели — профессионалы своего дела. Очень довольны атмосферой и заботой о детях. Рекомендуем всем родителям!', rating: 5 },
  { name: 'Алексей П.', text: 'Очень благодарны логопеду Елизавете Сергеевне! За 3 месяца невероятный прогресс у сына. Теперь говорит чисто и уверенно. Профессионализм на высшем уровне!', rating: 5 },
  { name: 'Наталья К.', text: 'Уютная атмосфера, внимательный персонал. Дочка каждый день просится на занятия! Видно, что педагоги искренне любят детей и свою работу. Спасибо вам большое!', rating: 5 },
  { name: 'Дмитрий С.', text: 'Рекомендую всем! Индивидуальный подход к каждому ребёнку. Сын с удовольствием посещает мини-сад, приходит домой в отличном настроении. Качество занятий отличное!', rating: 5 },
  { name: 'Мария В.', text: 'Прекрасный детский центр! Английский с Алиной Сергеевной — это что-то невероятное. Дочь за полгода выучила столько слов и фраз! Занятия проходят в игровой форме.', rating: 5 },
  { name: 'Игорь Т.', text: 'Очень рады, что нашли этот центр! Преподаватели настоящие профессионалы, которые находят подход к каждому ребенку. Сын ходит на подготовку к школе — результаты впечатляют!', rating: 5 },
];

const ReviewsSection = () => {
  return (
    <section id="отзывы" className="min-h-screen flex items-center py-20 px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Отзывы</h2>
          <p className="text-xl text-gray-600">Что говорят родители</p>
        </div>
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index}>
                <Card className="border-0 shadow-xl">
                  <CardHeader className="p-12">
                    <div className="flex gap-2 mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={32} />
                      ))}
                    </div>
                    <CardDescription className="text-2xl text-gray-700 italic leading-relaxed mb-6">
                      "{review.text}"
                    </CardDescription>
                    <CardTitle className="text-turquoise text-2xl">— {review.name}</CardTitle>
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
  );
};

export default ReviewsSection;