
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import OptimizedImage from "@/components/OptimizedImage";

const CirugiaFacial = () => {
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
              Cirugía Facial
            </h1>
            <p className="text-xl mb-8">
              Cirugías faciales que realzan tu belleza natural respetando tus rasgos únicos. Con técnicas avanzadas y un enfoque personalizado, cada procedimiento está diseñado para lograr resultados armoniosos y de aspecto natural.
            </p>
            <NavLink to="/contacto" className="btn-primary inline-block">
              Consultar
            </NavLink>
          </div>
        </div>
      </section>

      {/* Lifting de Cara y Cuello */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-seasons mb-6 text-borgona">Lifting de Cara y Cuello</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Rejuvenece tu rostro y cuello eliminando la flacidez y las arrugas profundas. Este procedimiento reposiciona los tejidos faciales para lograr un aspecto más joven y descansado, manteniendo la expresión natural de tu rostro. Ideal para combatir los signos del envejecimiento en mejillas, mandíbula y cuello.
              </p>
            </div>
            <div>
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <OptimizedImage
                  src="/lovable-uploads/d1a1bea7-d779-4c9b-a95a-adedf1acd15c.png"
                  alt="Lifting de cara y cuello"
                  className="w-full h-full"
                  quality={85}
                  lazy={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blefaroplastia */}
      <section className="py-16 bg-rosa-claro">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <h2 className="text-3xl font-seasons mb-6 text-borgona">Blefaroplastia (Párpados)</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Corrige párpados caídos y elimina las bolsas bajo los ojos que te dan aspecto de cansancio. La blefaroplastia rejuvenece la mirada, abriendo los ojos y proporcionando una expresión más alerta y juvenil. Procedimiento con recuperación rápida y resultados muy naturales.
              </p>
            </div>
            <div className="md:order-1">
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <OptimizedImage
                  src="/lovable-uploads/bleferoplastia.jpg"
                  alt="Blefaroplastia (Párpados)"
                  className="w-full h-full"
                  quality={85}
                  lazy={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rinoplastia */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-seasons mb-6 text-borgona">Rinoplastia (Nariz)</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Mejora la forma y función de tu nariz para lograr armonía facial perfecta. La rinoplastia no solo embellece tu rostro, sino que también puede corregir problemas respiratorios. Cada cirugía se personaliza según tus rasgos faciales para mantener tu identidad única.
              </p>
            </div>
            <div>
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <OptimizedImage
                  src="/lovable-uploads/4595e78e-5fb5-4554-af82-3b5386081e5a.png"
                  alt="Rinoplastia (Nariz)"
                  className="w-full h-full"
                  quality={85}
                  lazy={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentoplastia */}
      <section className="py-16 bg-rosa-claro">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <h2 className="text-3xl font-seasons mb-6 text-borgona">Mentoplastia (Mentón)</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Define y equilibra tu perfil con una mentoplastia que armoniza las proporciones faciales. Este procedimiento puede aumentar o reducir el mentón para crear un balance perfecto con la nariz y otros rasgos faciales, mejorando significativamente tu perfil.
              </p>
            </div>
            <div className="md:order-1">
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <OptimizedImage
                  src="/lovable-uploads/65323b41-0e75-400d-bcd7-a28231d35f5f.png"
                  alt="Mentoplastia (Mentón)"
                  className="w-full h-full"
                  quality={85}
                  lazy={true}
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

export default CirugiaFacial;
