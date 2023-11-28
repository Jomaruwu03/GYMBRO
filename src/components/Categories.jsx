import React, { useState, useEffect } from 'react';
import apiClient from '../../api';

function Categories() {
  const [exercises, setExercises] = useState([]);
  const [nextPage, setNextPage] = useState('exercise/?language=4&page=1&limit=13'); 
  const [prevPage, setPrevPage] = useState(null);

  const fetchExercises = async (url) => {
    try {
      const response = await apiClient.get(url);
      setExercises(response.data.results);
      setNextPage(response.data.next);
      setPrevPage(response.data.previous);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchExercises(nextPage);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">EJERCICIOS DE GYMBRO</h1>
      <div className="w-full md:w-3/4 lg:w-1/2">
        {exercises.map(exercise => (
          <div key={exercise.id} className="bg-gray-200 m-2 p-2 rounded">
            {exercise.name}
          </div>
        ))}
      </div>
      <div className="flex justify-between w-full md:w-3/4 lg:w-1/2 mt-4">
        {prevPage && (
          <button
            className="p-2 bg-gray-500/50 text-white rounded"
            onClick={() => fetchExercises(prevPage)}
          >
            Anterior
          </button>
        )}
        {nextPage && (
          <button
            className="p-2 bg-orange-500 text-white rounded"
            onClick={() => fetchExercises(nextPage)}
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
}

export default Categories;


