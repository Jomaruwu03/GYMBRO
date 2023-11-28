import React from 'react';
import Header from "../components/Header"; 
import { RiBarChartGroupedLine } from "react-icons/ri";
import { CgGym } from "react-icons/cg";
import Sidebar from '../components/Sidebar';
import CalendarEvents from '../components/Calendar';
import WeatherSearch from '../components/Clima';

function Home() {
  return (
    <div className='grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen bg-gray-100'>
      <Sidebar />
      <main className='lg:col-span-3 xl:col-span-5 bg-gray-100 p-8'>
        <Header />
        {/* Componente Estadísticas */}
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 flex-col'>
          {/* Card de estadísticas */}
          <div className='bg-orange-300 p-6 md:p-8 rounded-xl text-white flex flex-col gap-3'>
            <RiBarChartGroupedLine className='text-4xl md:text-5xl' />
            <h4 className='text-xl md:text-2xl'>Kcal 5,350 </h4>
            <CgGym className='text-4xl md:text-5xl text-black' />
            <span className='text-xl md:text-2xl'>30 Ejercicios</span>
            <span className='py-1 px-3 bg-orange-400/80 rounded-full text-sm md:text-base'> 550 minutos</span>
          </div>

          {/* Componente Clima */}
          <div className='mt-5'>
            <WeatherSearch />
          </div>

          {/* Componente Calendario */}
          <div className='mt-5'>
            <CalendarEvents />
          </div>
        </section>

        {/* Imagen debajo de la sección */}
        <div className='mt-5 flex justify-center items-center'>
  <img src='/imagenes/fitnessgym.webp' alt='Fitness Gym' className='w-50' />
</div>
       </main>
    </div>
  );
}

export default Home;