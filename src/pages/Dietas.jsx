import React from 'react';
import Header from "../components/Header"; 
import { RiBarChartGroupedLine } from "react-icons/ri";
import { CgGym } from "react-icons/cg";
import Sidebar from '../components/Sidebar';
import Week from '../components/Week';
import Calendar from '../components/Calendar';

function Dietas() {
    return (
      <div className='grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen bg-gray-100'>
        <Sidebar/>
        <main className='lg:col-span-3 xl:col-span-5 bg-gray-100 p-8'>
            <Header/>
            <section className='grid grid-cols-1 m:grid-cols-2 lg:grid-cols-4 mt-10 items-center justify-center flex-col gap-8'>
            </section>
        </main>
      </div>
    );
  }

export default Dietas;