import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <img 
            src="https://cdn.poehali.dev/files/dd22a4e3-5081-43fc-ba0d-95a46b82f4fb.jpg" 
            alt="Мажорик логотип"
            className="h-20 w-auto object-contain"
          />
        </div>
        <p className="text-gray-400 mb-2">Детский центр в Ульяновске</p>
        <p className="text-gray-400 mb-4">г. Ульяновск, Новый город, ул. Карбышева, 49</p>
        <Separator className="my-6 bg-gray-700" />
        <p className="text-gray-500">© 2025 Мажорик. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
