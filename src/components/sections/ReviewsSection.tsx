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
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-6">Отзывы</h2>
          <p className="text-2xl lg:text-3xl text-gray-600">Что говорят родители</p>
        </div>
        <Carousel className="max-w-6xl mx-auto">
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index}>
                <Card className="border-0 shadow-2xl rounded-3xl">
                  <CardHeader className="p-16">
                    <div className="flex gap-3 mb-8 justify-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={48} />
                      ))}
                    </div>
                    <CardDescription className="text-3xl text-gray-700 italic leading-relaxed mb-8 text-center">
                      "{review.text}"
                    </CardDescription>
                    <CardTitle className="text-turquoise text-3xl text-center">— {review.name}</CardTitle>
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