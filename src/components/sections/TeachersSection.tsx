import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const teachers = [
  { 
    name: 'Ольга Анатольевна', 
    role: 'Педагог мини-сада и подготовки к школе', 
    experience: '15+ лет опыта',
    description: 'Высшее педагогическое образование. Специалист по раннему развитию детей. Подготовила более 200 детей к школе.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop' 
  },
  { 
    name: 'Лилия Николаевна', 
    role: 'Педагог раннего развития', 
    experience: '10+ лет опыта',
    description: 'Сертифицированный специалист по методике Монтессори. Работает с детьми от 1 года. Автор развивающих программ.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' 
  },
  { 
    name: 'Елизавета Сергеевна', 
    role: 'Логопед', 
    experience: '8+ лет опыта',
    description: 'Логопед-дефектолог. Специализируется на коррекции речи у детей дошкольного возраста. Индивидуальный подход к каждому ребёнку.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop' 
  },
  { 
    name: 'Надежда Сергеевна', 
    role: 'Педагог развивающих занятий', 
    experience: '12+ лет опыта',
    description: 'Психолог и педагог. Ведёт комплексные занятия по развитию внимания, памяти и мышления. Создаёт дружелюбную атмосферу.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop' 
  },
  { 
    name: 'Алина Сергеевна', 
    role: 'Преподаватель английского', 
    experience: '9+ лет опыта',
    description: 'Лингвист, сертификат TESOL. Обучает детей английскому в игровой форме. Стажировки в Великобритании. Подготовка к Cambridge English.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop' 
  },
  { 
    name: 'Татьяна Петровна', 
    role: 'Педагог по рисованию', 
    experience: '14+ лет опыта',
    description: 'Художник-педагог. Обучает различным техникам рисования и лепке. Развивает творческие способности и воображение детей.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop' 
  },
];

const TeachersSection = () => {
  return (
    <section id="преподаватели" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Преподаватели</h2>
          <p className="text-xl text-gray-600">Профессиональная команда экспертов</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <Card key={index} className="text-center hover-scale border-0 shadow-lg">
              <CardHeader className="space-y-4">
                <div className="flex justify-center">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={teacher.image} />
                    <AvatarFallback>{teacher.name[0]}</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <CardTitle className="text-navy text-xl mb-2">{teacher.name}</CardTitle>
                  <CardDescription className="text-base font-medium text-turquoise mb-2">{teacher.role}</CardDescription>
                  <Badge variant="secondary" className="mb-3">{teacher.experience}</Badge>
                  <p className="text-sm text-gray-600 leading-relaxed text-left mt-3">{teacher.description}</p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;