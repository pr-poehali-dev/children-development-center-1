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
  { name: 'Екатерина М.', text: 'Отличный центр! Ребёнок ходит с удовольствием. Преподаватели — профессионалы своего дела.', rating: 5 },
  { name: 'Алексей П.', text: 'Очень благодарны логопеду Елизавете Сергеевне! За 3 месяца невероятный прогресс у сына.', rating: 5 },
  { name: 'Наталья К.', text: 'Уютная атмосфера, внимательный персонал. Дочка каждый день просится на занятия!', rating: 5 },
  { name: 'Дмитрий С.', text: 'Рекомендую всем! Индивидуальный подход к каждому ребёнку.', rating: 5 },
];

const ReviewsSection = () => {
  return (
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
  );
};

export default ReviewsSection;
