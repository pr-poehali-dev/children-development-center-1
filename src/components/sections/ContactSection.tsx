import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
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
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Спасибо! Мы скоро свяжемся с вами.'); }}>
                <div>
                  <Input placeholder="Ваше имя" className="h-11 sm:h-12" required />
                </div>
                <div>
                  <Input type="tel" placeholder="Телефон" className="h-11 sm:h-12" required />
                </div>
                <div>
                  <Textarea placeholder="Сообщение (необязательно)" rows={4} />
                </div>
                <Button type="submit" className="w-full bg-coral hover:bg-coral/90 h-11 sm:h-12 text-base sm:text-lg">
                  Отправить заявку
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
                    <CardDescription className="mt-1 sm:mt-2 text-sm sm:text-base">
                      1. г. Ульяновск, Новый город, ул. Карбышева, 49<br />
                      2. г. Ульяновск, ул. Генерала Кашубы, 4к2
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
    </section>
  );
};

export default ContactSection;