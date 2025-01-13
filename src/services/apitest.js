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
      throw new Error("login failed, please check your credentials.");
    }
    const data = await response.json();
    return data.body;
  } catch (error) {
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
      console.error("Get user profile API error:", errorData);
      throw new Error("failed to fetch user profile.");
    }
    const data = await response.json();
    return data.body;
  } catch (error) {
    console.error("get user profile API error", error.message);
    throw error;
  }
};
