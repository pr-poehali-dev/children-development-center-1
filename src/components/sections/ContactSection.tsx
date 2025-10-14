import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  return (
    <section id="контакты" className="min-h-screen flex items-center py-20 px-8 bg-gradient-to-br from-turquoise/10 to-cyan/10">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Контакты</h2>
          <p className="text-xl text-gray-600">Оставьте заявку, и мы свяжемся с вами</p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 mx-auto">
          <Card className="border-0 shadow-xl">
            <CardHeader className="p-8">
              <CardTitle className="text-navy text-3xl">Оставить заявку</CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Спасибо! Мы скоро свяжемся с вами.'); }}>
                <div>
                  <Input placeholder="Ваше имя" className="h-16 text-lg" required />
                </div>
                <div>
                  <Input type="tel" placeholder="Телефон" className="h-16 text-lg" required />
                </div>
                <div>
                  <Textarea placeholder="Сообщение (необязательно)" rows={6} className="text-lg" />
                </div>
                <Button type="submit" className="w-full bg-coral hover:bg-coral/90 h-16 text-xl">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-turquoise/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-turquoise" size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-navy text-2xl mb-3">Адрес</CardTitle>
                    <CardDescription className="text-lg leading-relaxed">г. Ульяновск, Новый город<br />ул. Карбышева, 49</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-mint/50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-navy" size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-navy text-2xl mb-3">Телефон</CardTitle>
                    <CardDescription className="text-lg">+7 908 479 58 63</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-yellow/50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-navy" size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-navy text-2xl mb-3">Режим работы</CardTitle>
                    <CardDescription className="text-lg leading-relaxed">Пн-Пт: 9:00 - 19:30<br />Сб-Вс: 10:00 - 14:00</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>

        <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl h-[500px]">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=48.401278%2C54.317635&z=17&l=map&pt=48.401278,54.317635,pm2rdm"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            style={{ position: 'relative' }}
            title="Карта: г. Ульяновск, ул. Карбышева, 49"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;