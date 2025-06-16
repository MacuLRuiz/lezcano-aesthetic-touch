
import React from "react";
import { Instagram, Facebook } from "lucide-react";

const SocialMediaSection = () => {
  return (
    <section className="py-16 bg-rosa-claro relative self-start">
      <div className="container-custom text-center">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-seasons mb-6">
            ¡Seguime en mis redes!
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            En mis redes comparto información, novedades y reflexiones sobre el cuidado estético. ¡Te invito a acompañarme!
          </p>
          
          <div className="flex justify-center gap-6">
            <a 
              href="#" 
              className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 text-borgona hover:text-borgona/80"
              aria-label="Seguir en Instagram"
            >
              <Instagram size={32} />
            </a>
            <a 
              href="#" 
              className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 text-borgona hover:text-borgona/80"
              aria-label="Seguir en Facebook"
            >
              <Facebook size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
