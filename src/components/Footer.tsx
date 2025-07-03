
import { NavLink } from "react-router-dom";
import { Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start">
            <NavLink to="/">
              <img 
                src="/lovable-uploads/b0a16dc1-62b5-439d-961b-a68098a55c04.png" 
                alt="Dra. Beatriz Lezcano - Cirugía Plástica y Reparadora" 
                className="h-20 mb-4"
              />
            </NavLink>
            <p className="text-sm text-center md:text-left">
              Cirugía plástica con propósito.<br />
              Resultados naturales, atención cercana.
            </p>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-seasons mb-4">Enlaces rápidos</h3>
            <div className="flex flex-col space-y-2">
              <NavLink to="/" className="hover:text-borgona transition-colors">
                Inicio
              </NavLink>
              <NavLink to="/sobre-mi" className="hover:text-borgona transition-colors">
                Sobre mí
              </NavLink>
              <NavLink to="/procedimientos" className="hover:text-borgona transition-colors">
                Procedimientos
              </NavLink>
              <NavLink to="/resultados-y-testimonios" className="hover:text-borgona transition-colors">
                Preguntas Frecuentes
              </NavLink>
              <NavLink to="/contacto" className="hover:text-borgona transition-colors">
                Contacto
              </NavLink>
            </div>
          </div>

          {/* Contact information with offices */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-seasons mb-4">Consultorios</h3>
            
            <div className="space-y-2 text-sm">
              <p>Lanús</p>
              <p>Quilmes</p>
              <p>Nordelta</p>
              <p>Hudson</p>
            </div>
            
            <div className="flex items-center space-x-4 mt-6">
              <a 
                href="https://www.instagram.com/dra.beatrizlezcano" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-borgona hover:text-opacity-80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>

               <a
                href="https://www.linkedin.com/in/dra-beatriz-lezcano-8095a935a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-borgona hover:text-opacity-80 transition-color"
                aria-label="Linkedin"
              >
                <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512"
                width="24" 
                height="24" 
                fill="currentColor">
                  
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                </svg>
              </a>
              
              <a
                href="https://www.tiktok.com/@drabeatrizlezcano?_t=ZM-8xj1pGxgVKH&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-borgona hover:text-opacity-80 transition-color"
                aria-label="TikTok"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 448 512" 
                  width="24" 
                  height="24" 
                  fill="currentColor"
                >
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                </svg>
              </a>
              
              <a
                href="https://wa.me/5491127096450"
                target="_blank"
                rel="noopener noreferrer"
                className="text-borgona hover:text-opacity-80 transition-color"
                aria-label="Contactar por WhatsApp"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 448 512" 
                  width="24" 
                  height="24" 
                  fill="currentColor"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
                
              </a>

            </div>
          </div>
        </div>

        <div className="border-t border-gris-neutro mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Dra. Beatriz Lezcano. Todos los derechos reservados.
          </p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center text-borgona hover:text-opacity-80 transition-colors"
            aria-label="Volver arriba"
          >
            <span className="mr-2">Volver arriba</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
