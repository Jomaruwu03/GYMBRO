import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

export default function CalculadoraIMC() {
  const [nombre, setNombre] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');
  const [recomendacion, setRecomendacion] = useState('');
  const [error, setError] = useState('');

  const calcularIMC = () => {
    if (!nombre || !altura || !peso) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    const alturaEnMetros = altura / 100;
    const imc = Math.round(peso / (alturaEnMetros * alturaEnMetros));
    let clasificacion;
    let recomendacionTemp;

    if (imc < 18.5) {
      clasificacion = 'estás muy delgado';
      recomendacionTemp = 'Recomendamos una dieta rica en nutrientes y consulta médica';
    } else if (imc < 25) {
      clasificacion = 'estás saludable';
      recomendacionTemp = 'Mantén una dieta balanceada y ejercicio regular';
    } else {
      clasificacion = 'tienes sobrepeso';
      recomendacionTemp = 'Se recomienda dieta balanceada y ejercicio, considera consultar a un nutricionista';
    }
    const respuesta = `Hola, ${nombre}. Tu IMC es ${imc} y tú ${clasificacion}`;
    setResultado(respuesta);
    setRecomendacion(recomendacionTemp);
    setError('');
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
      {error && <div className="text-red-500 mt-2">{error}</div>}
      {resultado && <div className="mt-4 p-4 bg-white rounded-md">{resultado}</div>}
      {recomendacion && <div className="mt-4 p-4 bg-white rounded-md">{recomendacion}</div>}
      </div>
      <div className="w-4"></div>
        <div className="p-8 bg-orange-300 rounded shadow-md">
          <h2 className="text-black text-xl font-bold text-center mb-4">Recomendaciones según tu IMC</h2>
          <table className="shadow appearance-none border rounded w-full">
            <thead className="bg-gray-300">
              <tr>
                <th className="py-2 px-3 text-left">IMC</th>
                <th className="py-2 px-3 text-left">Recomendación</th>
              </tr>
            </thead>
            <tbody className="bg-gray-400/50 text-black">
              <tr>
                <td className="border-t py-2 px-3">Menos de 18.5</td>
                <td className="border-t py-2 px-3">Dieta rica en nutrientes, consulta médica</td>
              </tr>
              <tr>
                <td className="border-t py-2 px-3">18.5 - 24.9</td>
                <td className="border-t py-2 px-3">Mantén una dieta balanceada y ejercicio regular</td>
              </tr>
              <tr>
                <td className="border-t py-2 px-3">25 o más</td>
                <td className="border-t py-2 px-3">Dieta y ejercicio, considera consultar a un nutricionista</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
