import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      navigate("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="loginpage">
      <div className="welcome-container animated-drop">
        <p>
          ¡Hola,
          <br />
          <strong>Bienvenido!</strong>
        </p>
      </div>
      <div className="login-container animated-drop">
        <div className="login-form">
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <div className="login-header"></div>
            <FormGroup className="mb-3">
              <Label htmlFor="username" className="form-label">
                Usuario:
              </Label>
              <Input
                type="text"
                className="form-control"
                id="username"
                placeholder="Ingresa tu usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <Label htmlFor="password" className="form-label">
                Contraseña:
              </Label>
              <Input
                type="password"
                className="form-control"
                id="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <div style={{ textAlign: "right" }}>
              <Button type="submit" color="info">
                Ingresar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
