

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store";
import { login } from "./redux/userSlice";
import "./index.css";

// Récupère le token au démarrage de l'application
const token = localStorage.getItem("token") || sessionStorage.getItem("token");
if (token) {
  store.dispatch(login({ token })); // Initialise l'état Redux avec le token
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
