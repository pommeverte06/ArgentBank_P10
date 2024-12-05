import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: null,
  userData: null,
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
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.userData = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
