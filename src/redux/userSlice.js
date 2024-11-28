import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    userData: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            console.log("Login action called:", action.payload);
            state.isLoggedIn = true;
            state.userData = action.payload;
        },
        logout: (state) => {
            console.log("Logout action called");
            state.isLoggedIn = false;
            state.userData = null;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
