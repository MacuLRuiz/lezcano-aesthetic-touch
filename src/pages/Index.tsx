import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Instagram, Facebook, Scissors, User, Heart, Sparkles } from "lucide-react";
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
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-rosa-claro/20 to-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-borgona/5 rounded-full animate-float"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 bg-rosa-claro/30 rounded-full animate-float delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-borgona/10 rounded-full animate-float delay-500"></div>
        </div>

        <div className="container-custom relative z-10 pt-24 md:pt-32 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 text-center md:text-left">
              {/* Badge decorativo */}
              <div className="inline-flex items-center px-4 py-2 bg-borgona/10 rounded-full text-borgona text-sm font-medium mb-6 animate-fade-in-up">
                <Sparkles className="w-4 h-4 mr-2" />
                Segunda generación en cirugía plástica
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-seasons text-borgona leading-tight mb-6 animate-fade-in-left">
                Cirugía plástica con{" "}
                <span className="relative inline-block">
                  {/* Texto invisible para reservar espacio */}
                  <span className="invisible" aria-hidden="true">{fullText}</span>
                  {/* Texto visible con animación */}
                  <span className="absolute left-0 top-0 flex items-baseline bg-gradient-to-r from-borgona to-borgona/80 bg-clip-text text-transparent">
                    {displayText}
                    <span className={`inline-block w-1 h-12 md:h-16 bg-borgona ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
                  </span>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed animate-fade-in-left delay-200 max-w-2xl">
                Soy la <span className="font-semibold text-borgona">Dra. Beatriz Lezcano</span>. Cirujana plástica y segunda generación de médicos. Trabajo con un enfoque personalizado, humano y profesional para que cada paciente se sienta acompañado y seguro.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-left delay-300">
                <NavLink 
                  to="/contacto" 
                  className="group relative overflow-hidden bg-borgona text-white py-4 px-8 rounded-full text-lg font-semibold hover:bg-borgona/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center justify-center"
                >
                  <span className="relative z-10">¡Hablemos!</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-borgona to-borgona/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </NavLink>
                
                <NavLink 
                  to="/sobre-mi" 
                  className="group py-4 px-8 border-2 border-borgona text-borgona rounded-full text-lg font-semibold hover:bg-borgona hover:text-white transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Conocé mi historia
                </NavLink>
              </div>

              {/* Stats o highlights */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200 animate-fade-in-left delay-500">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-borgona">10+</div>
                  <div className="text-sm text-gray-600">Años de experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-borgona">4</div>
                  <div className="text-sm text-gray-600">Consultorios</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-borgona">2da</div>
                  <div className="text-sm text-gray-600">Generación médica</div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 animate-slide-in">
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 bg-gradient-to-r from-borgona/20 to-rosa-claro/20 rounded-2xl blur-xl"></div>
                
                <div className="relative aspect-[3/4] bg-white rounded-2xl overflow-hidden max-w-[450px] mx-auto shadow-2xl border border-white/50">
                  <img
                    src="/lovable-uploads/home.JPG"
                    alt="Dra. Beatriz Lezcano - Cirujana Plástica"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-lg animate-float">
                  <Heart className="w-8 h-8 text-borgona" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-borgona rounded-full p-4 shadow-lg animate-float delay-700">
                  <User className="w-8 h-8 text-white" />
                </div>
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
              <p className="text-xl">
                Con más de 10 años de experiencia y el respaldo de una tradición familiar en cirugía plástica, conformamos el equipo quirúrgico junto a mi padre el Dr. Horacio Lezcano. Juntos brindamos una atención personalizada, segura y de calidad, priorizando la salud y bienestar de cada paciente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades Section */}
      <section className="py-16 bg-white relative">
        <div className="container-custom">
          <div className="animate-on-scroll text-center">
            <SectionTitle 
              title="Especialidades" 
              subtitle="Tratamientos especializados con técnicas avanzadas"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll">
            <NavLink 
              to="/cirugia-facial" 
              className="relative aspect-[3/4] rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <img
                src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=600&fit=crop"
                alt="Cirugía facial"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl md:text-2xl font-seasons text-white text-center px-4">
                  Cirugía facial
                </h3>
              </div>
            </NavLink>
            
            <NavLink 
              to="/cirugia-corporal" 
              className="relative aspect-[3/4] rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <img
                src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=600&fit=crop"
                alt="Cirugía corporal"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl md:text-2xl font-seasons text-white text-center px-4">
                  Cirugía corporal
                </h3>
              </div>
            </NavLink>
            
            <NavLink 
              to="/cirugia-mamaria" 
              className="relative aspect-[3/4] rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <img
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=600&fit=crop"
                alt="Cirugía mamaria"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl md:text-2xl font-seasons text-white text-center px-4">
                  Cirugía mamaria
                </h3>
              </div>
            </NavLink>
            
            <NavLink 
              to="/estetica-no-quirurgica" 
              className="relative aspect-[3/4] rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <img
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=600&fit=crop"
                alt="Estética no quirúrgica"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl md:text-2xl font-seasons text-white text-center px-4">
                  Estética no quirúrgica
                </h3>
              </div>
            </NavLink>
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
