import { useState } from "react";
import Reveal from "./Reveal";
import Swal from "sweetalert2";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor, completa todos los campos.",
        confirmButtonColor: "#7c3aed",
      });
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("https://formspree.io/f/meokkyea", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Mensaje enviado correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Ocurrió un error al enviar el mensaje.",
          confirmButtonColor: "#7c3aed",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error de conexión",
        text: "No se pudo enviar el mensaje. Intenta más tarde.",
        confirmButtonColor: "#7c3aed",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="contact">
      <Reveal>
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Contacto</span>
            <h2>Hablemos de tu proyecto</h2>
            <p>
              Si tienes una idea, una propuesta o necesitas apoyo en desarrollo web o
              móvil, puedes escribirme.
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-box">
                <h3>Información de contacto</h3>
                <p><FaEnvelope /> <strong>Correo:</strong> joel.cauich.2001@gmail.com</p>
                <p><FaPhoneAlt /> <strong>Teléfono:</strong> +52 999 568 7291</p>
                <p><FaMapMarkerAlt /> <strong>Ubicación:</strong> Mérida, Yucatán, México</p>
              </div>

              <div className="contact-box">
                <h3>Redes</h3>
                <div className="social-links">
                  <a
                    href="https://github.com/JoelCauichP"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/joel-santiago-cauich-peraza-4554832a9/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://wa.me/529995687291"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Tu correo"
                value={formData.email}
                onChange={handleChange}
              />

              <textarea
                name="message"
                placeholder="Cuéntame sobre tu proyecto"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? "Enviando..." : "Enviar mensaje"}
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Contact;