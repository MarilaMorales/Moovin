import React from 'react';
import "../Principal/Principal.css";
import Logo from "../../IMG/Logo.png"



const Principal = () => {
  return (
    <div className="home-container">
      <img src= {Logo} alt="Logo" className="logo" />
      <div className="button-container">
        <button onClick={() => window.location.href = '/organigrama'} className="btn btn-organigrama">Organigrama</button>
        <button onClick={() => window.location.href = '/dashboard'} className="btn btn-dashboard">Dashboard</button>
      </div>
    </div>
  );
}

export default Principal;
