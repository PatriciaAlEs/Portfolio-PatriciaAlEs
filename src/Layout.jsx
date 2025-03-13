import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout-container">
      <main>
        <Outlet /> {/* Esto carga el contenido de cada ruta */}
      </main>
    </div>
  );
};

export default Layout;
