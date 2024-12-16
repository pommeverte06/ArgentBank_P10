import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import { useSelector } from "react-redux";

// routes protégées
const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.user.token);

  if (!token) {
    console.log("Utilisateur non connecté, redirection vers /");
    return <Navigate to="/" replace />;
  }

  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* routes publiques */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* route protégée pour le profil */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* route protégée pour les paramètres */}
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />

      {/* routes non définies */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
