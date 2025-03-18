import React from "react";
import ProjectCard from "../js/components/ProjectCard";

const Projects = () => {
  return (
    <div className="projects-page">
      <h1 className="projects-main-title">Mis Proyectos</h1>
      <ProjectCard /> {/* 👈 Aquí agregamos los proyectos */}
    </div>
  );
};

export default Projects;
