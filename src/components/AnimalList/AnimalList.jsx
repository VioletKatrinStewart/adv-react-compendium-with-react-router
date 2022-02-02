import React from 'react';

export default function AnimalList({ animals }) {
  return (
    <div>
      {animals?.map((randomAnimals) => (
        <div key={randomAnimals.id}>
          <p>Name:{randomAnimals.name}</p>
          <p>Type: {randomAnimals.animal_type}</p>
          <p>Habitat: {randomAnimals.habitat}</p>
          <p>Diet: {randomAnimals.diet}</p>
          <img src={randomAnimals.image_link} alt={randomAnimals.name}></img>
        </div>
      ))}
    </div>
  );
}
