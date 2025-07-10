
import React, { useEffect, useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel";

const TeamSection = () => {
  const [equipoApi, setEquipoApi] = useState<CarouselApi>();
  const [equipoCurrent, setEquipoCurrent] = useState(0);
  const [equipoCount, setEquipoCount] = useState(0);

  useEffect(() => {
    if (!equipoApi) {
      return;
    }

    setEquipoCount(equipoApi.scrollSnapList().length);
    setEquipoCurrent(equipoApi.selectedScrollSnap() + 1);

    equipoApi.on("select", () => {
      setEquipoCurrent(equipoApi.selectedScrollSnap() + 1);
    });
  }, [equipoApi]);

  return (
    <section className="py-16 bg-borgona text-white min-h-[70vh] flex items-center relative overflow-hidden">
      <div className="container-custom w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-on-scroll animate-slide-in">
            <Carousel
              setApi={setEquipoApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                <CarouselItem>
                  <div className="h-[50vh] bg-white rounded-md overflow-hidden image-container">
                    <img
                      src="/lovable-uploads/NLV_3160.png"
                      alt="Dra. Beatriz Lezcano en su consultorio - Equipo Lezcano"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="h-[50vh] bg-white rounded-md overflow-hidden image-container">
                    <img
                      src="/lovable-uploads/c090dfe1-61a0-4dbe-9ed6-74c907526ca4.jpg"
                      alt="Dra. Lezcano trabajando en consulta - Planificación de procedimientos"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="h-[50vh] bg-white rounded-md overflow-hidden image-container">
                    <img
                      src="/lovable-uploads/18f2e586-f072-4f7c-8b62-d726d1c69d34.jpg"
                      alt="Consulta personalizada - Dra. Lezcano con paciente"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="h-[50vh] bg-white rounded-md overflow-hidden image-container">
                    <img
                      src="/lovable-uploads/9333fc54-a3ca-4127-9a8d-7304461af630.jpg"
                      alt="Tratamiento estético en consultorio - Equipo Lezcano"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="h-[50vh] bg-white rounded-md overflow-hidden image-container">
                    <img
                      src="/lovable-uploads/8c544c54-ad63-40f4-ae85-83893ca7b777.png"
                      alt="Instalaciones modernas - Sala de tratamientos Equipo Lezcano"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
            
            {/* Indicadores de posición */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: equipoCount }, (_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index + 1 === equipoCurrent 
                      ? 'bg-white scale-110' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  onClick={() => equipoApi?.scrollTo(index)}
                  aria-label={`Ir al slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl mb-6 font-seasons text-white">
              Equipo Lezcano
            </h2>
            <p className="text-xl">
              Con más de 10 años de experiencia y el respaldo de una tradición familiar en cirugía plástica, conformamos el equipo quirúrgico junto a mi padre el Dr. Horacio Lezcano. Juntos brindamos una atención personalizada, segura y de calidad, priorizando la salud y bienestar de cada paciente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
