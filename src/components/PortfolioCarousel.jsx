import { useEffect, useState } from "react";
 
function PortfolioCarousel({ projects }) {
  const getCardsPerView = () => {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  };
 
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
  const [currentIndex, setCurrentIndex] = useState(0);
 
  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
      setCurrentIndex(0);
    };
 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  const maxIndex = Math.max(projects.length - cardsPerView, 0);
 
  const goNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };
 
  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };
 
  return (
    <div className="custom-carousel">
      <div className="custom-carousel-wrapper">
        <button
          className="carousel-arrow"
          onClick={goPrev}
          aria-label="Proyecto anterior"
          disabled={currentIndex === 0}
        >
          ←
        </button>
 
        <div className="custom-carousel-viewport">
          <div
            className="custom-carousel-track"
            style={{
              width: `${projects.length * 100}%`,
              transform: `translateX(-${(currentIndex * 100) / projects.length}%)`,
            }}
          >
            {projects.map((project, index) => (
              <div
                className="custom-carousel-slide"
                key={index}
                style={{ width: `${100 / projects.length}%` }}
              >
                <div className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
 
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
 
                  <div className="project-tech">
                    {project.tech.map((item, i) => (
                      <span key={i} className="tech-badge">
                        {item}
                      </span>
                    ))}
                  </div>
 
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Ver proyecto
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
 
        <button
          className="carousel-arrow"
          onClick={goNext}
          aria-label="Siguiente proyecto"
          disabled={currentIndex === maxIndex}
        >
          →
        </button>
      </div>
    </div>
  );
}
 
export default PortfolioCarousel;