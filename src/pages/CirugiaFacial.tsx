
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
                Procedimientos especializados para armonizar y rejuvenecer el rostro con técnicas avanzadas y resultados naturales.
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProcedureCard
              title="Rinoplastia"
              description="Armoniza la forma y funcionalidad de la nariz, mejorando tanto la estética como la respiración."
              link="/procedimientos"
              imageSrc="/lovable-uploads/4595e78e-5fb5-4554-af82-3b5386081e5a.png"
            />
            <ProcedureCard
              title="Blefaroplastia"
              description="Rejuvenece la mirada eliminando el exceso de piel y grasa en los párpados."
              link="/procedimientos"
              imageSrc="/lovable-uploads/bleferoplastia.jpg"
            />
            <ProcedureCard
              title="Lifting facial"
              description="Restaura la firmeza y juventud del rostro con técnicas avanzadas."
              link="/procedimientos"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-borgona text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-seasons mb-6">
            ¿Querés saber más sobre cirugía facial?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Te invito a una consulta personalizada para evaluar las mejores opciones para vos.
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
