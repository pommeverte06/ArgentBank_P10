import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn:
    !!localStorage.getItem("token") || !!sessionStorage.getItem("token"),
  token: localStorage.getItem("token") || sessionStorage.getItem("token"),
  userData:
    localStorage.getItem("userData") &&
    localStorage.getItem("userData") !== "undefined"
      ? JSON.parse(localStorage.getItem("userData"))
      : sessionStorage.getItem("userData") &&
        sessionStorage.getItem("userData") !== "undefined"
      ? JSON.parse(sessionStorage.getItem("userData"))
      : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("Login action payload:", action.payload);
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.userData = action.payload.userData;

      if (action.payload.rememberMe) {
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem(
          "userData",
          JSON.stringify(action.payload.userData)
        );
      } else {
        sessionStorage.setItem("token", action.payload.token);
        sessionStorage.setItem(
          "userData",
          JSON.stringify(action.payload.userData)
        );
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.userData = null;

      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("userData");
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
