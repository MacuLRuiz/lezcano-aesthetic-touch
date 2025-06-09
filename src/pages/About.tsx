import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";

const About = () => {
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
          backgroundImage: "linear-gradient(to right, rgba(131, 72, 74, 0.8), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/sobremi.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center bottom"
        }}
      >
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-seasons mb-6 text-white">Sobre mí</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white">
            Conocé mi historia y filosofía profesional como médica cirujana plástica, 
            segunda generación de profesionales en cirugía.
          </p>
          <div className="h-1 w-24 bg-rosa-claro mx-auto mt-8"></div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="aspect-[3/4] bg-gris-claro rounded-md overflow-hidden max-w-sm mx-auto">
                <img
                  src="/lovable-uploads/diploma.JPG"
                  alt="Dra. Beatriz Lezcano"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-seasons mb-6">Dra. Beatriz Lezcano</h2>
              <p className="text-lg mb-4">
                Médica cirujana plástica. Segunda generación de profesionales en cirugía.
              </p>
              <p className="mb-4">
                Me especializo en tratamientos estéticos y reconstructivos con un enfoque empático y ético.
                Acompaño a cada paciente con compromiso humano y técnico.
              </p>
              <p className="mb-6">
                Mi práctica se caracteriza por el cuidado personalizado y la atención a los detalles, 
                priorizando siempre la salud y bienestar de mis pacientes por encima de todo.
                Creo firmemente que la cirugía plástica debe potenciar la belleza natural y la confianza,
                respetando la individualidad de cada persona.
              </p>
              
              <div className="bg-gris-claro p-4 rounded-md mb-8">
                <h3 className="font-seasons text-xl mb-2">Formación</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Universidad de Buenos Aires</li>
                  <li>Especialidad en Cirugía Plástica</li>
                  <li>Postgrado en Estética Avanzada</li>
                </ul>
              </div>
              
              <NavLink to="/contacto" className="btn-primary">
                Agendar consulta
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 bg-rosa-suave">
        <div className="container-custom">
          <SectionTitle
            title="Mi enfoque"
            subtitle="Valores que definen mi práctica profesional"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-md shadow-sm animate-on-scroll">
              <h3 className="text-xl font-seasons mb-3 text-borgona">Ética profesional</h3>
              <p>
                La honestidad y transparencia son fundamentales en mi relación con cada paciente,
                brindando siempre información clara sobre resultados esperables y consideraciones importantes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-md shadow-sm animate-on-scroll">
              <h3 className="text-xl font-seasons mb-3 text-borgona">Atención personalizada</h3>
              <p>
                Cada persona es única, por eso cada tratamiento se diseña según las características,
                necesidades y expectativas individuales, con un seguimiento cercano en todo momento.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-md shadow-sm animate-on-scroll">
              <h3 className="text-xl font-seasons mb-3 text-borgona">Resultados naturales</h3>
              <p>
                Mi objetivo es realzar la belleza natural, buscando el equilibrio y la armonía
                en cada procedimiento para obtener resultados elegantes que revitalicen sin transformar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-bordo">
        <div className="container-custom text-center">
          <div className="bg-white bg-opacity-10 p-8 rounded-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-seasons mb-4 text-white">
              Te invito a conocernos en persona
            </h2>
            <p className="mb-6 text-white">
              En una consulta inicial podremos conversar sobre tus inquietudes y expectativas,
              evaluando juntas las mejores opciones para ti.
            </p>
            <NavLink to="/contacto" className="btn-primary">
              Solicitar consulta
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
