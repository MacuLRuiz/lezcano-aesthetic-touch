
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const CirugiaCorporal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl mb-6 font-seasons text-borgona">
              Cirugía Corporal
            </h1>
            <p className="text-xl mb-8">
              Remodelación y contorneado del cuerpo para lograr una silueta armónica y natural. Con técnicas avanzadas y un enfoque personalizado, cada procedimiento está diseñado para realzar tu figura y mejorar tu confianza.
            </p>
            <NavLink to="/contacto" className="btn-primary inline-block">
              Consultar
            </NavLink>
          </div>
        </div>
      </section>

      {/* Abdominoplastia */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-seasons mb-6 text-borgona">Abdominoplastia</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Remodela y tonifica el abdomen eliminando el exceso de piel y grasa. La abdominoplastia es ideal para quienes han experimentado cambios significativos de peso o embarazos. Este procedimiento restaura la firmeza abdominal, mejora el contorno de la cintura y puede corregir la separación de músculos abdominales (diástasis).
              </p>
            </div>
            <div>
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/lovable-uploads/abdominoplastia.jpg"
                  alt="Abdominoplastia"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lipoescultura */}
      <section className="py-16 bg-rosa-claro">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <h2 className="text-3xl font-seasons mb-6 text-borgona">Lipoescultura</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Remodela el contorno corporal eliminando acúmulos de grasa localizada resistentes al ejercicio y la dieta. La lipoescultura no solo elimina grasa, sino que también esculpe y define la silueta. Ideal para áreas como abdomen, flancos, muslos, brazos y espalda, proporcionando resultados naturales y armoniosos.
              </p>
            </div>
            <div className="md:order-1">
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/lovable-uploads/3980f895-566b-4465-8516-6c1cd83ab4d1.jpg"
                  alt="Lipoescultura"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Braquioplastia */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-seasons mb-6 text-borgona">Braquioplastia (Dermolipectomía de Brazos)</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Elimina el exceso de piel y grasa de los brazos para lograr contornos más firmes y definidos. La braquioplastia es perfecta para quienes han perdido peso significativo o experimentan flacidez por el paso del tiempo. Este procedimiento mejora la forma y proporción de los brazos, brindando mayor confianza al usar cualquier tipo de ropa.
              </p>
            </div>
            <div>
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/lovable-uploads/braquioplastia.jpg"
                  alt="Braquioplastia (Dermolipectomía de Brazos)"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-borgona text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-seasons mb-6 text-white">
            ¿Tienes dudas sobre algún procedimiento?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Agenda una consulta personalizada para evaluar tu caso específico y conocer todas las opciones disponibles.
          </p>
          <NavLink 
            to="/contacto" 
            className="bg-white text-borgona py-3 px-8 rounded hover:bg-opacity-90 transition-all font-medium text-lg inline-block"
          >
            Agendar consulta
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default CirugiaCorporal;
