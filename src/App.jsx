import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import projects from "./data/projects";
import services from "./data/services";
import Footer from "./components/Footer";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import CVSection from "./components/CVSection";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return () => clearTimeout(timer);
}, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY + 120;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading) {
  return <Loader />;
}

  return (
    <>
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
      />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <CVSection />
      <Services services={services} />
      <Portfolio projects={projects} />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;