import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";

const Profile = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    alert("Has cerrado sesión.");
    navigate("/login"); 
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Perfil</h1>
      <p><strong>Email:</strong> {user?.email}</p>
      <button
        onClick={handleLogout}
        style={{
          marginTop: "20px",
          padding: "10px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
