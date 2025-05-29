
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import ProcedureCard from "@/components/ProcedureCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const Index = () => {
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

  const testimonials = [
    {
      quote: "La Dra. Lezcano es excelente profesional. Me sentí muy cómoda y segura durante todo el proceso. Los resultados fueron mejores de lo que esperaba, muy naturales.",
      author: "Carolina S."
    },
    {
      quote: "Después de muchas consultas con diferentes profesionales, elegí a la Dra. Lezcano por su calidez y profesionalismo. Su atención personalizada y seguimiento post operatorio fueron excepcionales.",
      author: "Laura T."
    },
    {
      quote: "Increíble experiencia desde la primera consulta. La Dra. explicó todo con paciencia y claridad. El procedimiento fue exactamente como lo habíamos planeado y la recuperación muy bien acompañada.",
      author: "Mariana R."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="hero-quote mb-6 animate-fade-in-left">
                Hola, soy la Dra. Beatriz Lezcano.
              </h1>
              <p className="text-xl mb-8 animate-fade-in-left delay-200">
                Cirujana plástica y segunda generación de médicos. Trabajo con un enfoque personalizado, humano y profesional para que cada paciente se sienta acompañado y seguro.
              </p>
              <div className="animate-fade-in-left delay-300">
                <NavLink to="/contacto" className="btn-primary inline-block">
                  ¡Hablemos!
                </NavLink>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-fade-in-right delay-100">
              <div className="aspect-[3/4] bg-white rounded-md overflow-hidden max-w-[320px] mx-auto image-container animate-float">
                <img
                  src="/lovable-uploads/d43af646-00e7-43e5-9241-53a24cb353f9.png"
                  alt="Dra. Beatriz Lezcano"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Elementos decorativos */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-rosa-suave rounded-full opacity-20 animate-float delay-500"></div>
        <div className="absolute bottom-20 left-10 w-20 h-20 bg-nude rounded-full opacity-30 animate-float delay-300"></div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-borgona text-white min-h-[70vh] flex items-center relative overflow-hidden">
        <div className="container-custom w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-on-scroll">
              <div className="h-[50vh] bg-white rounded-md overflow-hidden image-container">
                <img
                  src="/lovable-uploads/890f1051-e9fc-40ef-af55-b00b9596e3ed.png"
                  alt="Dra. Lezcano realizando procedimiento estético"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl mb-6 font-seasons text-white">
                Cirugía plástica con propósito.
              </h2>
              <p className="text-xl text-reveal">
                Resultados naturales, atención cercana y compromiso médico.
              </p>
            </div>
          </div>
        </div>
        
        {/* Elementos decorativos para parallax */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-float delay-100"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white rounded-full animate-float delay-400"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-float delay-200"></div>
        </div>
      </section>

      {/* Featured Procedures */}
      <section className="py-16 relative" style={{ backgroundColor: 'rgb(233, 196, 186)' }}>
        <div className="container-custom">
          <div className="animate-on-scroll">
            <SectionTitle 
              title="Procedimientos destacados" 
              subtitle="Tratamientos personalizados con los más altos estándares"
              whiteText={true}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="animate-on-scroll">
              <ProcedureCard
                title="Rinoplastia"
                description="Armoniza la forma y funcionalidad de la nariz, mejorando tanto la estética como la respiración."
                link="/procedimientos"
                imageSrc="/lovable-uploads/4595e78e-5fb5-4554-af82-3b5386081e5a.png"
              />
            </div>
            
            <div className="animate-on-scroll">
              <ProcedureCard
                title="Aumento mamario"
                description="Realza el volumen y la forma de los senos para una apariencia más armónica y natural."
                link="/procedimientos"
                imageSrc="/lovable-uploads/371b18e7-0749-4015-9787-163ab28fe24b.png"
              />
            </div>
            
            <div className="animate-on-scroll">
              <ProcedureCard
                title="Botox"
                description="Tratamiento no invasivo para suavizar líneas de expresión y prevenir signos de envejecimiento."
                link="/procedimientos"
                imageSrc="/lovable-uploads/243dd21a-d6ab-44ce-9864-860c9ee44492.png"
              />
            </div>
          </div>
        </div>
        
        {/* Gradiente sutil */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white via-transparent opacity-5 animate-pulse-soft"></div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 bg-white bg-opacity-20 relative">
        <div className="container-custom">
          <div className="animate-on-scroll">
            <SectionTitle 
              title="Lo que dicen mis pacientes" 
            />
          </div>
          
          <div className="max-w-3xl mx-auto animate-on-scroll animate-scale-in">
            <TestimonialCarousel 
              testimonials={testimonials}
              featured={true} 
            />
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
        
        {/* Elementos decorativos animados */}
        <div className="absolute top-10 left-10 w-16 h-16 border border-white border-opacity-20 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white border-opacity-10 rounded-full animate-float delay-300"></div>
        <div className="absolute top-1/2 left-5 w-8 h-8 bg-white bg-opacity-5 rounded-full animate-float delay-500"></div>
      </section>
    </>
  );
};

export default Index;
