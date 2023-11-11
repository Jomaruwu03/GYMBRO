import React, { useState } from 'react';
import axios from 'axios';

const RecipeSearchComponent = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async (event) => {
    event.preventDefault();

    const appId = "dab34154"; 
    const appKey = "13a38daa51d38c1d59212926f096da3d";  

    try {
      const response = await axios.get(`https://api.edamam.com/api/nutrition-details`, {
        params: {
          q: query,
          app_id: appId,
          app_key: appKey,
        }
      });
      // Asegúrate de que esta línea corresponde con la estructura de la respuesta de la API
      setRecipes(response.data.hits); // Es posible que necesites ajustar esta línea
    } catch (error) {
      console.error("Error al buscar recetas", error);
    }
  };

  return (
    <div>
      <form onSubmit={searchRecipes}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a recipe"
        />
        <button type="submit">Search</button>
      </form>

      <div>
        {recipes.map((item, index) => (
          <div key={index}>
            <h2>{item.recipe.label}</h2>
            <img src={item.recipe.image} alt={item.recipe.label} />
            {/* Agrega aquí más detalles que quieras mostrar */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearchComponent;
