import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Reveal from "./Reveal";

function Footer() {
  return (
    <Reveal>
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-info">
            <h3>Joel Cauich</h3>
            <p>
              Desarrollador web y móvil enfocado en crear soluciones modernas,
              funcionales y escalables.
            </p>
          </div>

          <div className="footer-links">
            <h4>Enlaces</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#sobre-mi">Sobre mí</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#portafolio">Portafolio</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Redes</h4>
            <div className="social-links">
              <a href="https://github.com/JoelCauichP" target="_blank" rel="noopener noreferrer">
                <FaGithub /> 
              </a>
              <a href="https://www.linkedin.com/in/joel-santiago-cauich-peraza-4554832a9/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> 
              </a>
              <a href="https://wa.me/529995687291" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /> 
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Joel Cauich. Todos los derechos reservados.</p>
        </div>
      </footer>
    </Reveal>
  );
}

export default Footer;