import axios from "axios";

const API_URL = "http://localhost:3001/api/v1"; // L'URL de ton API backend

// Fonction pour le login
export const login = async ({ email, password }) => {
  try {
    const response = await axios.post(`${API_URL}/user/login`, {
      email,
      password,
    });
    return response.data.body; // Retourne le token ou les données nécessaires
  } catch (error) {
    console.error("Login API error:", error.response?.data || error.message);
    throw new Error("Login failed. Please check your credentials.");
  }
};

// Fonction pour récupérer les données utilisateur après connexion
export const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/user/profile`, {
      headers: {
        Authorization: `Bearer ${token}`, // Ajoute le token pour les routes protégées
      },
    });
    console.log("API Response in getUserProfile:", response.data);
    return response.data.body;
  } catch (error) {
    console.error(
      "Get User Profile API error:",
      error.response?.data || error.message
    );
    throw new Error("Failed to fetch user profile.");
  }
};

// Exemple d'autres fonctions pour l'API
export const updateUserProfile = async (token, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/user/profile`, updatedData, {
      headers: {
        Authorization: `Bearer ${token}`, // Ajoute le token pour les routes protégées
      },
    });
    return response.data.body;
  } catch (error) {
    console.error(
      "Update User Profile API error:",
      error.response?.data || error.message
    );
    throw new Error("Failed to update user profile.");
  }
};
