import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";  // 👈 Importar correctamente
import "@fontsource/orbitron";
import "../../styles/index.css";
import ProjectCard from "./ProjectCard";






const Portfolio = () => {
  const navigate = useNavigate(); // 👈 Asegurar que está dentro del componente y del Router

  return (
    <div className="portfolio-container">
      <motion.div
        className="portfolio-card"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Contenedor estilo postal */}
        <div className="portfolio-postal">
          {/* Sección Izquierda: Foto + Redes */}
          <div className="portfolio-left">
            <img src="src/img/fotoPatricia.png" alt="Patricia" className="profile-image" />
            <div className="portfolio-links">
              <a href="https://github.com/PatriciaAlEs" target="_blank" rel="noopener noreferrer" className="portfolio-icon">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/patricia-alvarez-estevez/" target="_blank" rel="noopener noreferrer" className="portfolio-icon">
                <FaLinkedin />
              </a>
            </div>
          </div>
          
          {/* Línea divisoria */}
          <div className="portfolio-divider"></div>
          
          {/* Sección Derecha: Info + Introducción */}
          <div className="portfolio-right">
            <h1 className="portfolio-title">Hola, soy Patricia</h1>
            <p className="portfolio-description">
              Desarrolladora <strong>Full Stack</strong> enfocada en <strong>React y Python</strong>, apasionada por crear interfaces intuitivas 
              y mejorar la experiencia del usuario. Actualmente soy <strong>Teaching Assistant en 4Geeks</strong>, 
              donde ayudo a otros desarrolladores a potenciar sus habilidades mientras sigo aprendiendo 
              y explorando nuevas tecnologías.
            </p>
            <p className="portfolio-description">
              Con experiencia en <strong>JavaScript, CSS, MySQL y APIs</strong>, me encanta construir soluciones eficientes y bien estructuradas.
              Además, tengo más de 5 años de experiencia en gestión de equipos y liderazgo.
            </p>
            <p className="portfolio-cta">¿Hablamos? 🚀</p>
          </div>
        </div>
      </motion.div>
      
      {/* Flecha para ir a proyectos */}
      <motion.div
        className="portfolio-arrow-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={() => navigate("/proyectos")}  // 👈 Redirige correctamente
        style={{ cursor: "pointer" }}
      >
        <p className="portfolio-arrow-text">Ver proyectos</p>
        <IoMdArrowRoundForward className="portfolio-arrow-icon" />
      </motion.div>

    </div>
  );
};

export default Portfolio;
