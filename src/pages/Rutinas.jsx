import React from 'react';
import Sidebar from '../components/Sidebar';
import Mapa from '../components/Mapa';

function Rutinas() {

  const googleMapsApiKey = "AIzaSyD7eg_7MntktPUSUweD_GLTvv01QHeQEEY"


  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <h1 className="text-center text-xl font-bold my-4 text-gray-600 bg-orange-400 rounded-full py-2 px-4 inline-block">Encuentra gimnasios cercanos</h1>
        <div className="flex-grow">
          <Mapa googleMapsApiKey={googleMapsApiKey} />
        </div>
      </div>
    </div>
  );
  
}  




export default Rutinas;
