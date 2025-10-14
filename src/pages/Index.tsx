import { useState } from 'react';
import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CalculatorSection from '@/components/sections/CalculatorSection';
import TeachersSection from '@/components/sections/TeachersSection';
import ScheduleSection from '@/components/sections/ScheduleSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

const Index = () => {
  const [selectedServices, setSelectedServices] = useState<Record<string, number>>({});

  const handleServiceChange = (id: string, value: number) => {
    if (value <= 0) {
      const newServices = { ...selectedServices };
      delete newServices[id];
      setSelectedServices(newServices);
    } else {
      setSelectedServices({ ...selectedServices, [id]: value });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ServicesSection />
      <CalculatorSection 
        selectedServices={selectedServices}
        handleServiceChange={handleServiceChange}
        scrollToSection={scrollToSection}
      />
      <TeachersSection />
      <ScheduleSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
