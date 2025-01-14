import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import operationReducer from "./operationSlice";

const store = configureStore({
  reducer: {
    user: userReducer, //gère l'état utilisateur
    operations: operationReducer, //gère opérations transactions
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
