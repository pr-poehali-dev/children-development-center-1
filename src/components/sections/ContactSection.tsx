import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  return (
    <section id="контакты" className="min-h-screen flex items-center py-20 px-4 lg:px-8 bg-gradient-to-br from-turquoise/10 to-cyan/10">
      <div className="w-full max-w-[1800px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-6">Контакты</h2>
          <p className="text-2xl lg:text-3xl text-gray-600">Оставьте заявку, и мы свяжемся с вами</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <Card className="border-0 shadow-2xl rounded-3xl">
            <CardHeader className="p-10">
              <CardTitle className="text-navy text-4xl">Оставить заявку</CardTitle>
            </CardHeader>
            <CardContent className="p-10 pt-0">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Спасибо! Мы скоро свяжемся с вами.'); }}>
                <div>
                  <Input placeholder="Ваше имя" className="h-16 text-xl rounded-xl" required />
                </div>
                <div>
                  <Input type="tel" placeholder="Телефон" className="h-16 text-xl rounded-xl" required />
                </div>
                <div>
                  <Textarea placeholder="Сообщение (необязательно)" rows={5} className="text-xl rounded-xl" />
                </div>
                <Button type="submit" className="w-full bg-coral hover:bg-coral/90 h-16 text-xl rounded-xl">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-0 shadow-2xl rounded-3xl">
              <CardHeader className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-turquoise/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-turquoise" size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-navy text-3xl mb-3">Адрес</CardTitle>
                    <CardDescription className="text-xl leading-relaxed">г. Ульяновск, Новый город<br />ул. Карбышева, 49</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-2xl rounded-3xl">
              <CardHeader className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-mint/50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-navy" size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-navy text-3xl mb-3">Телефон</CardTitle>
                    <CardDescription className="text-xl">+7 908 479 58 63</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-2xl rounded-3xl">
              <CardHeader className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-yellow/50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-navy" size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-navy text-3xl mb-3">Режим работы</CardTitle>
                    <CardDescription className="text-xl leading-relaxed">Пн-Пт: 9:00 - 19:30<br />Сб-Вс: 10:00 - 14:00</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>

        <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl h-[600px]">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=48.394886%2C54.313611&z=17&l=map&pt=48.394886,54.313611,pm2rdm"
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
