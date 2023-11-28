import React from 'react';
import PhotoList from '../components/PhotoList';
import NavBar from '../components/Navbar';
import VideoList from '../components/PhotoList';


function Inicio() {
  return (
    <>
      <NavBar />
      <div className="-mt-[-1px] min-h-screen bg-gray-400/40">
        <div className="grid lg:grid-cols-6 xl:grid-cols-7 mt-4 gap-4">
          <div className="lg:col-span-5 xl:col-span-7">
            <div className="col-span-full">
              <VideoList/>
            </div>
            <div className="col-span-full text-center p-8 g-gray-400/40 rounded-lg mx-4">
              <p className="text-3xl font-bold text-gray-900">
                Somos una empresa innovadora, fundada en 2023, especializada en la optimización de tus actividades físicas. Nuestro compromiso es proporcionar servicios integrales que mejoren tu experiencia de fitness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inicio;



