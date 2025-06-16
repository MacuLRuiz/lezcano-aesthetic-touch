
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const EsteticaNoQuirurgica = () => {
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
              Estética No Quirúrgica
            </h1>
            <p className="text-xl mb-8">
              Tratamientos mínimamente invasivos para rejuvenecer y embellecer sin cirugía. Con técnicas avanzadas y resultados naturales, cada procedimiento está diseñado para realzar tu belleza de manera segura y efectiva.
            </p>
            <NavLink to="/contacto" className="btn-primary inline-block">
              Consultar
            </NavLink>
          </div>
        </div>
      </section>

      {/* Botox */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-seasons mb-6 text-borgona">Botox</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Suaviza las líneas de expresión y previene los signos del envejecimiento de manera natural. El botox es ideal para tratar arrugas en la frente, patas de gallo y entrecejo. Este tratamiento mínimamente invasivo proporciona resultados visibles en pocos días, manteniendo la expresión natural del rostro.
              </p>
            </div>
            <div>
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/lovable-uploads/243dd21a-d6ab-44ce-9864-860c9ee44492.png"
                  alt="Botox - Tratamiento de líneas de expresión"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rellenos */}
      <section className="py-16 bg-rosa-claro">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <h2 className="text-3xl font-seasons mb-6 text-borgona">Rellenos con Ácido Hialurónico</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Hidrata y da volumen a labios, mejillas y otras áreas del rostro para lograr un aspecto juvenil y natural. Los rellenos con ácido hialurónico son perfectos para restaurar volumen perdido, definir contornos faciales y mejorar la hidratación de la piel. Resultados inmediatos y de larga duración.
              </p>
            </div>
            <div className="md:order-1">
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=450&fit=crop"
                  alt="Rellenos con Ácido Hialurónico"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bioestimulación */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-seasons mb-6 text-borgona">Bioestimulación</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Estimula la producción natural de colágeno para rejuvenecer la piel desde adentro. La bioestimulación con inductores de colágeno mejora la textura, firmeza y luminosidad de la piel de manera gradual y natural. Ideal para prevenir y tratar los signos del envejecimiento facial y corporal.
              </p>
            </div>
            <div>
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=450&fit=crop"
                  alt="Bioestimulación - Estimulación natural de colágeno"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plasma Rico en Plaquetas */}
      <section className="py-16 bg-rosa-claro">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <h2 className="text-3xl font-seasons mb-6 text-borgona">Plasma Rico en Plaquetas (PRP)</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Utiliza los factores de crecimiento de tu propia sangre para regenerar y rejuvenecer la piel. El PRP estimula la renovación celular, mejora la textura y luminosidad, y reduce líneas finas. Un tratamiento completamente natural que utiliza el poder regenerativo de tu propio organismo.
              </p>
            </div>
            <div className="md:order-1">
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=450&fit=crop"
                  alt="Plasma Rico en Plaquetas (PRP)"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hilos Tensores */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-seasons mb-6 text-borgona">Hilos Tensores</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Lifting no quirúrgico para reafirmar y elevar la piel del rostro y cuello. Los hilos tensores proporcionan un efecto lifting inmediato, estimulando la producción natural de colágeno. Ideal para tratar la flacidez facial, definir el óvalo facial y lograr un aspecto más joven sin cirugía.
              </p>
            </div>
            <div>
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=450&fit=crop"
                  alt="Hilos Tensores - Lifting no quirúrgico"
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

export default EsteticaNoQuirurgica;
