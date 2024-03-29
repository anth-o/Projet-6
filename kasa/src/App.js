import './App.scss';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import FicheLogement from "./pages/FicheLogement/FicheLogement";
import APropos from "./pages/Apropos";
import Erreur from "./pages/Erreur/Erreur";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/fiche-logement/:id" element={<FicheLogement />}></Route>
          <Route path="/a-propos" element={<APropos />}></Route>
          <Route path="*" element={<Erreur />}></Route>
      </Routes>
  );
}

export default App;