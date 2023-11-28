import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Registro from './pages/Registro';
import Rutinas from './pages/Rutinas';
import Dietas from './pages/Dietas';
import Contactanos from './pages/Contactanos';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Edituser from './pages/EditUser';
import Nosotros from './pages/Nosotros'
import Calculo from './pages/Calculo'
import Inicio from './pages/Inicio';
import Admin from './pages/Lomin';
import HomeAdmi from './pages/HomeAdmin';
import Ejercicio from './pages/Ejercicios';

function App() {
  return (
    <GoogleOAuthProvider clientId='434926545434-8oe9j20qcntdesb6pa9gcbmi6k24inod.apps.googleusercontent.com'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="Home" element={<Home />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="registro" element={<Registro />} />
        <Route path="Mapa" element={<Rutinas />} />
        <Route path="Dietas" element={<Dietas />} />
        <Route path="Contactanos" element={<Contactanos />} />
        <Route path="edituser/:id" element={<Edituser />} />
        <Route path="Nosotros" element={<Nosotros />} />
        <Route path="Calculo" element={<Calculo />} />
        <Route path="Login" element={<Login/>} />
        <Route path="Lomin" element={<Admin/>} />   
        <Route path="HomeAdmin" element={<HomeAdmi/>} />     
        <Route path="Ejercicios" element={<Ejercicio/>} />   
        </Routes>
    </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
