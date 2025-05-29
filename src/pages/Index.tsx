import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import ProcedureCard from "@/components/ProcedureCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simple animation on scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if(position.top < window.innerHeight - 100) {
          element.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    setTimeout(handleScroll, 500);
    
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
      <section className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="hero-quote mb-6">
                Hola, soy la Dra. Beatriz Lezcano.
              </h1>
              <p className="text-xl mb-8">
                Cirujana plástica y segunda generación de médicos. Trabajo con un enfoque personalizado, humano y profesional para que cada paciente se sienta acompañado y seguro.
              </p>
              <NavLink to="/contacto" className="btn-primary inline-block">
                ¡Hablemos!
              </NavLink>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[3/4] bg-gris-claro rounded-md overflow-hidden max-w-[320px] mx-auto">
                <img
                  src="/lovable-uploads/d43af646-00e7-43e5-9241-53a24cb353f9.png"
                  alt="Dra. Beatriz Lezcano"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-borgona text-white">
        <div className="container-custom">
          <div className="text-center">
            <div className="max-w-xl mx-auto">
              <h2 className="text-3xl md:text-4xl mb-6 font-seasons text-white">
                Cirugía plástica con propósito.
              </h2>
              <p className="text-xl animate-on-scroll">
                Resultados naturales, atención cercana y compromiso médico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Procedures */}
      <section className="py-16">
        <div className="container-custom">
          <SectionTitle 
            title="Procedimientos destacados" 
            subtitle="Tratamientos personalizados con los más altos estándares"
          />
          
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
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 bg-rosa-claro bg-opacity-20">
        <div className="container-custom">
          <SectionTitle 
            title="Lo que dicen mis pacientes" 
          />
          
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <TestimonialCarousel 
              testimonials={testimonials}
              featured={true} 
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-borgona text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-seasons mb-6 text-white">
            ¿Listo para dar el primer paso?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Te invito a una consulta personalizada para evaluar juntos las mejores opciones para vos.
          </p>
          <NavLink 
            to="/contacto" 
            className="bg-white text-borgona py-2 px-6 rounded hover:bg-opacity-90 transition-all font-medium text-lg"
          >
            ¿En qué puedo ayudarte?
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Index;
