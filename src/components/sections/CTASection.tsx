
import React from "react";
import { NavLink } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-borgona text-white relative overflow-hidden">
      <div className="container-custom text-center">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-seasons mb-6 text-white">
            ¿Listo para dar el primer paso?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Te invito a una consulta personalizada para evaluar juntos las mejores opciones para vos.
          </p>
          <NavLink 
            to="/contacto" 
            className="bg-white text-borgona py-2 px-6 rounded hover:bg-opacity-90 transition-all font-medium text-lg inline-block transform hover:scale-105 hover:shadow-lg"
          >
            ¿En qué puedo ayudarte?
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
