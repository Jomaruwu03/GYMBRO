import React from 'react';
import SideAdmin from '../components/SideAdmin';
import HeaderAdmin from '../components/HeaderAdmin';


function HomeAdmi() {
    return (
      <div className='grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen bg-gray-100'>
        <SideAdmin/>
        <main className='lg:col-span-3 xl:col-span-5 bg-gray-100 p-8'>
          <HeaderAdmin/>
          <section className='grid grid-cols-1 m:grid-cols-2 lg:grid-cols-4 mt-10 items-center justify-center flex-col gap-8'>
            <div>
            </div>
          </section>
          </main>
      </div>
    );
  }

export default HomeAdmi;