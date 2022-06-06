import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Pages/Login";
import Agendar from "./components/Pages/Agendar";
import MeusAgendamentos from "./components/Pages/MeusAgendamentos";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/meusAgendamentos" element={<MeusAgendamentos />} />
        <Route path="/agendar" element={<Agendar />} />
      </Routes>
    </Router>
  );
}

export default Rotas;
