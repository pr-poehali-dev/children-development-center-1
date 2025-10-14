import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-coral text-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <img 
            src="https://cdn.poehali.dev/files/dd22a4e3-5081-43fc-ba0d-95a46b82f4fb.jpg" 
            alt="Мажорик логотип"
            className="h-20 w-auto object-contain"
          />
        </div>
        <p className="text-white/90 mb-2 text-lg">Детский центр в Ульяновске</p>
        <p className="text-white/90 mb-4 text-lg">г. Ульяновск, Новый город, ул. Карбышева, 49</p>
        <Separator className="my-6 bg-white/30" />
        <p className="text-white/80">© 2025 Мажорик. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;