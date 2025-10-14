import { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface Service {
  id: string;
  title: string;
  price: number;
  unit: string;
}

const servicesPricing: Service[] = [
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

interface CalculatorSectionProps {
  selectedServices: Record<string, number>;
  handleServiceChange: (id: string, value: number) => void;
  scrollToSection: (id: string) => void;
}

const CalculatorSection = ({ selectedServices, handleServiceChange, scrollToSection }: CalculatorSectionProps) => {
  const totalCost = useMemo(() => {
    return Object.entries(selectedServices).reduce((sum, [id, count]) => {
      const service = servicesPricing.find(s => s.id === id);
      return sum + (service ? service.price * count : 0);
    }, 0);
  }, [selectedServices]);

  return (
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
  );
};

export default CalculatorSection;
