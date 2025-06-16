
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="py-16 bg-white bg-opacity-20 relative">
      <div className="container-custom">
        <div className="animate-on-scroll text-center">
          <h2 className="text-3xl md:text-4xl mb-6 font-seasons">
            ¿Tenés dudas? Es normal.
          </h2>
          <p className="text-lg mb-12 max-w-3xl mx-auto">
            Elegir un tratamiento estético es una decisión importante. Queremos que te sientas segura/o y bien informada/o en cada paso.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto animate-on-scroll">
          {/* Imagen con animación slide desde la izquierda */}
          <div className="order-2 md:order-1 self-start animate-on-scroll animate-slide-in-left">
            <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden shadow-lg sticky top-8">
              <img
                src="/lovable-uploads/5c7e72cc-bdeb-4027-89b9-414c6309f0d2.png"
                alt="Dra. Beatriz Lezcano en consulta médica"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Preguntas como accordion */}
          <div className="order-1 md:order-2 self-start">
            <h3 className="text-xl font-semibold mb-6">Preguntas destacadas:</h3>
            
            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  ¿Los resultados son naturales?
                </AccordionTrigger>
                <AccordionContent>
                  Trabajamos para lograr resultados armónicos que respeten tu anatomía natural. Nuestro enfoque busca realzar tu belleza sin alterar tu esencia, utilizando técnicas avanzadas y un criterio estético refinado.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  ¿Cuánto dura la recuperación?
                </AccordionTrigger>
                <AccordionContent>
                  Cada procedimiento tiene tiempos específicos que te explicamos en detalle durante la consulta. Te proporcionamos un plan de recuperación personalizado con todas las indicaciones necesarias para una evolución óptima.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  ¿Qué respaldo tengo como paciente?
                </AccordionTrigger>
                <AccordionContent>
                  Te acompañamos durante todo el proceso, desde la consulta inicial hasta la recuperación completa. Contás con nuestro seguimiento médico continuo y estamos disponibles para resolver cualquier duda que puedas tener.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="text-center md:text-left">
              <NavLink 
                to="/contacto" 
                className="bg-borgona text-white py-3 px-6 rounded hover:bg-borgona/90 transition-all font-medium inline-block transform hover:scale-105"
              >
                Ver todas las preguntas frecuentes
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
