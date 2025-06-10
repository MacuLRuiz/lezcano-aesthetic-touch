
import React, { useEffect, useState } from "react";
import { Instagram, MapPin, Clock, Mail, Phone } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import InteractiveMap from "../components/InteractiveMap";

const Contact = () => {
  const [selectedConsultorio, setSelectedConsultorio] = useState<number | undefined>(undefined);

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
      schedule: "Lunes y jueves de 15 a 19 hs",
      coordinates: { lat: -34.7069, lng: -58.3924 }
    },
    {
      location: "Quilmes",
      address: "Sarmiento 612",
      schedule: "Martes de 14 a 18 hs",
      coordinates: { lat: -34.7202, lng: -58.2544 }
    },
    {
      location: "Nordelta",
      address: "Estética Dardano – Barrio Puerto Escondido, local 4001",
      schedule: "Viernes de 16 a 19 hs",
      coordinates: { lat: -34.4135, lng: -58.6411 }
    },
    {
      location: "Hudson",
      address: "Rincón de Hudson, Calle 137 N6313",
      schedule: "Atención con turno previo",
      coordinates: { lat: -34.7833, lng: -58.1667 }
    }
  ];

  const handleConsultorioSelect = (index: number) => {
    setSelectedConsultorio(index);
  };

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-24 min-h-[90vh] flex items-center" 
        style={{
          backgroundImage: "linear-gradient(to right, rgba(131, 72, 74, 0.66), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/3289c88c-f7f0-4e63-b541-4f1fee5facac.png')",
          backgroundSize: "cover",
          backgroundPosition: "50% 20%"
        }}
      >
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-seasons mb-6 text-white">Estamos para escucharte</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white leading-relaxed">
            Si querés más información o agendar tu consulta personalizada, podés contactarnos por el medio que prefieras. 
            Tu consulta es confidencial y sin compromiso.
          </p>
          <div className="h-1 w-24 bg-rosa-claro mx-auto mt-8"></div>
        </div>
      </section>

      {/* Sección Escríbeme */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Escríbeme" 
            subtitle="Estoy aquí para responder todas tus consultas"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Información de contacto */}
            <div className="animate-on-scroll space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-rosa-claro rounded-lg">
                  <Mail className="text-borgona" size={24} />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a href="mailto:info@beatrizlopezvalle.com" className="text-borgona font-medium hover:underline">
                      info@beatrizlopezvalle.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-rosa-claro rounded-lg">
                  <Phone className="text-borgona" size={24} />
                  <div>
                    <p className="text-sm text-gray-600">Teléfono</p>
                    <a href="tel:+5491159633340" className="text-borgona font-medium hover:underline">
                      +54 9 11 5963 3340
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <a 
                  href="https://wa.me/5491159633340" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-verde-botones text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors inline-flex items-center space-x-2 font-medium w-full justify-center lg:w-auto"
                >
                  <span>Contactar por WhatsApp</span>
                </a>
              </div>
            </div>
            
            {/* Foto de Beatriz */}
            <div className="animate-on-scroll">
              <div className="relative">
                <img 
                  src="/lovable-uploads/sobremi.JPG" 
                  alt="Dra. Beatriz López Valle" 
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Consultorios y Mapa */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-seasons text-center mb-12 text-borgona">Consultorios y horarios de atención</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Mapa Interactivo */}
            <div className="animate-on-scroll">
              <InteractiveMap 
                consultorios={consultoriosData}
                selectedConsultorio={selectedConsultorio}
                onConsultorioSelect={handleConsultorioSelect}
              />
            </div>
            
            {/* Lista de Consultorios */}
            <div className="animate-on-scroll">
              <div className="h-[500px] flex flex-col justify-start space-y-4">
                {consultoriosData.map((consultorio, index) => (
                  <div 
                    key={index} 
                    className={`p-5 rounded-lg shadow-sm border cursor-pointer transition-all ${
                      selectedConsultorio === index 
                        ? 'bg-rosa-claro border-borgona shadow-md transform scale-105' 
                        : 'bg-white border-gray-100 hover:bg-rosa-claro hover:border-borgona'
                    }`}
                    onClick={() => handleConsultorioSelect(index)}
                  >
                    <h3 className="font-semibold text-borgona text-lg mb-2 flex items-center">
                      <MapPin size={18} className="text-borgona mr-2" />
                      {consultorio.location}
                    </h3>
                    <p className="text-gray-700 mb-2 cursor-pointer hover:text-borgona transition-colors">
                      {consultorio.address}
                    </p>
                    <p className="text-gray-600 flex items-center text-sm">
                      <Clock size={14} className="mr-2" />
                      {consultorio.schedule}
                    </p>
                    {selectedConsultorio === index && (
                      <p className="text-xs text-borgona mt-2 italic">
                        📍 Ubicación mostrada en el mapa
                      </p>
                    )}
                  </div>
                ))}
                
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p className="text-sm text-gray-600 italic">
                    Consultorios privados. Atención personalizada. Turnos con cita previa.
                  </p>
                  <p className="text-xs text-borgona mt-2">
                    💡 Haz click en cualquier consultorio para ver su ubicación en el mapa
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Botón WhatsApp debajo del mapa */}
          <div className="text-left mt-12">
            <a 
              href="https://wa.me/5491159633340" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-verde-botones text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors inline-flex items-center space-x-2 font-medium"
            >
              <span>Hablemos por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
