import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const NotFoundPage = () => {
  return (
    <div className="notfoundpage">
      <div className="notfound-container animated-drop">
        <h1>404</h1>
        <p>Página no encontrada</p>
        <Link to="/">
          <Button color="info">Volver al inicio</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
