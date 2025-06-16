
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import ProcedureCard from "@/components/ProcedureCard";

const EsteticaNoQuirurgica = () => {
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
                Estética No Quirúrgica
              </h1>
              <p className="text-xl mb-8">
                Tratamientos mínimamente invasivos para rejuvenecer y embellecer sin cirugía, con resultados naturales.
              </p>
              <NavLink to="/contacto" className="btn-primary inline-block">
                Consultar
              </NavLink>
            </div>
            <div>
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=450&fit=crop"
                  alt="Estética no quirúrgica - Dra. Beatriz Lezcano"
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
            title="Tratamientos de Estética No Quirúrgica" 
            subtitle="Procedimientos mínimamente invasivos con máximos resultados"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProcedureCard
              title="Botox"
              description="Tratamiento para suavizar líneas de expresión y prevenir signos de envejecimiento."
              link="/procedimientos"
              imageSrc="/lovable-uploads/243dd21a-d6ab-44ce-9864-860c9ee44492.png"
            />
            <ProcedureCard
              title="Rellenos con ácido hialurónico"
              description="Hidrata y da volumen a labios, mejillas y otras áreas del rostro."
              link="/procedimientos"
            />
            <ProcedureCard
              title="Hilos tensores"
              description="Lifting no quirúrgico para reafirmar y elevar la piel."
              link="/procedimientos"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-borgona text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-seasons mb-6">
            ¿Querés saber más sobre estética no quirúrgica?
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

export default EsteticaNoQuirurgica;
