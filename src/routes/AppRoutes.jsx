import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import { useSelector } from "react-redux";

// route protégée
const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.user.token);
  console.log("Token in ProtectedRoute:", token);
  return token ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* routes publique */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* routes protégées */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
