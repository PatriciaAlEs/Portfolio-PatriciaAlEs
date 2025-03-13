import React from "react";
import Portfolio from "../components/Portfolio";
import ProjectCards from "../components/ProjectCards";

const Home = () => {
  return (
    <div className="home-container">
      <Portfolio />  
      <ProjectCards />  
    </div>
  );
};

export default Home;
