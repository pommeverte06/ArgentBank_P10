import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { reloadUser } from "./redux/userSlice";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const dispatch = useDispatch();

  // charge les données utilisateur si elles existent dans localStorage/sessionStorage
  useEffect(() => {
    dispatch(reloadUser());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  );
};

export default App;
