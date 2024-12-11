import axios from "axios";

const API_URL = "http://localhost:3001/api/v1";

export const login = async ({ email, password }) => {
  try {
    const response = await axios.post(`${API_URL}/user/login`, {
      email,
      password,
    });
    console.log("API Login Response:", response.data.body);
    return response.data.body;
  } catch (error) {
    console.error("Login API error:", error.response?.data || error.message);
    throw new Error("Login failed. Please check your credentials.");
  }
};

export const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/user/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("API Response in getUserProfile:", response.data.body);
    return response.data.body;
  } catch (error) {
    console.error(
      "Get User Profile API error:",
      error.response?.data || error.message
    );
    throw new Error("Failed to fetch user profile.");
  }
};

export const updateUserProfile = async (token, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/user/profile`, updatedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.body;
  } catch (error) {
    console.error("API Update User Profile Error:", error.response?.data || error.message);
    throw new Error("Failed to update profile.");
  }
};
