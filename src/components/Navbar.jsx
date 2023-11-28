import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="p-4 text-white flex justify-between items-center bg-orange-400">
            <div className="font-medium">
                <img className="h-59 w-40" src="public\imagenes\logo.png" alt="GYMBRO"/>
            </div>
            <div className="flex items-center space-x-3"> 
                <Link to="/Login">
                    <button className="px-4 py-2 rounded hover:bg-orange-600 transition duration-300 ease-in-out font-medium">Inicio de sesión</button>
                </Link>
                <Link to="/Registro">
                    <button className="px-4 py-2 rounded hover:bg-orange-600 transition duration-300 ease-in-out font-medium">Registro</button>
                </Link>
                <Link to="/Nosotros">
                    <button className="px-4 py-2 rounded hover:bg-orange-600 transition duration-300 ease-in-out font-medium">Nosotros</button>
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;
