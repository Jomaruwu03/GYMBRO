import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="bg-gray-100 container mx-auto px-4 py-8 text-center">
        <img
          className="mx-auto h-48 w-35" 
          src="public\imagenes\logo.png" 
          alt="GYMBRO" 
        />
      <h1 className="text-orange-300 text-3xl font-bold mb-6">¿Quiénes somos?</h1>
      <p className="mb-4">
        Somos una empresa dedicada a la optimizacion de tus actividades fisicas, 
        comprometidos con proporcionar servicios como mostrar recetas, gimnasios cercanos entre otros. Fundados en 2023, 
        hemos crecido para logar ser la aplicacion numero uno.
      </p>
      <div className="mb-6">
        <h2 className="text-orange-300 text-2xl font-semibold mb-3">Nuestra Misión</h2>
        <p>
          Nuestra misión es ser la aplicacion web principal sobre fitnes.
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-orange-300 text-2xl font-semibold mb-3">Nuestra Visión</h2>
        <p>
          Aspiramos a ser la aplicacion principal en temas de gimnasios. Nos vemos en el futuro como la aplicacion numero uno .
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-orange-300 text-2xl font-semibold mb-3">Valores</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Calidad:</strong> Nos esforzamos por la excelencia en nuestros servicios.</li>
          <li><strong>Innovación:</strong> Estamos comprometidos con la mejora continua y la innovación.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUsPage;
