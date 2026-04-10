import Reveal from "./Reveal";

function Experience() {
  const experiences = [
    {
      role: "Desarrollador Freelance / Proyectos Independientes",
      company: "Conafoc Consultoría",
      period: "2024 - Actualidad",
      description:
        "Desarrollo de un sistema web para asesoría académica, contable y fiscal, con funcionalidades para la gestión de procesos administrativos y seguimiento académico.",
    },
    {
      role: "Desarrollador de Software (Web y Móvil)",
      company: "Instituto Tecnológico de Mérida Campus Poniente",
      period: "2024 - 2025",
      description:
        "Desarrollo de aplicaciones web y móviles para el registro de asistencias a conferencias estudiantiles mediante códigos QR, facilitando el control, seguimiento y generación de reportes para el departamento de sistemas.",
    },
    {
      role: "Participante en Hackathon",
      company: "Hackathon TecNM – Reto Generación Automática de CV",
      period: "2025",
      description:
        "Desarrollo de una aplicación web y móvil para generación automática de currículum vitae utilizando IA generativa, con funcionalidades para exportar a PDF y compartir por WhatsApp o correo electrónico. Trabajo en equipo multidisciplinario con enfoque en UX y optimización móvil.",
    },
  ];

  return (
    <section className="experience">
      <Reveal>
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Experiencia</span>
            <h2>Trayectoria y experiencia</h2>
            <p>
              Un resumen de mi experiencia en desarrollo, proyectos y trabajo con
              soluciones tecnológicas.
            </p>
          </div>

          <div className="experience-list">
            {experiences.map((item, index) => (
              <div className="experience-card" key={index}>
                <div className="experience-top">
                  <h3>{item.role}</h3>
                  <span>{item.period}</span>
                </div>
                <h4>{item.company}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Experience;