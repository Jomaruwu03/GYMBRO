import React from 'react';
import MealList from '../components/MealList';
import Sidebar from '../components/Sidebar';

const Receta = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1 flex justify-center items-center text-center overflow-auto">
          <MealList />
        </div>
      </div>
    </div>
  );
}

export default Receta;
