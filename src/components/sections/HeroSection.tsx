
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import OptimizedImage from "@/components/OptimizedImage";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);
  const animatedWord = "propósito";
  
  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    
    const typeWriter = () => {
      if (!isDeleting && index <= animatedWord.length) {
        setDisplayText(animatedWord.slice(0, index));
        index++;
      } else if (!isDeleting && index > animatedWord.length) {
        // Pause before starting to delete
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      } else if (isDeleting && index > 0) {
        index--;
        setDisplayText(animatedWord.slice(0, index));
      } else if (isDeleting && index === 0) {
        // Reset for next cycle
        isDeleting = false;
        index = 0;
      }
    };

    const timer = setInterval(typeWriter, isDeleting ? 50 : 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-rosa-claro/20 to-white overflow-hidden">
      <div className="container-custom relative z-10 pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-seasons text-borgona leading-tight mb-6">
              Cirugía plástica con{" "}
              <span className="inline-block min-w-[200px]">
                {displayText}
                <span className="animate-pulse text-borgona">|</span>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-2xl">
              Soy la <span className="font-semibold text-borgona">Dra. Beatriz Lezcano</span>. Cirujana plástica y segunda generación de médicos. Trabajo con un enfoque personalizado, humano y profesional para que cada paciente se sienta acompañado y seguro.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <NavLink 
                to="/contacto" 
                className="bg-borgona text-white py-4 px-8 rounded-full text-lg font-semibold hover:bg-borgona/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center justify-center"
              >
                ¡Hablemos!
              </NavLink>
              
              <NavLink 
                to="/sobre-mi" 
                className="py-4 px-8 border-2 border-borgona text-borgona rounded-full text-lg font-semibold hover:bg-borgona hover:text-white transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Conocé mi historia
              </NavLink>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className={`relative aspect-[3/4] bg-white rounded-2xl overflow-hidden max-w-[450px] mx-auto shadow-2xl transition-all duration-1000 ease-out ${
                imageLoaded ? 'animate-slide-in-left opacity-100' : 'opacity-0 transform translate-x-12'
              }`}>
                <OptimizedImage
                  src="/lovable-uploads/home.JPG"
                  alt="Dra. Beatriz Lezcano - Cirujana Plástica"
                  className="w-full h-full"
                  width={450}
                  height={600}
                  quality={90}
                  lazy={false}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
