import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    maxWidth: '500px', 
    maxHeight: '80vh', 
    overflowY: 'auto',
  },
};

Modal.setAppElement('#root'); 

const MealList = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noResults, setNoResults] = useState(false); 


  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`,
          {
            params: {
              l: 'Spanish',
            },
          }
        );
        const mealData = response.data.meals;

        if (mealData) {
          setMeals(mealData);
          setNoResults(false);
        } else {
          setMeals([]);
          setNoResults(true);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching meals:', error);
      }
    };

    fetchMeals();
  }, [searchQuery]);

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="search-container mx-auto mt-4" style={{ maxWidth: '1000px', maxHeight: '600px', overflowY: 'auto' }}>
    <h2 className="text-7xl text-center mb-4">RECETAS DE GYMBRO</h2>
    <input
      type="text"
      placeholder="Buscar recetas..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="search-input border border-orange-300 rounded-md p-2 mb-4"
    />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-7 mx-auto">
      {meals.map((meal) => (
        <div
          key={meal.idMeal}
          className="bg-gray-100/50 p-4 shadow-md rounded-lg cursor-pointer border border-orange-300 hover:bg-gray-300" 
          onClick={() => handleMealClick(meal)} 
        >
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-32 object-cover rounded-md" />
            <h2 className="text-lg font-semibold mt-2">{meal.strMeal}</h2>
            <p className="text-gray-600">{meal.strCategory}</p>
          </div>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Detalles de la Receta"
        style={customStyles} 
      >
        {selectedMeal && (
          <div className="bg-gray-100 p-4 border border-orange-300 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{selectedMeal.strMeal}</h2>
            <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} className="w-full h-32 object-cover rounded-md mb-2" />
            <p className="text-gray-600">{selectedMeal.strCategory}</p>
            <h3 className="text-lg font-semibold mt-4">Ingredientes:</h3>
            <ul>
              {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
                const ingredientKey = `strIngredient${i}`;
                const measureKey = `strMeasure${i}`;
                const ingredient = selectedMeal[ingredientKey];
                const measure = selectedMeal[measureKey];
                if (ingredient && ingredient.trim() !== '') {
                  return (
                    <li key={ingredientKey} className="text-gray-700">
                      {measure ? `${measure} ${ingredient}` : ingredient}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
            <h3 className="text-lg font-semibold mt-4">Instrucciones:</h3>
            <p className="text-gray-700">{selectedMeal.strInstructions}</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md mt-2" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MealList;