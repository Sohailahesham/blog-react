import { createContext, useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const login = async (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);

    const res = await api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
    });

    setUser(res.data);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    toast.success("Logout successful");
    navigate("/");
  };

  useEffect(() => {
    if (token) {
      api
        .get("/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setUser(res.data))
        .catch(() => logout());
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
