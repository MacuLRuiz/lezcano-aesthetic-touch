import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  console.log("Index component is rendering");
  
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  
  // API para el carrusel de Equipo Lezcano
  const [equipoApi, setEquipoApi] = useState<CarouselApi>();
  const [equipoCurrent, setEquipoCurrent] = useState(0);
  const [equipoCount, setEquipoCount] = useState(0);

  // Estados para el efecto de máquina de escribir
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const fullText = "propósito";
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    console.log("Index component mounted successfully");
    
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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

  // Efecto para la animación de máquina de escribir
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === fullText) {
        // Pausa antes de empezar a borrar
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }

      if (isDeleting && displayText === "") {
        // Pausa antes de empezar a escribir de nuevo
        setIsDeleting(false);
        return;
      }

      if (isDeleting) {
        // Borrando texto
        setDisplayText(prev => prev.slice(0, -1));
      } else {
        // Escribiendo texto
        setDisplayText(prev => fullText.slice(0, prev.length + 1));
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, fullText]);

  // Efecto para el cursor parpadeante
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Animación mejorada en scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element, index) => {
        const position = element.getBoundingClientRect();
        
        // Si el elemento está en el viewport
        if(position.top < window.innerHeight - 100) {
          setTimeout(() => {
            element.classList.add('animated');
          }, index * 100); // Stagger animation
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger inicial
    setTimeout(handleScroll, 300);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log("Rendering Index component JSX");

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="hero-quote mb-6 animate-fade-in-left">
                Cirugía plástica con{" "}
                <span className="relative inline-block">
                  {/* Texto invisible para reservar espacio */}
                  <span className="invisible" aria-hidden="true">{fullText}</span>
                  {/* Texto visible con animación */}
                  <span className="absolute left-0 top-0 flex items-baseline">
                    {displayText}
                    <span className={`inline-block w-0.5 h-8 bg-borgona ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
                  </span>
                </span>
              </h1>
              <p className="text-xl mb-8 animate-fade-in-left delay-200">
                Soy la Dra. Beatriz Lezcano. Cirujana plástica y segunda generación de médicos. Trabajo con un enfoque personalizado, humano y profesional para que cada paciente se sienta acompañado y seguro.
              </p>
              <div className="animate-fade-in-left delay-300">
                <NavLink to="/contacto" className="btn-primary inline-block">
                  ¡Hablemos!
                </NavLink>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-slide-in">
              <div className="aspect-[3/4] bg-white rounded-md overflow-hidden max-w-[400px] mx-auto image-container shadow-2xl rounded-lg">
                <img
                  src="/lovable-uploads/home.JPG"
                  alt="Dra. Beatriz Lezcano"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
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
                        src="/lovable-uploads/c090dfe1-61a0-4dbe-9ed6-74c907526ca4.png"
                        alt="Dra. Lezcano trabajando en consulta - Planificación de procedimientos"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="h-[50vh] bg-white rounded-md overflow-hidden image-container">
                      <img
                        src="/lovable-uploads/18f2e586-f072-4f7c-8b62-d726d1c69d34.png"
                        alt="Consulta personalizada - Dra. Lezcano con paciente"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="h-[50vh] bg-white rounded-md overflow-hidden image-container">
                      <img
                        src="/lovable-uploads/9333fc54-a3ca-4127-9a8d-7304461af630.png"
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
              <p className="text-xl text-reveal">
                Con más de 10 años de experiencia y el respaldo de una tradición familiar en cirugía plástica, conformamos junto a mi padre, el Dr Horacio Lezcano, el equipo quirúrgico. Juntos brindamos atención personalizada, cálida y segura, priorizando la salud y bienestar de cada paciente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Procedures - Now as Carousel */}
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
                      imageSrc="/lovable-uploads/243dd21a-d6ab-44ce-9864-860c9ee44492.png"
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

      {/* FAQ Section */}
      <section className="py-16 bg-white bg-opacity-20 relative">
        <div className="container-custom">
          <div className="animate-on-scroll text-center">
            <h2 className="text-3xl md:text-4xl mb-6 font-seasons">
              ¿Tenés dudas? Es normal.
            </h2>
            <p className="text-lg mb-12 max-w-3xl mx-auto">
              Elegir un tratamiento estético es una decisión importante. Queremos que te sientas segura/o y bien informada/o en cada paso.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto animate-on-scroll">
            {/* Imagen con animación slide desde la izquierda */}
            <div className="order-2 md:order-1 self-start animate-on-scroll animate-slide-in-left">
              <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden shadow-lg sticky top-8">
                <img
                  src="/lovable-uploads/5c7e72cc-bdeb-4027-89b9-414c6309f0d2.png"
                  alt="Dra. Beatriz Lezcano en consulta médica"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Preguntas como accordion */}
            <div className="order-1 md:order-2 self-start">
              <h3 className="text-xl font-semibold mb-6">Preguntas destacadas:</h3>
              
              <Accordion type="single" collapsible className="mb-8">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    ¿Los resultados son naturales?
                  </AccordionTrigger>
                  <AccordionContent>
                    Trabajamos para lograr resultados armónicos que respeten tu anatomía natural. Nuestro enfoque busca realzar tu belleza sin alterar tu esencia, utilizando técnicas avanzadas y un criterio estético refinado.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    ¿Cuánto dura la recuperación?
                  </AccordionTrigger>
                  <AccordionContent>
                    Cada procedimiento tiene tiempos específicos que te explicamos en detalle durante la consulta. Te proporcionamos un plan de recuperación personalizado con todas las indicaciones necesarias para una evolución óptima.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    ¿Qué respaldo tengo como paciente?
                  </AccordionTrigger>
                  <AccordionContent>
                    Te acompañamos durante todo el proceso, desde la consulta inicial hasta la recuperación completa. Contás con nuestro seguimiento médico continuo y estamos disponibles para resolver cualquier duda que puedas tener.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <div className="text-center md:text-left">
                <NavLink 
                  to="/contacto" 
                  className="bg-borgona text-white py-3 px-6 rounded hover:bg-borgona/90 transition-all font-medium inline-block transform hover:scale-105"
                >
                  Ver todas las preguntas frecuentes
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-rosa-claro relative self-start">
        <div className="container-custom text-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-seasons mb-6">
              ¡Seguime en mis redes!
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              En mis redes comparto información, novedades y reflexiones sobre el cuidado estético. ¡Te invito a acompañarme!
            </p>
            
            <div className="flex justify-center gap-6">
              <a 
                href="#" 
                className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 text-borgona hover:text-borgona/80"
                aria-label="Seguir en Instagram"
              >
                <Instagram size={32} />
              </a>
              <a 
                href="#" 
                className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 text-borgona hover:text-borgona/80"
                aria-label="Seguir en Facebook"
              >
                <Facebook size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-borgona text-white relative overflow-hidden">
        <div className="container-custom text-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-seasons mb-6 text-white">
              ¿Listo para dar el primer paso?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Te invito a una consulta personalizada para evaluar juntos las mejores opciones para vos.
            </p>
            <NavLink 
              to="/contacto" 
              className="bg-white text-borgona py-2 px-6 rounded hover:bg-opacity-90 transition-all font-medium text-lg inline-block transform hover:scale-105 hover:shadow-lg"
            >
              ¿En qué puedo ayudarte?
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
