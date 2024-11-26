
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import ProtectedRoute from './ProtectedRoute'; // Import du composant pour protéger les routes

const PageUnderConstruction = () => (
    <div>Page en construction. Revenez bientôt !</div>
);

const AppRoutes = () => {
    return (
        <Routes>
            {/* Routes publiques */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            {/* Routes protégées */}
            <Route
                path="/profile"
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/transactions"
                element={
                    <ProtectedRoute>
                        <PageUnderConstruction />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/settings"
                element={
                    <ProtectedRoute>
                        <PageUnderConstruction />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};

export default AppRoutes;
