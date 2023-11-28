import React from "react";

const ExerciseDetails = ({ exercise }) => {
    return (
      <div className="exercise-details p-4">
        <h2 className="text-xl font-bold">{exercise.name}</h2>
        <p>{exercise.description}</p>
        {exercise.images && exercise.images.length > 0 && (
          <img
            src={exercise.images[0].image}
            alt={`Imagen de ${exercise.name}`}
            className="my-2"
          />
        )}
      </div>
    );
  };

  export default  ExerciseDetails;