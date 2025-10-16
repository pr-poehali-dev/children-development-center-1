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
                    <CardTitle className="text-navy text-base sm:text-lg">Адрес</CardTitle>
                    <CardDescription className="mt-1 sm:mt-2 text-sm sm:text-base">г. Ульяновск, Новый город<br />ул. Карбышева, 49</CardDescription>
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

        <div className="mt-8 sm:mt-12 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-64 sm:h-80 lg:h-96">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=48.390000%2C54.350000&z=17&l=map&pt=48.390000,54.350000,pm2rdm"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            style={{ position: 'relative' }}
            title="Карта"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;