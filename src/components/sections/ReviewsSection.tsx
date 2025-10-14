import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  { name: 'Екатерина М.', text: 'Отличный детский центр! Ребёнок ходит с огромным удовольствием каждый день. Преподаватели — настоящие профессионалы своего дела, находят подход к каждому малышу. Очень довольны результатами!', rating: 5 },
  { name: 'Алексей П.', text: 'Очень благодарны логопеду Елизавете Сергеевне! За 3 месяца занятий невероятный прогресс у сына — начал говорить намного чище и увереннее. Рекомендуем всем родителям!', rating: 5 },
  { name: 'Наталья К.', text: 'Уютная атмосфера, внимательный и заботливый персонал. Дочка каждый день просится на занятия и рассказывает, как интересно проводит время. Спасибо за вашу работу!', rating: 5 },
  { name: 'Дмитрий С.', text: 'Рекомендую всем родителям! Индивидуальный подход к каждому ребёнку, интересные программы обучения, развивающие игры. Сын стал более самостоятельным и уверенным в себе.', rating: 5 },
  { name: 'Ирина В.', text: 'Прекрасный центр развития! Преподаватели с большим опытом, всегда готовы помочь и ответить на любые вопросы. Дети занимаются с удовольствием, видим реальные результаты!', rating: 5 },
  { name: 'Сергей Л.', text: 'Отдали дочку на английский язык — результаты превзошли ожидания! Уже через месяц начала говорить простые фразы. Занятия проходят в игровой форме, ребёнку очень нравится!', rating: 5 },
];

const StarIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
          fill="#FFD700" stroke="#FFA500" strokeWidth="1" strokeLinejoin="round"/>
  </svg>
);

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
                        <StarIcon key={i} />
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
