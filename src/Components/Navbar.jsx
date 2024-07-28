import React from "react";
import Swal from "sweetalert2";
import { FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  // función demostrativa para cerrar sesión
  const cerrarSesion = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Estás a punto de cerrar sesión",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cerrar sesión",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Sesión cerrada", "", "success");
        window.location.href = "/";
      }
    });
  };

  return (
    <nav className="navbar fixed-top">
      <div className="container-fluid">
        <div className="navbar-brand">
          <img
            src="https://turismo.durango.gob.mx/wp-content/uploads/sites/35/2022/11/SETUED.svg"
            alt="logo"
            className="logo"
          />
        </div>

        <div className="navbar-title">
          <h1>Registro Estatal De Calidad Turistica</h1>
        </div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <button
              className="btn btn-secondary"
              onClick={() => cerrarSesion()}
            >
              <FaSignOutAlt />
              Salir
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
