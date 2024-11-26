import React from "react";
import ReactDOM from "react-dom/client"; // Utilise React 18
import { Provider } from "react-redux";
import { store } from "./redux/store"; // Ton store Redux
import App from "./App"; // Composant principal

// Point d'entrée avec React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
