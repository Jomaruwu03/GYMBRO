import React from 'react';
import Categories from '../components/Categories';
import Sidebar from '../components/Sidebar';

function Ejercicio() {
    return (
      <div className="flex">
        <div className="w-1/4"> {/* Ajusta el ancho según sea necesario */}
          <Sidebar/>
        </div>
        <div className="w-3/4"> {/* Ajusta el ancho según sea necesario */}
          <Categories />
        </div>
      </div>
    );
  }
export default Ejercicio;
