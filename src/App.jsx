import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import ProjectCard from "./js/components/ProjectCard";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="proyectos" element={<ProjectCard />} />
      </Route>
    </Routes>
  );
}

export default App;
