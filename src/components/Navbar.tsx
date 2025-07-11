

import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if current route should have white background
  const isWhiteBackgroundPage = location.pathname === "/sobre-mi" || 
                                location.pathname === "/contacto" || 
                                location.pathname === "/procedimientos" || 
                                location.pathname === "/resultados-y-testimonios";

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

  // Determine the background color based on scroll state and current page
  const getBgColor = () => {
    if (isScrolled || isWhiteBackgroundPage) {
      return "bg-white shadow-md"; 
    } else {
      return "bg-transparent"; // Transparent for home page when not scrolled
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      } ${getBgColor()}`}
    >
      <div className="container-custom flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/3f23d7ac-a31a-4ca5-81c0-6bdb7971560c.png"
            alt="Logo BL"
            className="h-8 md:h-10"
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
            Preguntas
          </NavLink>
          <NavLink 
            to="/contacto" 
            className={({isActive}) => 
              `font-medium hover:text-borgona transition-colors ${
                isActive ? "text-borgona" : ""
              }`
            }
          >
            Contactame
          </NavLink>
          <a 
            href="https://wa.me/5491127096450" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Hablemos
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
                Preguntas
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
                Contactame
              </NavLink>
              <a 
                href="https://wa.me/5491127096450"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary my-2 text-center"
                onClick={closeMenu}
              >
                Hablemos
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

