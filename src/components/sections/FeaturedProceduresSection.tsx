
import React, { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import ProcedureCard from "@/components/ProcedureCard";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";

const FeaturedProceduresSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-16 relative bg-rosa-claro">
      <div className="container-custom">
        <div className="animate-on-scroll text-">
          <SectionTitle 
            title="Procedimientos destacados" 
            subtitle="Tratamientos personalizados con los más altos estándares"
            hideLine={true}
          />
        </div>
        
        <div className="animate-on-scroll relative max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="h-[600px]">
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-6 h-full">
                  <ProcedureCard
                    title="Rinoplastia"
                    description="Armoniza la forma y funcionalidad de la nariz, mejorando tanto la estética como la respiración."
                    link="/procedimientos"
                    imageSrc="/lovable-uploads/4595e78e-5fb5-4554-af82-3b5386081e5a.png"
                  />
                </div>
              </CarouselItem>
              
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-6 h-full">
                  <ProcedureCard
                    title="Aumento mamario"
                    description="Realza el volumen y la forma de los senos para una apariencia más armónica y natural."
                    link="/procedimientos"
                    imageSrc="/lovable-uploads/371b18e7-0749-4015-9787-163ab28fe24b.png"
                  />
                </div>
              </CarouselItem>
              
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-6 h-full">
                  <ProcedureCard
                    title="Botox"
                    description="Tratamiento no invasivo para suavizar líneas de expresión y prevenir signos de envejecimiento."
                    link="/procedimientos"
                    imageSrc="/lovable-uploads/00472de7-6b8d-441f-ab84-6d52d2dd899e.png"
                  />
                </div>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-6 h-full">
                  <ProcedureCard
                    title="Lipoescultura"
                    description="Remodela el contorno corporal eliminando acúmulos de grasa localizada para una silueta armónica."
                    link="/procedimientos"
                    imageSrc="/lovable-uploads/3980f895-566b-4465-8516-6c1cd83ab4d1.png"
                  />
                </div>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-6 h-full">
                  <ProcedureCard
                    title="Blefaroplastia"
                    description="Rejuvenece la mirada eliminando el exceso de piel y grasa en los párpados superiores e inferiores."
                    link="/procedimientos"
                    imageSrc="/lovable-uploads/bleferoplastia.jpg"
                  />
                </div>
              </CarouselItem>

            </CarouselContent>
            
            <div className="absolute top-1/2 -translate-y-1/2 -left-6 z-10">
              <CarouselPrevious className="relative left-0 bg-white hover:bg-white/90 border-borgona/20 text-borgona hover:text-borgona shadow-lg h-10 w-10" />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-6 z-10">
              <CarouselNext className="relative right-0 bg-white hover:bg-white/90 border-borgona/20 text-borgona hover:text-borgona shadow-lg h-10 w-10" />
            </div>
          </Carousel>

          {/* Indicadores de posición */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: count }, (_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index + 1 === current 
                    ? 'bg-borgona scale-110' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white via-transparent opacity-5 animate-pulse-soft"></div>
    </section>
  );
};

export default FeaturedProceduresSection;
