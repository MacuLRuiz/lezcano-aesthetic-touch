
import React, { useEffect } from "react";
import { Instagram, MapPin, Clock } from "lucide-react";

const Contact = () => {
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

  const consultoriosData = [
    {
      location: "Lanús",
      address: "Coronel Pringles 2454",
      schedule: "Lunes y jueves de 15 a 19 hs"
    },
    {
      location: "Quilmes",
      address: "Sarmiento 612",
      schedule: "Martes de 14 a 18 hs"
    },
    {
      location: "Nordelta",
      address: "Estética Dardano – Barrio Puerto Escondido, local 4001",
      schedule: "Viernes de 16 a 19 hs"
    },
    {
      location: "Hudson",
      address: "Rincón de Hudson, Calle 137 N6313",
      schedule: "Atención con turno previo"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-16 min-h-[50vh] flex items-center" 
        style={{
          backgroundImage: "linear-gradient(to right, rgba(131, 72, 74, 0.8), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/3289c88c-f7f0-4e63-b541-4f1fee5facac.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-seasons mb-6 text-white">Estamos para escucharte</h1>
          <div className="h-1 w-24 bg-rosa-claro mx-auto mt-8"></div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-12">
        <div className="container-custom text-center">
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Si querés más información o agendar tu consulta personalizada, podés contactarnos por el medio que prefieras. 
            Tu consulta es confidencial y sin compromiso.
          </p>
        </div>
      </section>

      {/* Sección de Consultorios y Mapa */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-seasons text-center mb-12 text-borgona">Consultorios y horarios de atención</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Mapa */}
            <div className="animate-on-scroll">
              <div className="h-[500px] bg-gris-claro rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52563.38979239153!2d-58.414041799999996!3d-34.6992927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccd2ca4bbda8d%3A9959a73122e24898!2sLan%C3%BAs%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1715670514518!5m2!1ses!2sar" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
            {/* Lista de Consultorios */}
            <div className="animate-on-scroll">
              <div className="h-[500px] flex flex-col justify-start space-y-4">
                {consultoriosData.map((consultorio, index) => (
                  <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="font-semibold text-borgona text-lg mb-2 flex items-center">
                      <MapPin size={18} className="text-borgona mr-2" />
                      {consultorio.location}
                    </h3>
                    <p className="text-gray-700 mb-2">{consultorio.address}</p>
                    <p className="text-gray-600 flex items-center text-sm">
                      <Clock size={14} className="mr-2" />
                      {consultorio.schedule}
                    </p>
                  </div>
                ))}
                
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p className="text-sm text-gray-600 italic">
                    Consultorios privados. Atención personalizada. Turnos con cita previa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Contacto */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-seasons mb-8 text-borgona">¿Querés contactarnos?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-verde-ingles text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors flex items-center space-x-2 font-medium"
            >
              <span>Hablemos por WhatsApp</span>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-borgona hover:text-opacity-80 transition-colors flex items-center space-x-2 font-medium"
              aria-label="Instagram"
            >
              <Instagram size={24} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
