import Reveal from "./Reveal";
function About() {
  return (
    <section id="sobre-mi" className="about">
      <Reveal>
        <div className="container about-content">
          <div className="about-text">
            <span className="section-tag">Sobre mí</span>
            <h2>Desarrollo soluciones digitales con enfoque práctico</h2>
            <p>
              Soy Joel Cauich, desarrollador web y móvil egresado del Instituto
              Tecnológico de Mérida. Me enfoco en crear aplicaciones funcionales,
              modernas y escalables, cuidando tanto la experiencia del usuario como
              la lógica del sistema.
            </p>
            <p>
              He trabajado en proyectos de desarrollo web, aplicaciones móviles,
              sistemas de control con QR y soluciones orientadas a optimizar procesos.
            </p>
          </div>

          <div className="about-skills">
            <div className="skill-box">
              <h3>Frontend</h3>
              <p>HTML, CSS, JavaScript, React</p>
            </div>

            <div className="skill-box">
              <h3>Backend</h3>
              <p>PHP, Laravel, APIs, MySQL</p>
            </div>

            <div className="skill-box">
              <h3>Móvil</h3>
              <p>Flutter, Dart, Supabase</p>
            </div>

            <div className="skill-box">
              <h3>Herramientas</h3>
              <p>Git, Vercel, Firebase, Docker</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default About;