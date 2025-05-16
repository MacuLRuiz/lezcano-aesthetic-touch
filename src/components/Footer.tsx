
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
    <footer className="bg-gris-claro py-12">
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
                Resultados y Testimonios
              </NavLink>
              <NavLink to="/contacto" className="hover:text-borgona transition-colors">
                Contacto
              </NavLink>
            </div>
          </div>

          {/* Contact information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-seasons mb-4">Contacto</h3>
            <p className="mb-2">Lanús, Buenos Aires</p>
            <div className="flex items-center space-x-4 mt-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-borgona hover:text-opacity-80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex items-center space-x-2"
              >
                <span>WhatsApp</span>
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
