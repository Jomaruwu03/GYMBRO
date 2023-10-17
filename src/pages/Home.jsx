import React from 'react';
import Header from "../components/Header"; 
import { RiBarChartGroupedLine } from "react-icons/ri";
import { CgGym } from "react-icons/cg";
import Sidebar from '../components/Sidebar';
import Week from '../components/Week';
import Calendar from '../components/Calendar';

function Home() {
    return (
      <div className='grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen bg-gray-100'>
        <Sidebar/>
        <main className='lg:col-span-3 xl:col-span-5 bg-gray-100 p-8'>
          <Header/>
          <section className='grid grid-cols-1 m:grid-cols-2 lg:grid-cols-4 mt-10 items-center justify-center flex-col gap-8'>
            {/*card 1 */}
            <div className='bg-orange-300 p-8 rounded-xl text-white flex flex-col gap-2'>
              <RiBarChartGroupedLine className='text-5xl'/>
              <h4 className='text-2xl'>Kcal 5,350 </h4>
              <CgGym className='text-5xl text-black'/>
              <span className='text-2xl'>30 Ejercicios</span>
              <span className='py-1 px-3 bg-orange-400/80 rounded-full'> 550 minutos</span>
            </div>
            {/* card 2 */}
            <div>
                <Calendar/>
            </div>
          </section>
          </main>
      </div>
    );
  }

export default Home;