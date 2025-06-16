
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Index from "./pages/Index";
import About from "./pages/About";
import Procedures from "./pages/Procedures";
import Results from "./pages/Results";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CirugiaFacial from "./pages/CirugiaFacial";
import CirugiaCorporal from "./pages/CirugiaCorporal";
import CirugiaMamaria from "./pages/CirugiaMamaria";
import EsteticaNoQuirurgica from "./pages/EsteticaNoQuirurgica";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/sobre-mi" element={<About />} />
                <Route path="/procedimientos" element={<Procedures />} />
                <Route path="/resultados-y-testimonios" element={<Results />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/cirugia-facial" element={<CirugiaFacial />} />
                <Route path="/cirugia-corporal" element={<CirugiaCorporal />} />
                <Route path="/cirugia-mamaria" element={<CirugiaMamaria />} />
                <Route path="/estetica-no-quirurgica" element={<EsteticaNoQuirurgica />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <WhatsAppButton />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
