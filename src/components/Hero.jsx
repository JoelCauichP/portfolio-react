import heroBg from "../assets/hero.jpeg";
import RotatingText from "./RotatingText";

function Hero() {
  return (
    <section
      id="inicio"
      className="hero"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${heroBg}) center/cover no-repeat`,
      }}
    >
      <div className="hero-content">
        <span className="hero-tag">¡Hola! Soy Joel Cauich</span>

        <h1>
          Bienvenido a mi <br />
          <span>Portafolio Digital</span>
        </h1>

        <div className="hero-role">
          <span className="hero-role-static">Desarrollador especializado en</span>

          <RotatingText
            texts={["Full-Stack", "Aplicaciones Web", "Apps Móviles", "Cloud"]}
            mainClassName="hero-rotating-box"
            splitLevelClassName="hero-rotating-word"
            elementLevelClassName="hero-rotating-element"
            staggerFrom="last"
            initial={{ y: "130%" }}
            animate={{ y: 0 }}
            exit={{ y: "-160%" }}
            staggerDuration={0.03}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>

        <div className="hero-buttons">
          <a href="#contacto" className="btn btn-primary">
            Contáctame
          </a>
          <a href="#portafolio" className="btn btn-secondary">
            Ver Proyectos
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;