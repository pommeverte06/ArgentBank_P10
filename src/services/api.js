const API_URL = "http://localhost:3001/api/v1";

export const login = async ({ email, password }) => {
  try {
    const response = await fetch(`${API_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Login API error:", errorData);
      throw new Error("Login failed. Please check your credentials.");
    }

    const data = await response.json();
    console.log("API Login Response:", data.body);
    return data.body;
  } catch (error) {
    console.error("Login API error:", error.message);
    throw error;
  }
};

export const getUserProfile = async (token) => {
  try {
    const response = await fetch(`${API_URL}/user/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Get User Profile API error:", errorData);
      throw new Error("Failed to fetch user profile.");
    }

    const data = await response.json();
    console.log("API Response in getUserProfile:", data.body);
    return data.body;
  } catch (error) {
    console.error("Get User Profile API error:", error.message);
    throw error;
  }
};

export const updateUserProfile = async (token, updatedData) => {
  try {
    const response = await fetch(`${API_URL}/user/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Update User Profile Error:", errorData);
      throw new Error("Failed to update profile.");
    }

    const data = await response.json();
    return data.body;
  } catch (error) {
    console.error("API Update User Profile Error:", error.message);
    throw error;
  }
};
