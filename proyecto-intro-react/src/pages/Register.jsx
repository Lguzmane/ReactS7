import React, { useState } from "react";
import '../assets/App.css';

const Register = () => {
  // Estados para los campos y mensajes
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  // Función de validación
  const handleRegister = (e) => {
    e.preventDefault();

    // Verificar que los campos no estén vacíos
    if (!email || !password || !confirmPassword) {
      setMessage("Todos los campos son obligatorios.");
      return;
    }

    // Verificar longitud de la contraseña
    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // Verificar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden.");
      return;
    }

    // Éxito en la validación
    setMessage("¡Registro exitoso!");
  };

  return (
    <div className="form-container">
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Contraseña:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Confirmar Contraseña:</label>
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Registrar</button>
      </form>

      {/* Mensaje de validación */}
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Register;
