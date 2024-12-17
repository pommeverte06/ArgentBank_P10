import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import operationReducer from "./operationSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    operations: operationReducer,
  },
});

export default store;
