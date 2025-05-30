
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
      {/* Hero Section with Background Image */}
      <section 
        className="relative pt-32 pb-24 min-h-[90vh] flex items-center" 
        style={{
          backgroundImage: "linear-gradient(to right, rgba(131, 72, 74, 0.8), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/371b18e7-0749-4015-9787-163ab28fe24b.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-seasons mb-6 text-white">Procedimientos</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white">
            Tratamientos personalizados con los más altos estándares de seguridad y calidad para 
            potenciar tu belleza natural.
          </p>
          <div className="h-1 w-24 bg-rosa-claro mx-auto mt-8"></div>
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
                imageSrc="/lovable-uploads/31d4bbfe-a465-49de-b1f9-29b01424f112.png"
              />
            </div>
            
            <div className="animate-on-scroll">
              <ProcedureCard
                title="Aumento mamario"
                description="Realza el volumen y la forma de los senos para una apariencia más armónica y natural, adaptada a tu proporción corporal y expectativas."
                link="/contacto"
                imageSrc="/lovable-uploads/e6eedc63-27ba-47db-8ad4-5882dadeb566.png"
              />
            </div>
            
            <div className="animate-on-scroll">
              <ProcedureCard
                title="Lipoescultura"
                description="Remodela el contorno corporal eliminando acúmulos de grasa localizada y definiendo la silueta para un resultado proporcional y armónico."
                link="/contacto"
                imageSrc="/lovable-uploads/3980f895-566b-4465-8516-6c1cd83ab4d1.png"
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
                imageSrc="/lovable-uploads/b5431484-4ace-47c0-abec-0d4acc7aa870.png"
              />
            </div>
            
            <div className="animate-on-scroll">
              <ProcedureCard
                title="Relleno con ácido hialurónico"
                description="Restaura el volumen perdido, define contornos y mejora la hidratación en labios, pómulos y surcos nasogenianos. Resultados inmediatos y naturales."
                link="/contacto"
                imageSrc="/lovable-uploads/d700353d-f0af-4a66-aa7d-01c9069e8613.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gris-claro">
        <div className="container-custom">
          <SectionTitle 
            title="Preguntas frecuentes" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-md shadow-sm">
              <h3 className="text-xl font-seasons mb-3">¿Es necesaria una consulta previa?</h3>
              <p>
                Sí, siempre realizamos una evaluación personalizada antes de cualquier procedimiento
                para analizar tus necesidades y establecer expectativas claras.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-md shadow-sm">
              <h3 className="text-xl font-seasons mb-3">¿Cuál es el tiempo de recuperación?</h3>
              <p>
                Varía según el procedimiento. En la consulta te brindaré información detallada sobre los
                cuidados y tiempos específicos de recuperación para cada caso.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-md shadow-sm">
              <h3 className="text-xl font-seasons mb-3">¿Se aceptan obras sociales?</h3>
              <p>
                Algunos procedimientos reconstructivos pueden estar cubiertos. Consulta tu caso particular
                para analizar las opciones de cobertura.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-md shadow-sm">
              <h3 className="text-xl font-seasons mb-3">¿Cuándo veré los resultados?</h3>
              <p>
                Los resultados inmediatos varían según el procedimiento. Los resultados finales
                pueden apreciarse entre 3 a 6 meses después de la cirugía.
              </p>
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
