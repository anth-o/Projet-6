import './App.css';

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FicheLogement from "./pages/FicheLogement";
import APropos from "./pages/Apropos";
import Erreur from "./pages/Erreur";

function App() {
  return (
    <div className='App'>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/fiche-logement/:id" element={<FicheLogement />}></Route>
          <Route path="/a-propos" element={<APropos />}></Route>
          <Route path="*" element={<Erreur />}></Route>
      </Routes>
    </div>
  );
}

export default App;