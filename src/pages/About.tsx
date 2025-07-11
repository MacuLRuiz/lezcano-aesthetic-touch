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
          backgroundImage: "linear-gradient(to right, rgba(131, 72, 74, 0.39), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/sobremi.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "top"
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
                  src="/lovable-uploads/6816f2fa-1162-4d1b-88e3-baf0f5855ff6.jpg"
                  alt="Dra. Beatriz Lezcano"
                  className="w-full h-full object-cover animate-on-scroll animate-slide-in-left"
                />
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-seasons mb-6">Dra. Beatriz Lezcano</h2>
              <p className="text-lg mb-4">
                Médica cirujana plástica y reparadora. Segunda generación de profesionales en cirugía.
              </p>
              <p className="mb-4">
                Me especializo en cirugía estética y reconstructiva, con una mirada integral que combina técnica, sensibilidad y compromiso humano. Acompaño a cada paciente con escucha atenta, priorizando su bienestar físico y emocional.
              </p>
              <p className="mb-6">
                Mi enfoque se basa en potenciar la belleza natural de cada persona, respetando su individualidad y fomentando la confianza en sí misma. Creo en una cirugía plástica ética, empática y profundamente personalizada.
              </p>
              
              <NavLink to="/contacto" className="btn-primary">
                Agendar consulta
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Formation and Professional Memberships Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Formación y membresías profesionales"
            subtitle="Educación especializada y participación en organizaciones profesionales"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="animate-on-scroll">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-seasons mb-4 text-borgona">Formación Académica</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-rosa-claro rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Médica egresada de la Facultad de Medicina, Universidad de Buenos Aires (UBA)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-rosa-claro rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Especialista Jerarquizada en Cirugía Plástica y Reparadora (UBA)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-rosa-claro rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Especialista en Clínica Quirúrgica</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-rosa-claro rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Especialista en Medicina Estética (UBA)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-rosa-claro rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Especialista en Administración y Gestión Sanitaria (Ministerio de Salud, Distrito III)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Professional Memberships */}
            <div className="animate-on-scroll">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-seasons mb-4 text-borgona">Membresías Profesionales</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-rosa-claro rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Miembro titular de la Sociedad de Cirugía Plástica de Buenos Aires (SCPBA)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-rosa-claro rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Miembro titular de la Sociedad Argentina de Cirugía Plástica, Estética y Reparadora (SACPER)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-rosa-claro rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Miembro de la American Society of Plastic Surgeons (ASPS)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-rosa-claro rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Miembro de la Sociedad Argentina de Rinología Estética y Funcional (SAREF)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-rosa-claro rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Miembro de la Asociación Argentina de Cirugía Estética (AACE)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 bg-rosa-suave min-h-[75vh] content-center">
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
          <h2 className="text-2xl font-seasons mb-4 text-white">
            Te invito a conocernos en persona
          </h2>
          <p className="mb-6 text-white max-w-3xl mx-auto">
            En una consulta inicial podremos conversar sobre tus inquietudes y expectativas,
            evaluando juntas las mejores opciones para ti.
          </p>
          <NavLink to="/contacto" className="btn-primary">
            Solicitar consulta
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default About;
