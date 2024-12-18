import React, { createContext, useContext, useState, useEffect } from "react";

// Crear el contexto
const UserContext = createContext();

// Proveedor del UserContext
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ email: "user@example.com" }); 

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    const email = localStorage.getItem("userEmail");
    if (token && email) {
      setUser({ email });
    }
  }, []);

  const login = (email) => {
    setUser({ email });
    localStorage.setItem("userToken", "fakeToken123");
    localStorage.setItem("userEmail", email);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userToken");
    localStorage.removeItem("userEmail");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
