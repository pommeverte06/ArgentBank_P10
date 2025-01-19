import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <Routes>
      {/* routes publiques */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={!isLoggedIn ? <Login /> : <Profile />} />

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
