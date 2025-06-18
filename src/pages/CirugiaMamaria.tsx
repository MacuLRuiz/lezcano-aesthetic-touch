
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const CirugiaMamaria = () => {
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
              Cirugía Mamaria
            </h1>
            <p className="text-xl mb-8">
              Procedimientos especializados para realzar y armonizar el busto con resultados naturales y seguros. Con técnicas avanzadas y un enfoque personalizado, cada intervención está diseñada para mejorar tu figura y confianza.
            </p>
            <NavLink to="/contacto" className="btn-primary inline-block">
              Consultar
            </NavLink>
          </div>
        </div>
      </section>

      {/* Aumento Mamario */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-seasons mb-6 text-borgona">Aumento Mamario con Implantes</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Realza el volumen y la forma de los senos para lograr una apariencia más armónica y femenina. El aumento mamario con implantes es ideal para quienes desean mejorar el tamaño del busto de manera natural y segura. Utilizamos implantes de alta calidad que se adaptan perfectamente a tu anatomía y expectativas.
              </p>
            </div>
            <div>
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/lovable-uploads/371b18e7-0749-4015-9787-163ab28fe24b.png"
                  alt="Aumento Mamario con Implantes"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reducción Mamaria */}
      <section className="py-16 bg-rosa-claro">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <h2 className="text-3xl font-seasons mb-6 text-borgona">Reducción Mamaria</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Reduce el tamaño del busto para mayor comodidad y proporción corporal. La reducción mamaria alivia problemas físicos como dolor de espalda, cuello y hombros causados por el exceso de peso mamario. Este procedimiento mejora significativamente la calidad de vida y proporciona una silueta más equilibrada.
              </p>
            </div>
            <div className="md:order-1">
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/lovable-uploads/reduccion mamaria.jpg"
                  alt="Reducción Mamaria"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mastopexia */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-seasons mb-6 text-borgona">Mastopexia (Levantamiento de Senos)</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Levanta y reafirma los senos para una apariencia más juvenil y erguida. La mastopexia es perfecta para corregir la ptosis mamaria causada por el embarazo, lactancia, pérdida de peso o el paso del tiempo. Este procedimiento restaura la posición natural del pezón y mejora la forma del busto sin necesidad de implantes.
              </p>
            </div>
            <div>
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/lovable-uploads/Mastopexia.jpg"
                  alt="Mastopexia (Levantamiento de Senos)"
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
          <h2 className="text-3xl md:text-4xl font-seasons mb-6">
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

export default CirugiaMamaria;
