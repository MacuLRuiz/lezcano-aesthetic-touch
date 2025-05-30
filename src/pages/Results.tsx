import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import BeforeAfter from "@/components/BeforeAfter";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const Results = () => {
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
      author: "María P."
    },
    {
      quote: "Después de muchas consultas con diferentes profesionales, elegí a la Dra. Lezcano por su calidez y profesionalismo. Su atención personalizada y seguimiento post operatorio fueron excepcionales.",
      author: "Laura S."
    },
    {
      quote: "Increíble experiencia desde la primera consulta. La Dra. explicó todo con paciencia y claridad. El procedimiento fue exactamente como lo habíamos planeado y la recuperación muy bien acompañada.",
      author: "Carolina M."
    }
  ];

  const featuredTestimonial = {
    quote: "Agradezco a la Dra. Beatriz por su dedicación y profesionalismo. El procedimiento de reconstrucción mamaria no solo cambió mi apariencia física, sino que me devolvió la confianza y me ayudó a cerrar un capítulo difícil de mi vida.",
    author: "Gabriela T."
  };

  return (
    <>
      {/* Hero Section with Background Image */}
      <section 
        className="relative pt-32 pb-24 min-h-[90vh] flex items-center" 
        style={{
          backgroundImage: "linear-gradient(to right, rgba(131, 72, 74, 0.8), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/f72977be-199b-44c5-9d93-d89c703d51e2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-seasons mb-6 text-white">Resultados y testimonios</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white">
            Historias reales y transformaciones naturales que reflejan mi compromiso con la 
            excelencia y el bienestar de mis pacientes.
          </p>
          <div className="h-1 w-24 bg-rosa-claro mx-auto mt-8"></div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-12">
        <div className="container-custom">
          <SectionTitle 
            title="Antes y después"
            subtitle="Resultados reales de mis pacientes"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-on-scroll">
              <BeforeAfter
                beforeImage="https://via.placeholder.com/300x300?text=Antes"
                afterImage="https://via.placeholder.com/300x300?text=Después"
                title="Rinoplastia"
              />
            </div>
            
            <div className="animate-on-scroll">
              <BeforeAfter
                beforeImage="https://via.placeholder.com/300x300?text=Antes"
                afterImage="https://via.placeholder.com/300x300?text=Después"
                title="Aumento mamario"
              />
            </div>
            
            <div className="animate-on-scroll">
              <BeforeAfter
                beforeImage="https://via.placeholder.com/300x300?text=Antes"
                afterImage="https://via.placeholder.com/300x300?text=Después"
                title="Lipoescultura"
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="mb-6 text-gray-600 italic">
              Todos los casos mostrados cuentan con el consentimiento expreso de los pacientes.
            </p>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-12 bg-gris-claro">
        <div className="container-custom">
          <SectionTitle 
            title="Experiencias de pacientes"
            subtitle="Lo que dicen quienes confiaron en mi trabajo"
          />
          
          <div className="animate-on-scroll max-w-4xl mx-auto">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <TestimonialCarousel 
              testimonials={[featuredTestimonial]} 
              featured={true}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-rosa-claro bg-opacity-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-seasons mb-6">
            ¿Lista para escribir tu propia historia de transformación?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Da el primer paso hacia la versión que deseas de ti misma con una consulta personalizada.
          </p>
          <NavLink 
            to="/contacto" 
            className="btn-primary"
          >
            Agendar consulta
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Results;
