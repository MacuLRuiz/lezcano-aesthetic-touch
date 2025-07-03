
import React from "react";
import { Instagram } from "lucide-react";

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
              href="https://www.instagram.com/dra.beatrizlezcano" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 text-borgona hover:text-borgona/80"
              aria-label="Seguir en Instagram"
            >
              <Instagram size={32} />
            </a>
            <a 
              href="https://www.linkedin.com/in/dra-beatriz-lezcano-8095a935a/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 text-borgona hover:text-borgona/80"
              aria-label="Seguir en LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 448 512"
              width="32" 
              height="32" 
              fill="currentColor">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
              </svg>
            </a>
            <a 
              href="https://www.tiktok.com/@drabeatrizlezcano?_t=ZM-8xj1pGxgVKH&_r=1" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 text-borgona hover:text-borgona/80"
              aria-label="Seguir en TikTok"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512" 
                width="32" 
                height="32" 
                fill="currentColor"
              >
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
