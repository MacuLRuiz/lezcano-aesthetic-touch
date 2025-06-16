
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import ProcedureCard from "@/components/ProcedureCard";

const CirugiaFacial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
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
            <div>
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=600&h=450&fit=crop"
                  alt="Cirugía facial - Dra. Beatriz Lezcano"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procedures Section */}
      <section className="py-16 bg-rosa-claro">
        <div className="container-custom">
          <SectionTitle 
            title="Procedimientos de Cirugía Facial" 
            subtitle="Tratamientos personalizados para cada paciente"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-[4/3] bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1594824704347-ca73ac882479?w=600&h=450&fit=crop"
                  alt="Lifting de cara y cuello"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-seasons mb-3 text-borgona">Lifting de Cara y Cuello</h3>
                <p className="text-gray-600 leading-relaxed">
                  Rejuvenece tu rostro y cuello eliminando la flacidez y las arrugas profundas. Este procedimiento reposiciona los tejidos faciales para lograr un aspecto más joven y descansado, manteniendo la expresión natural de tu rostro. Ideal para combatir los signos del envejecimiento en mejillas, mandíbula y cuello.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-[4/3] bg-gray-100">
                <img
                  src="/lovable-uploads/bleferoplastia.jpg"
                  alt="Blefaroplastia (Párpados)"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-seasons mb-3 text-borgona">Blefaroplastia (Párpados)</h3>
                <p className="text-gray-600 leading-relaxed">
                  Corrige párpados caídos y elimina las bolsas bajo los ojos que te dan aspecto de cansancio. La blefaroplastia rejuvenece la mirada, abriendo los ojos y proporcionando una expresión más alerta y juvenil. Procedimiento con recuperación rápida y resultados muy naturales.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-[4/3] bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=450&fit=crop"
                  alt="Rinoplastia (Nariz)"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-seasons mb-3 text-borgona">Rinoplastia (Nariz)</h3>
                <p className="text-gray-600 leading-relaxed">
                  Mejora la forma y función de tu nariz para lograr armonía facial perfecta. La rinoplastia no solo embellece tu rostro, sino que también puede corregir problemas respiratorios. Cada cirugía se personaliza según tus rasgos faciales para mantener tu identidad única.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-[4/3] bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?w=600&h=450&fit=crop"
                  alt="Mentoplastia (Mentón)"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-seasons mb-3 text-borgona">Mentoplastia (Mentón)</h3>
                <p className="text-gray-600 leading-relaxed">
                  Define y equilibra tu perfil con una mentoplastia que armoniza las proporciones faciales. Este procedimiento puede aumentar o reducir el mentón para crear un balance perfecto con la nariz y otros rasgos faciales, mejorando significativamente tu perfil.
                </p>
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

export default CirugiaFacial;
