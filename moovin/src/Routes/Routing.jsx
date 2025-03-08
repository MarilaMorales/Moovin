import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Organigrama from "../Pages/Organigrama";
import Inicio from "../Pages/Principal";
import Dashboard from "../Pages/Dashboard";



const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/principal" element={< Inicio/>} />
        <Route path="/organigrama" element={<Organigrama />} />
        <Route path="/dashboard" element={< Dashboard/>} />

      </Routes>
    </div>
  );
};

export default Routing;
