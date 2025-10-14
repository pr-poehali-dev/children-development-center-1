import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const teachers = [
  { name: 'Ольга Анатольевна', role: 'Педагог мини-сада и подготовки к школе', experience: '15+ лет опыта', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop' },
  { name: 'Лилия Николаевна', role: 'Педагог раннего развития', experience: '10+ лет опыта', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
  { name: 'Елизавета Сергеевна', role: 'Логопед', experience: '8+ лет опыта', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop' },
  { name: 'Надежда Сергеевна', role: 'Педагог развивающих занятий', experience: '12+ лет опыта', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop' },
  { name: 'Алина Сергеевна', role: 'Преподаватель английского', experience: '9+ лет опыта', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop' },
  { name: 'Татьяна Петровна', role: 'Педагог по рисованию', experience: '14+ лет опыта', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop' },
];

const TeachersSection = () => {
  return (
    <section id="преподаватели" className="min-h-screen flex items-center py-20 px-4 bg-white">
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
  );
};

export default TeachersSection;