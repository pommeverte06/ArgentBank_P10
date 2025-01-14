import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: null,
  userData: null,
};

// vérif existence du token dans localstorage ou sessionstorage
if (localStorage.getItem("token") || sessionStorage.getItem("token")) {
  initialState.isLoggedIn = true;
  initialState.token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
}

// vérif si les données de l'utilisateur existent et sont valides dans le localstorage ou sessionstorage
if (
  localStorage.getItem("userData") &&
  localStorage.getItem("userData") !== "undefined"
) {
  initialState.userData = JSON.parse(localStorage.getItem("userData"));
} else if (
  sessionStorage.getItem("userData") &&
  sessionStorage.getItem("userData") !== "undefined"
) {
  initialState.userData = JSON.parse(sessionStorage.getItem("userData"));
}

//reducers
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
      console.log("Logout action dispatched");
      state.isLoggedIn = false;
      state.token = null;
      state.userData = null;

      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("userData");
      console.log("State after logout:", state);
    },
    updateUser: (state, action) => {
      console.log("Update user action payload:", action.payload);
      state.userData = {
        ...state.userData,
        ...action.payload,
      };

      if (localStorage.getItem("token")) {
        localStorage.setItem("userData", JSON.stringify(state.userData));
      } else if (sessionStorage.getItem("token")) {
        sessionStorage.setItem("userData", JSON.stringify(state.userData));
      }
    },
    reloadUser: (state) => {
      const token =
        localStorage.getItem("token") || sessionStorage.getItem("token");
      const userData =
        localStorage.getItem("userData") || sessionStorage.getItem("userData");

      if (token && userData) {
        state.isLoggedIn = true;
        state.token = token;
        state.userData = JSON.parse(userData);
      }
    },
  },
});

export const { login, logout, updateUser, reloadUser } = userSlice.actions;
export default userSlice.reducer;
