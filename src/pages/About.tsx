
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
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-seasons mb-6">Sobre mí</h1>
          <div className="h-1 w-24 bg-rosa-claro mx-auto"></div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="aspect-[3/4] bg-gris-claro rounded-md overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3"
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
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gris-claro p-4 rounded-md">
                  <h3 className="font-seasons text-xl mb-2">Formación</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Universidad de Buenos Aires</li>
                    <li>Especialidad en Cirugía Plástica</li>
                    <li>Postgrado en Estética Avanzada</li>
                  </ul>
                </div>
                <div className="bg-gris-claro p-4 rounded-md">
                  <h3 className="font-seasons text-xl mb-2">Filosofía</h3>
                  <p>
                    La belleza natural y el equilibrio son los principios que guían mi trabajo como cirujana plástica.
                  </p>
                </div>
              </div>
              
              <NavLink to="/contacto" className="btn-primary">
                Agendar consulta
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 bg-gris-claro">
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
      <section className="py-12">
        <div className="container-custom text-center">
          <div className="bg-rosa-claro bg-opacity-20 p-8 rounded-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-seasons mb-4">
              Te invito a conocernos en persona
            </h2>
            <p className="mb-6">
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
