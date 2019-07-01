import React from 'react';
import './App.css';
import './bootstrap/dist/css/bootstrap.css'; 
import Navbar from './Navbar'; 
import './components/Navbar.css'; 

function App() {
  return (
    <div className="App">
   
     <h1 id="Titulo">Adopta tu mascota
    <img src="imagenes/logo2.jpg" alt="logo" className="logo" id="imagenpequena"/>
    </h1>  
    <Navbar />
     </div>
  );
}

export default App;
