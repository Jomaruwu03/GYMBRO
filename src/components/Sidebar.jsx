import React, {useState} from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { FaAlignJustify } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Rutinas from "../pages/Rutinas";

const Sidebar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return <div className={`bg-gray-300 h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full lg-transition-all z-50 duration-300 ${showMenu ? "left-0" : "-left-full"}`}    >
        {/* perfil */}
        <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
          <img src="https://img.freepik.com/foto-gratis/muscular-hombre-haciendo-levantamiento-pesas-gimnasio_1163-3551.jpg"
          className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-400"
          /> 
          <h1 className="text-xl text-white font-bold">Josias Kumul</h1>
          <p className="bg-orange-300 py-1 px-3 rounded-full">Ta mamao</p>
        </div>
        {/* nav */}
        <div className="bg-orange-400 p-8 rounded-tr-[130px] h-[70vh] overflow-y-scroll flex flex-col justify-between">
        <nav className="flex flex-col gap-8">
            <a 
            href="/"
            className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-gray-300/50 transition-colors"
            >   
            Inicio   
            </a>
            <a 
            href="/Dashboard"
            className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-gray-300/50 transition-colors"
            >   
            Usuarios   
            </a>
            <a 
            href="/Rutinas"
            className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-gray-300/50 transition-colors"
            >   
            Rutinas   
            </a>
            <a 
            href="/Dietas"
            className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-gray-300/50 transition-colors"
            >   
            Dietas   
            </a>
        </nav>
        <div className="bg-gray-300/50 text-white p-4 rounded-xl">
            <p className="text-gray-900">¿Tienes problemas?</p>
            <a href="/Contactanos">Contactanos</a>
        </div>
        {/* botom */}
        <button onClick={() => setShowMenu(!showMenu)} className="lg:hidden fixed right-4 bottom-4 text-2xl bg-orange-400 p-3 rounded-full text-white z-50">
            {showMenu ? <AiOutlineClose /> : <FaAlignJustify />}
         </button>
        </div>
    </div>;
};

export default Sidebar;

