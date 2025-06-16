
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import ProcedureCard from "@/components/ProcedureCard";

const CirugiaMamaria = () => {
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
                Cirugía Mamaria
              </h1>
              <p className="text-xl mb-8">
                Procedimientos especializados para realzar y armonizar el busto con resultados naturales y seguros.
              </p>
              <NavLink to="/contacto" className="btn-primary inline-block">
                Consultar
              </NavLink>
            </div>
            <div>
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=450&fit=crop"
                  alt="Cirugía mamaria - Dra. Beatriz Lezcano"
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
            title="Procedimientos de Cirugía Mamaria" 
            subtitle="Tratamientos personalizados para cada paciente"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProcedureCard
              title="Aumento mamario"
              description="Realza el volumen y la forma de los senos para una apariencia más armónica."
              link="/procedimientos"
              imageSrc="/lovable-uploads/371b18e7-0749-4015-9787-163ab28fe24b.png"
            />
            <ProcedureCard
              title="Reducción mamaria"
              description="Reduce el tamaño del busto para mayor comodidad y proporción."
              link="/procedimientos"
            />
            <ProcedureCard
              title="Mastopexia"
              description="Levanta y reafirma los senos para una apariencia más juvenil."
              link="/procedimientos"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-borgona text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-seasons mb-6">
            ¿Querés saber más sobre cirugía mamaria?
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

export default CirugiaMamaria;
