
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import ProcedureCard from "@/components/ProcedureCard";

const Procedures = () => {
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

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-seasons mb-6">Procedimientos</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Tratamientos personalizados con los más altos estándares de seguridad y calidad para 
            potenciar tu belleza natural.
          </p>
          <div className="h-1 w-24 bg-rosa-claro mx-auto mt-6"></div>
        </div>
      </section>

      {/* Cirugías estéticas */}
      <section className="py-12">
        <div className="container-custom">
          <SectionTitle 
            title="Cirugías estéticas"
            subtitle="Procedimientos para realzar tu imagen"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="animate-on-scroll">
              <ProcedureCard
                title="Rinoplastia"
                description="Armoniza la forma y funcionalidad de la nariz, mejorando tanto la estética como la respiración. Resultados naturales que armonizan con tus rasgos faciales."
                link="/contacto"
              />
            </div>
            
            <div className="animate-on-scroll">
              <ProcedureCard
                title="Aumento mamario"
                description="Realza el volumen y la forma de los senos para una apariencia más armónica y natural, adaptada a tu proporción corporal y expectativas."
                link="/contacto"
              />
            </div>
            
            <div className="animate-on-scroll">
              <ProcedureCard
                title="Lipoescultura"
                description="Remodela el contorno corporal eliminando acúmulos de grasa localizada y definiendo la silueta para un resultado proporcional y armónico."
                link="/contacto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cirugías reconstructivas */}
      <section className="py-12 bg-gris-claro">
        <div className="container-custom">
          <SectionTitle 
            title="Cirugías reconstructivas"
            subtitle="Restauración y recuperación funcional"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="animate-on-scroll">
              <ProcedureCard
                title="Reconstrucción mamaria"
                description="Devuelve la forma y volumen del seno tras una mastectomía u otras intervenciones, con un enfoque personalizado y sensible a las necesidades físicas y emocionales."
                link="/contacto"
              />
            </div>
            
            <div className="animate-on-scroll">
              <ProcedureCard
                title="Corrección de cicatrices"
                description="Mejora la apariencia de cicatrices causadas por lesiones, cirugías previas o quemaduras, utilizando técnicas avanzadas para integrarlas mejor con la piel circundante."
                link="/contacto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Procedimientos no invasivos */}
      <section className="py-12">
        <div className="container-custom">
          <SectionTitle 
            title="Tratamientos no invasivos"
            subtitle="Procedimientos sin cirugía para mejorar tu apariencia"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="animate-on-scroll">
              <ProcedureCard
                title="Botox"
                description="Tratamiento para suavizar líneas de expresión y prevenir signos de envejecimiento, especialmente en frente, entrecejo y patas de gallo. Proporciona un aspecto rejuvenecido y natural."
                link="/contacto"
              />
            </div>
            
            <div className="animate-on-scroll">
              <ProcedureCard
                title="Relleno con ácido hialurónico"
                description="Restaura el volumen perdido, define contornos y mejora la hidratación en labios, pómulos y surcos nasogenianos. Resultados inmediatos y naturales."
                link="/contacto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-borgona text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-seasons mb-6 text-white">
            ¿Tienes dudas sobre qué procedimiento es adecuado para ti?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Te invito a una consulta personalizada para evaluar juntas las mejores opciones según tus necesidades.
          </p>
          <NavLink 
            to="/contacto" 
            className="bg-white text-borgona py-2 px-6 rounded hover:bg-opacity-90 transition-all font-medium text-lg"
          >
            Agenda una evaluación
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Procedures;
