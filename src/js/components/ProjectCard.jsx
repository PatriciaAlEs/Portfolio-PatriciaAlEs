import React from "react";
import "../../styles/index.css";


const projects = [
  {
    title: "HooBoo (Hooked on Bookish)",
    description: "Una plataforma social para amantes de la literatura, donde los usuarios pueden compartir reseñas y descubrir libros nuevos.",
    challenges: "Integración de APIs para recomendaciones personalizadas y mejora en la UI.",
    improvements: "Agregar un sistema de seguimiento de libros y recomendaciones automáticas basadas en intereses.",
    technologies: ["React", "Python", "MySQL", "CSS"],
    link: "https://github.com/4GeeksAcademy/HooBoo",
    image: "src/img/hooboo.png", 
  },
  
];

const ProjectCard = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Mis Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-challenges"><strong>Retos:</strong> {project.challenges}</p>
            <p className="project-improvements"><strong>Mejoras:</strong> {project.improvements}</p>
            <p className="project-technologies"><strong>Tecnologías:</strong> {project.technologies.join(", ")}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">Ver en GitHub</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
