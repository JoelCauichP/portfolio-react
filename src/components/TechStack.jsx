import Reveal from "./Reveal";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaLaravel,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import { SiMysql, SiSupabase, SiFlutter } from "react-icons/si";

function TechStack() {
  const techs = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Laravel", icon: <FaLaravel /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Supabase", icon: <SiSupabase /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Docker", icon: <FaDocker /> },
  ];

  return (
    <section className="tech-stack">
      <Reveal>
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Tecnologías</span>
            <h2>Herramientas con las que trabajo</h2>
            <p>
              Estas son algunas de las tecnologías que utilizo para desarrollar
              soluciones web, móviles y de backend.
            </p>
          </div>

          <div className="tech-grid">
            {techs.map((tech, index) => (
              <div className="tech-card" key={index}>
                <div className="tech-icon">{tech.icon}</div>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default TechStack;