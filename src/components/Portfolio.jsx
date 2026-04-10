import Reveal from "./Reveal";
import PortfolioCarousel from "./PortfolioCarousel";

function Portfolio({ projects }) {
  return (
    <section id="portafolio" className="portfolio">
      <Reveal>
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Portafolio</span>
            <h2>Últimos Proyectos</h2>
            <p>
              Algunos trabajos en los que he aplicado desarrollo web, móvil y
              soluciones orientadas a procesos reales.
            </p>
          </div>

          <PortfolioCarousel projects={projects} />
        </div>
      </Reveal>
    </section>
  );
}

export default Portfolio;