import Reveal from "./Reveal";
import { FaCode, FaMobileAlt, FaPalette } from "react-icons/fa";

function Services({ services }) {
  const icons = [<FaCode />, <FaMobileAlt />, <FaPalette />];

  return (
    <section id="servicios" className="services">
      <Reveal>
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Servicios</span>
            <h2>Cómo puedo ayudarte</h2>
            <p>
              Desarrollo soluciones digitales enfocadas en funcionalidad, diseño y
              rendimiento.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{icons[index]}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Services;