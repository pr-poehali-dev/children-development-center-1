import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    const telegramMessage = message 
      ? `Новая заявка:\nИмя: ${name}\nТелефон: ${phone}\nСообщение: ${message}`
      : `Новая заявка:\nИмя: ${name}\nТелефон: ${phone}`;

    const token = '7788272864:AAEbLQOm8JYkuvdDY4i-E9zqg1w0R-txaqA';
    const chatId = '-1002490857796';
    const messageThreadId = '360';
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&message_thread_id=${messageThreadId}&text=${encodeURIComponent(telegramMessage)}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        setShowSuccessModal(true);
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error('Ошибка:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="контакты" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-turquoise/10 to-cyan/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-3 sm:mb-4">Контакты</h2>
          <p className="text-lg sm:text-xl text-gray-600">Оставьте заявку, и мы свяжемся с вами</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="border-0 shadow-xl">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-navy text-xl sm:text-2xl">Оставить заявку</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <Input name="name" placeholder="Ваше имя" className="h-11 sm:h-12" required />
                </div>
                <div>
                  <Input name="phone" type="tel" placeholder="Телефон" className="h-11 sm:h-12" required />
                </div>
                <div>
                  <Textarea name="message" placeholder="Сообщение (необязательно)" rows={4} />
                </div>
                <Button type="submit" className="w-full bg-coral hover:bg-coral/90 h-11 sm:h-12 text-base sm:text-lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-turquoise/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-turquoise" size={20} />
                  </div>
                  <div>
                    <CardTitle className="text-navy text-base sm:text-lg">Адреса</CardTitle>
                    <CardDescription className="mt-1 sm:mt-2 text-sm sm:text-base whitespace-nowrap">
                      г. Ульяновск, Новый город, ул. Карбышева, 49<br />
                      г. Ульяновск, ул. Генерала Кашубы, 4к2
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-mint/50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-navy" size={20} />
                  </div>
                  <div>
                    <CardTitle className="text-navy text-base sm:text-lg">Телефон</CardTitle>
                    <CardDescription className="mt-1 sm:mt-2 text-sm sm:text-base">+7 908 479 58 63</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow/50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-navy" size={20} />
                  </div>
                  <div>
                    <CardTitle className="text-navy text-base sm:text-lg">Режим работы</CardTitle>
                    <CardDescription className="mt-1 sm:mt-2 text-sm sm:text-base">Пн-Пт: 9:00 - 19:30<br />Сб-Вс: 10:00 - 14:00</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-navy text-center">Наши адреса на карте</h3>
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-80 sm:h-96 lg:h-[500px]">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=48.572000%2C54.376000&z=13&l=map&pt=48.578716,54.391165,pm2rdm~48.566087,54.360753,pm2gnm"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              style={{ position: 'relative' }}
              title="Карта с адресами"
            ></iframe>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-coral hover:bg-coral/90 text-white"
              onClick={() => window.open('https://yandex.ru/maps/195/ulyanovsk/house/ulitsa_karbysheva_49/YEEYcwBoTkQAQFtufX94cH1lYQ==/?ll=48.578716%2C54.391165&z=16.77', '_blank')}
            >
              <Icon name="Navigation" className="mr-2" size={18} />
              Маршрут к Карбышева, 49
            </Button>
            <Button
              className="bg-coral hover:bg-coral/90 text-white"
              onClick={() => window.open('https://yandex.ru/maps/195/ulyanovsk/house/ulitsa_generala_kashuby_4k2/YEEYcwFmSU0BQFtufX93cXtmZw==/?ll=48.566087%2C54.360753&z=16.77', '_blank')}
            >
              <Icon name="Navigation" className="mr-2" size={18} />
              Маршрут к Кашубы, 4к2
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className="relative w-20 h-20">
                <svg className="w-20 h-20" viewBox="0 0 100 100">
                  <circle
                    className="stroke-current text-mint"
                    strokeWidth="4"
                    fill="none"
                    cx="50"
                    cy="50"
                    r="46"
                    strokeDasharray="289"
                    strokeDashoffset="0"
                    style={{
                      animation: 'circle-draw 0.6s ease-in-out forwards'
                    }}
                  />
                  <path
                    className="stroke-current text-mint"
                    strokeWidth="4"
                    fill="none"
                    d="M 30 50 L 45 65 L 70 35"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="60"
                    strokeDashoffset="60"
                    style={{
                      animation: 'checkmark-draw 0.4s 0.6s ease-in-out forwards'
                    }}
                  />
                </svg>
              </div>
            </div>
            <DialogTitle className="text-2xl text-center text-navy">Ваша заявка успешно принята!</DialogTitle>
            <DialogDescription className="text-center text-lg pt-4">
              Мы скоро с вами свяжемся
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button onClick={() => setShowSuccessModal(false)} className="bg-coral hover:bg-coral/90">
              Закрыть
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <style>{`
        @keyframes circle-draw {
          from {
            stroke-dashoffset: 289;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes checkmark-draw {
          from {
            stroke-dashoffset: 60;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;