
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Sparkles, Heart, User } from "lucide-react";

const HeroSection = () => {
  // Estados para el efecto de máquina de escribir
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const fullText = "propósito";
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  // Efecto para la animación de máquina de escribir
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }

      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        return;
      }

      if (isDeleting) {
        setDisplayText(prev => prev.slice(0, -1));
      } else {
        setDisplayText(prev => fullText.slice(0, prev.length + 1));
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, fullText]);

  // Efecto para el cursor parpadeante
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-rosa-claro/20 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-borgona/5 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-rosa-claro/30 rounded-full animate-float delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-borgona/10 rounded-full animate-float delay-500"></div>
      </div>

      <div className="container-custom relative z-10 pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            {/* Badge decorativo */}
            <div className="inline-flex items-center px-4 py-2 bg-borgona/10 rounded-full text-borgona text-sm font-medium mb-6 animate-fade-in-up">
              <Sparkles className="w-4 h-4 mr-2" />
              Segunda generación en cirugía plástica
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-seasons text-borgona leading-tight mb-6 animate-fade-in-left">
              Cirugía plástica con{" "}
              <span className="relative inline-block">
                {/* Texto invisible para reservar espacio */}
                <span className="invisible" aria-hidden="true">{fullText}</span>
                {/* Texto visible con animación */}
                <span className="absolute left-0 top-0 flex items-baseline bg-gradient-to-r from-borgona to-borgona/80 bg-clip-text text-transparent">
                  {displayText}
                  <span className={`inline-block w-1 h-12 md:h-16 bg-borgona ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
                </span>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed animate-fade-in-left delay-200 max-w-2xl">
              Soy la <span className="font-semibold text-borgona">Dra. Beatriz Lezcano</span>. Cirujana plástica y segunda generación de médicos. Trabajo con un enfoque personalizado, humano y profesional para que cada paciente se sienta acompañado y seguro.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-left delay-300">
              <NavLink 
                to="/contacto" 
                className="group relative overflow-hidden bg-borgona text-white py-4 px-8 rounded-full text-lg font-semibold hover:bg-borgona/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center justify-center"
              >
                <span className="relative z-10">¡Hablemos!</span>
                <div className="absolute inset-0 bg-gradient-to-r from-borgona to-borgona/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </NavLink>
              
              <NavLink 
                to="/sobre-mi" 
                className="group py-4 px-8 border-2 border-borgona text-borgona rounded-full text-lg font-semibold hover:bg-borgona hover:text-white transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Conocé mi historia
              </NavLink>
            </div>

            {/* Stats o highlights */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200 animate-fade-in-left delay-500">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-borgona">10+</div>
                <div className="text-sm text-gray-600">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-borgona">4</div>
                <div className="text-sm text-gray-600">Consultorios</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-borgona">2da</div>
                <div className="text-sm text-gray-600">Generación médica</div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 animate-slide-in">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-borgona/20 to-rosa-claro/20 rounded-2xl blur-xl"></div>
              
              <div className="relative aspect-[3/4] bg-white rounded-2xl overflow-hidden max-w-[450px] mx-auto shadow-2xl border border-white/50">
                <img
                  src="/lovable-uploads/home.JPG"
                  alt="Dra. Beatriz Lezcano - Cirujana Plástica"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-lg animate-float">
                <Heart className="w-8 h-8 text-borgona" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-borgona rounded-full p-4 shadow-lg animate-float delay-700">
                <User className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
