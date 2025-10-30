
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import NannyService from "./pages/NannySevice";
import EarlyDevelopment from "./pages/EarlyDevelopment";
import SchoolPreparation from "./pages/SchoolPreparation";
import EnglishForKids from "./pages/EnglishForKids";
import MiniGarden from "./pages/MiniGarden";
import LogopedService from "./pages/LogopedService";
import ChessForKids from "./pages/ChessForKids";
import ArtTherapy from "./pages/ArtTherapy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/nyanya" element={<NannyService />} />
          <Route path="/rannee-razvitie" element={<EarlyDevelopment />} />
          <Route path="/podgotovka-k-shkole" element={<SchoolPreparation />} />
          <Route path="/angliyskiy-dlya-detey" element={<EnglishForKids />} />
          <Route path="/mini-sad" element={<MiniGarden />} />
          <Route path="/logoped" element={<LogopedService />} />
          <Route path="/shahmaty" element={<ChessForKids />} />
          <Route path="/art-terapiya" element={<ArtTherapy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;