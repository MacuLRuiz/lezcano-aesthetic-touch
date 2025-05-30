
import React, { useEffect } from "react";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { Instagram } from "lucide-react";

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

  return (
    <>
      {/* Hero Section with Background Image */}
      <section 
        className="relative pt-32 pb-24 min-h-[60vh] flex items-center" 
        style={{
          backgroundImage: "linear-gradient(to right, rgba(131, 72, 74, 0.8), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/3289c88c-f7f0-4e63-b541-4f1fee5facac.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-seasons mb-6 text-white">Escribime, ¿cómo te ayudo?</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white">
            Estoy acá para responder todas tus consultas y acompañarte en tu proceso. 
            No dudes en escribirme.
          </p>
          <div className="h-1 w-24 bg-rosa-claro mx-auto mt-8"></div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <SectionTitle 
                title="Escríbeme" 
                centered={false}
              />
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div className="animate-on-scroll">
              <SectionTitle 
                title="Información de contacto" 
                centered={false}
              />
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-seasons mb-2">Consultorio</h3>
                  <p className="mb-1">Lanús, Buenos Aires</p>
                  <p className="text-gray-600">
                    Horario de atención: Lunes a Viernes de 9:00 a 18:00hs
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-seasons mb-2">Contacto directo</h3>
                  <div className="flex items-center space-x-4">
                    <a 
                      href="https://wa.me/1234567890" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center space-x-2"
                    >
                      <span>WhatsApp</span>
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-borgona hover:text-opacity-80 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={24} />
                    </a>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-seasons mb-4">Ubicación</h3>
                  <div className="aspect-video bg-gris-claro rounded-md overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52563.38979239153!2d-58.414041799999996!3d-34.6992927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccd2ca4bbda8d%3A0x9959a73122e24898!2sLan%C3%BAs%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1715670514518!5m2!1ses!2sar" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={false} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
