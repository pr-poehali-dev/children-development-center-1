import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6 sm:mb-8 text-sm sm:text-base"
        >
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          Назад на главную
        </Button>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 sm:mb-8">Политика конфиденциальности</h1>
        
        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3 sm:mb-4">1. Общие положения</h2>
            <p className="leading-relaxed">
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных 
              пользователей сайта детского центра "Мажорик" (далее — Сайт).
            </p>
            <p className="leading-relaxed">
              Используя Сайт, вы соглашаетесь с условиями настоящей Политики конфиденциальности. 
              Если вы не согласны с условиями, пожалуйста, не используйте Сайт.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3 sm:mb-4">2. Собираемая информация</h2>
            <p className="leading-relaxed">
              При использовании формы обратной связи на Сайте мы можем собирать следующую информацию:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Имя</li>
              <li>Номер телефона</li>
              <li>Сообщение (если указано)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3 sm:mb-4">3. Цели обработки данных</h2>
            <p className="leading-relaxed">
              Мы используем предоставленную вами информацию для:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Связи с вами для ответа на запросы</li>
              <li>Предоставления информации о наших услугах</li>
              <li>Записи на занятия и консультации</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3 sm:mb-4">4. Защита данных</h2>
            <p className="leading-relaxed">
              Мы принимаем все необходимые меры для защиты ваших персональных данных от несанкционированного 
              доступа, изменения, раскрытия или уничтожения.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3 sm:mb-4">5. Передача данных третьим лицам</h2>
            <p className="leading-relaxed">
              Мы не передаем ваши персональные данные третьим лицам без вашего согласия, 
              за исключением случаев, предусмотренных законодательством Российской Федерации.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3 sm:mb-4">6. Ваши права</h2>
            <p className="leading-relaxed">
              Вы имеете право:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Получать информацию о обработке ваших персональных данных</li>
              <li>Требовать уточнения, блокирования или удаления ваших данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3 sm:mb-4">7. Контактная информация</h2>
            <p className="leading-relaxed">
              Если у вас есть вопросы относительно настоящей Политики конфиденциальности, 
              вы можете связаться с нами:
            </p>
            <ul className="list-none space-y-2">
              <li><strong>Телефон:</strong> +7 908 479 58 63</li>
              <li><strong>Адрес:</strong> г. Ульяновск, ул. Карбышева, 49</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3 sm:mb-4">8. Изменения в Политике</h2>
            <p className="leading-relaxed">
              Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. 
              Все изменения вступают в силу с момента их публикации на Сайте.
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-12">
            Последнее обновление: 14 октября 2025 года
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;