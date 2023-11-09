import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

export default function CalculadoraIMC() {
  const [nombre, setNombre] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    const alturaEnMetros = altura / 100;
    const imc = Math.round(peso / (alturaEnMetros * alturaEnMetros));
    let clasificacion;

    if (imc < 18.5) {
      clasificacion = 'estás muy delgado';
    } else if (imc < 25) {
      clasificacion = 'estás saludable';
    } else {
      clasificacion = 'tienes sobrepeso';
    }

    const respuesta = `Hola, ${nombre}. Tu IMC es ${imc} y tú ${clasificacion}`;
    alert(respuesta);
    setResultado(respuesta);
  };

  return (
    <div className="flex h-screen bg-white">
      <div className="w-64" style={{ flexShrink: 0 }}>
        <Sidebar />
      </div>
      <div className="flex-1 flex justify-center items-center">
      <div className="p-8 bg-orange-300 rounded shadow-md">
        <h1 className="text-black text-xl font-bold mb-4">Calcula tu índice de masa corporal</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
            Nombre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            id="nombre"
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="altura">
            Altura (cm)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            id="altura"
            type="number"
            placeholder="Tu altura en cm"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="peso">
            Peso (kg)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            id="peso"
            type="number"
            placeholder="Tu peso en kg"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        <button
          className="bg-gray-300 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={calcularIMC}
        >
          Calcular IMC
        </button>
        {resultado && <div className="mt-4 p-4 bg-white rounded-md">{resultado}</div>}
      </div>
    </div>
    </div>
  );
}
