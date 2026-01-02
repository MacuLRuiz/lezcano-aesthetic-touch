
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import SectionTitle from "@/components/SectionTitle";

interface TestimonialData {
  name: string;
  text: string;
  date: string;
}

const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const testimonials: TestimonialData[] = [
    {
      name: "Silvana Toubes",
      text: "Mi experiencia siempre fue muy buena. Mucho profesionalismo. He hecho varios tratamientos con ella y estoy muy conforme con los resultados. Abanico de posibilidades y tratamientos acordes a las necesidades de cada uno. ¡Estoy muy agradecida!",
      date: ""
    },
    {
      name: "Virginia Medina",
      text: "Excelente profesional y muchísima calidez humana. Inmejorable el asesoramiento para el tratamiento adecuado que se necesita. 100% recomendable.",
      date: ""
    },
    {
      name: "Laura Molina",
      text: "Súper recomendable. A mí me cambió la vida. Me operó de hidradenitis supurativa, enfermedad que sufrí por años, y la Dra. Lezcano me cambió la calidad de vida. Aparte de ser una excelente profesional, es una gran persona, muy humana para atender. ¡Sin dudas la mejor de todas!",
      date: ""
    },
    {
      name: "Celina Caballero",
      text: "Excelentes cirujanos. Siempre agradecida con el Dr., el cual me operó de niña varias veces (cicatrices de quemaduras), y junto a la Dra. hoy día los sigo eligiendo y recomendando. Eternamente agradecida con ambos. ♥️",
      date: ""
    },
    {
      name: "Emilia Benítez",
      text: "La verdad, es un privilegio conocer la calidez humana y profesional de la doctora. El compromiso para con los pacientes y su continua capacitación para ayudarnos a estar bien con nosotras mismas. Gracias.",
      date: ""
    },
    {
      name: "Adriana",
      text: "Hola, soy Adriana y quiero contarles la hermosa experiencia que tuve con la Dra. Beatriz Lezcano, con la cual me realicé una blefaroplastia superior e inferior y quedé totalmente conforme. Además, me realicé varios tratamientos con ella como el bótox y el plasma rico en plaquetas, con excelente resultado. Hace unos años me realicé un lifting facial con ella y su papá, el Dr. Horacio Lezcano. La verdad, un placer haberme atendido con ellos. Y no quiero olvidarme de la calidez humana de ambos, aparte de lo grandes profesionales que son. Estoy muy agradecida. 🫶",
      date: ""
    }
  ];

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
    <section className="py-16 bg-bordo">
      <div className="container-custom">
        <div className="animate-on-scroll">
          <SectionTitle 
            title="Lo que dicen mis pacientes" 
            subtitle="Testimonios reales de personas que confiaron en nuestros tratamientos"
            hideLine={true}
            whiteText={true}
          />
        </div>
        
        <div className="animate-on-scroll relative max-w-7xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="h-80">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4 h-full">
                    <div className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col">
                      {/* Header with name */}
                      <div className="mb-3">
                        <h3 className="text-lg font-semibold text-borgona mb-2">{testimonial.name}</h3>
                        
                        {/* 5 stars */}
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        
                        {/* Date */}
                        <p className="text-xs text-gray-500">{testimonial.date}</p>
                      </div>
                      
                      {/* Testimonial text */}
                      <div className="flex-1 overflow-hidden">
                        <p className="text-gray-700 leading-relaxed italic text-sm line-clamp-6">
                          "{testimonial.text}"
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="absolute top-1/2 -translate-y-1/2 -left-6 z-10">
              <CarouselPrevious className="relative left-0 bg-white hover:bg-white/90 border-white text-borgona hover:text-borgona shadow-lg h-12 w-12" />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-6 z-10">
              <CarouselNext className="relative right-0 bg-white hover:bg-white/90 border-white text-borgona hover:text-borgona shadow-lg h-12 w-12" />
            </div>
          </Carousel>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: count }, (_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index + 1 === current 
                    ? 'bg-white scale-110' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
