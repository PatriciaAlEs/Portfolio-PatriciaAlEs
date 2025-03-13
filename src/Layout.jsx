import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout-container">
      {/* Aquí puedes agregar un navbar si lo necesitas */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

