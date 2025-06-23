
import React from "react";
import { NavLink } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";

const SpecialtiesSection = () => {
  return (
    <section className="py-16 bg-white relative">
      <div className="container-custom">
        <div className="animate-on-scroll text-center">
          <SectionTitle 
            title="Especialidades" 
            subtitle="Tratamientos especializados con técnicas avanzadas"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll">
          <NavLink 
            to="/cirugia-facial" 
            className="relative aspect-[3/4] rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <img
              src="/lovable-uploads/cirugia facial.jpg"
              alt="Cirugía facial"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-xl md:text-2xl font-seasons text-white text-center px-4">
                Cirugía facial
              </h3>
            </div>
          </NavLink>
          
          <NavLink 
            to="/cirugia-corporal" 
            className="relative aspect-[3/4] rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <img
              src="/lovable-uploads/cirugia corporal.jpg"
              alt="Cirugía corporal"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-xl md:text-2xl font-seasons text-white text-center px-4">
                Cirugía corporal
              </h3>
            </div>
          </NavLink>
          
          <NavLink 
            to="/cirugia-mamaria" 
            className="relative aspect-[3/4] rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <img
              src="/lovable-uploads/Mastopexia.jpg"
              alt="Cirugía mamaria"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-xl md:text-2xl font-seasons text-white text-center px-4">
                Cirugía mamaria
              </h3>
            </div>
          </NavLink>
          
          <NavLink 
            to="/estetica-no-quirurgica" 
            className="relative aspect-[3/4] rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <img
              src="/lovable-uploads/Bioestimulacion.jpg"
              alt="Estética no quirúrgica"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-xl md:text-2xl font-seasons text-white text-center px-4">
                Estética no quirúrgica
              </h3>
            </div>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
