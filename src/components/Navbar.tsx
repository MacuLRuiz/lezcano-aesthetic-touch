import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-2 bg-white shadow-md" : "py-4 bg-transparent"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <img 
            src={isScrolled 
              ? "/lovable-uploads/3f23d7ac-a31a-4ca5-81c0-6bdb7971560c.png"
              : "/lovable-uploads/2f2356fc-234a-49aa-b7f1-683fe6bb7d6c.png"
            }
            alt={isScrolled ? "Logo BL" : "Dra. Beatriz Lezcano - Cirugía Plástica y Reparadora"}
            className="h-10 md:h-12"
          />
        </NavLink>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-borgona"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              `font-medium hover:text-borgona transition-colors ${
                isActive ? "text-borgona" : ""
              }`
            }
          >
            Inicio
          </NavLink>
          <NavLink 
            to="/sobre-mi" 
            className={({isActive}) => 
              `font-medium hover:text-borgona transition-colors ${
                isActive ? "text-borgona" : ""
              }`
            }
          >
            Sobre mí
          </NavLink>
          <NavLink 
            to="/procedimientos" 
            className={({isActive}) => 
              `font-medium hover:text-borgona transition-colors ${
                isActive ? "text-borgona" : ""
              }`
            }
          >
            Procedimientos
          </NavLink>
          <NavLink 
            to="/resultados-y-testimonios" 
            className={({isActive}) => 
              `font-medium hover:text-borgona transition-colors ${
                isActive ? "text-borgona" : ""
              }`
            }
          >
            Resultados
          </NavLink>
          <NavLink 
            to="/contacto" 
            className={({isActive}) => 
              `font-medium hover:text-borgona transition-colors ${
                isActive ? "text-borgona" : ""
              }`
            }
          >
            Contacto
          </NavLink>
          <a 
            href="/contacto" 
            className="btn-primary"
          >
            Solicitar consulta
          </a>
        </div>

        {/* Mobile menu panel */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden animate-fade-in">
            <div className="flex flex-col p-4 space-y-3">
              <NavLink 
                to="/" 
                className={({isActive}) => 
                  `p-2 font-medium hover:bg-gris-claro rounded ${
                    isActive ? "text-borgona" : ""
                  }`
                }
                onClick={closeMenu}
              >
                Inicio
              </NavLink>
              <NavLink 
                to="/sobre-mi" 
                className={({isActive}) => 
                  `p-2 font-medium hover:bg-gris-claro rounded ${
                    isActive ? "text-borgona" : ""
                  }`
                }
                onClick={closeMenu}
              >
                Sobre mí
              </NavLink>
              <NavLink 
                to="/procedimientos" 
                className={({isActive}) => 
                  `p-2 font-medium hover:bg-gris-claro rounded ${
                    isActive ? "text-borgona" : ""
                  }`
                }
                onClick={closeMenu}
              >
                Procedimientos
              </NavLink>
              <NavLink 
                to="/resultados-y-testimonios" 
                className={({isActive}) => 
                  `p-2 font-medium hover:bg-gris-claro rounded ${
                    isActive ? "text-borgona" : ""
                  }`
                }
                onClick={closeMenu}
              >
                Resultados
              </NavLink>
              <NavLink 
                to="/contacto" 
                className={({isActive}) => 
                  `p-2 font-medium hover:bg-gris-claro rounded ${
                    isActive ? "text-borgona" : ""
                  }`
                }
                onClick={closeMenu}
              >
                Contacto
              </NavLink>
              <a 
                href="/contacto" 
                className="btn-primary my-2 text-center"
                onClick={closeMenu}
              >
                Solicitar consulta
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
