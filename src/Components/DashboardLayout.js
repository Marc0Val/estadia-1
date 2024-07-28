// Esta madre hace que el navbar se muestre en todas las páginas que se encuentren dentro de la carpeta Dashboard
// DashboardLayout.js
import React from "react";
import Navbar from "./Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
