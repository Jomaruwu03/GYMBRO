import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Registro from './pages/Registro';
import Rutinas from './pages/Rutinas';
import Dietas from './pages/Dietas';
import Contactanos from './pages/Contactanos';
import AddUser from './pages/AddUser';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Edituser from './pages/EditUser';

function App() {
  return (
    <GoogleOAuthProvider clientId='434926545434-8oe9j20qcntdesb6pa9gcbmi6k24inod.apps.googleusercontent.com'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="registro" element={<Registro />} />
        <Route path="rutinas" element={<Rutinas />} />
        <Route path="Dietas" element={<Dietas />} />
        <Route path="Contactanos" element={<Contactanos />} />
        <Route path="agregar" element={<AddUser />} />
        <Route path="edituser/:id" element={<Edituser />} />
        </Routes>
    </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
