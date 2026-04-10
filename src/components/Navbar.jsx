import { useEffect, useState } from "react";

function Navbar({ menuOpen, setMenuOpen, activeSection }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/images/logojoel.png" alt="Joel Cauich Logo" className="logo-img" />
        </div>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li>
            <a
              href="#inicio"
              className={activeSection === "inicio" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Inicio
            </a>
          </li>

          <li>
            <a
              href="#sobre-mi"
              className={activeSection === "sobre-mi" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Sobre Mí
            </a>
          </li>
          <li>
            <a
              href="#cv"
              className={activeSection === "cv" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              CV
            </a>
          </li>

          <li>
            <a
              href="#servicios"
              className={activeSection === "servicios" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Servicios
            </a>
          </li>

          <li>
            <a
              href="#portafolio"
              className={activeSection === "portafolio" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Portafolio
            </a>
          </li>

          <li>
            <a
              href="#contacto"
              className={activeSection === "contacto" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </a>
          </li>
        </ul>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;