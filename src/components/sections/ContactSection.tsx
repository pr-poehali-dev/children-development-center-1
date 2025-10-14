import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  return (
    <section id="контакты" className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-br from-turquoise/10 to-cyan/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Контакты</h2>
          <p className="text-xl text-gray-600">Оставьте заявку, и мы свяжемся с вами</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-navy">Оставить заявку</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Спасибо! Мы скоро свяжемся с вами.'); }}>
                <div>
                  <Input placeholder="Ваше имя" className="h-12" required />
                </div>
                <div>
                  <Input type="tel" placeholder="Телефон" className="h-12" required />
                </div>
                <div>
                  <Textarea placeholder="Сообщение (необязательно)" rows={4} />
                </div>
                <Button type="submit" className="w-full bg-coral hover:bg-coral/90 h-12">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-turquoise/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-turquoise" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-navy text-lg">Адрес</CardTitle>
                    <CardDescription className="mt-2">г. Ульяновск, Новый город<br />ул. Карбышева, 49</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-mint/50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-navy" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-navy text-lg">Телефон</CardTitle>
                    <CardDescription className="mt-2">+7 908 479 58 63</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow/50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-navy" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-navy text-lg">Режим работы</CardTitle>
                    <CardDescription className="mt-2">Пн-Пт: 9:00 - 19:30<br />Сб-Вс: 10:00 - 14:00</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>

        <div className="mt-12 rounded-3xl overflow-hidden shadow-2xl h-96">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=48.413845%2C54.335877&z=17&l=map&pt=48.413845,54.335877,pm2rdm"
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