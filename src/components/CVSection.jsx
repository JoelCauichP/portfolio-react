import Reveal from "./Reveal";

function CVSection() {
  return (
    <section className="cv-section" id="cv">
      <Reveal>
        <div className="container cv-content">
          <span className="section-tag">Currículum</span>
          <h2>Conoce más sobre mi perfil profesional</h2>
          <p>
            Puedes descargar mi CV para revisar con más detalle mi formación,
            experiencia y habilidades técnicas.
          </p>

          <a
            href="/docs/CV_Joel_Santiago_Cauich_Peraza.pdf"
            download
            className="btn btn-primary"
          >
            Descargar CV
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export default CVSection;