import React from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const AboutUsPage = () => {
  return (
    <div className="relative flex min-h-screen flex-col text-center">
      <a 
  href="/Lomin">
      <FaArrowCircleUp className ="absolute top-0 left-0 m-4 text-2xl text-orange-300 cursor-pointer"/>
      </a>
<img
  className="mx-auto w-auto h-auto" 
  src="public\imagenes\logo.png" 
  alt="GYMBRO" 
/>
<h1 className="text-orange-300 text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">¿Quiénes somos?</h1>
      <p className="mb-4">
        Somos un grupo de programdores el cual se dedicada a desarrollar aplicaciones web las cuales te ayudan a tus activades diarias, 
        comprometidos con proporcionar servicios como mostrar recetas, gimnasios cercanos, rutinas entre otros. Fundados en 2023, 
        hemos crecido para logar ser la aplicación numero uno.
      </p>
      <div className="mb-6">
        <h2 className="text-orange-300 text-2xl font-semibold mb-3">Nuestra Misión</h2>
        <p>
          Nuestra misión es el lograr que los usarios de nuestras aplicaciones logren realizar sus objetivos de manera mas facil, sencilla y rapida con el uso de cada una de nuestras aplicaciones
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
