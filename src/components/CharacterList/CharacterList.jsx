import React from 'react';

export default function CharacterList({ characters }) {
  return (
    <div>
      {characters.results.map((rickandmorty) => (
        <div key={rickandmorty.id}>
          <p>Name:{rickandmorty.name}</p>
          <img src={rickandmorty.image} alt={rickandmorty.name}></img>
          <p>Status:{rickandmorty.status}</p>
          <p>Species:{rickandmorty.species}</p>
        </div>
      ))}
    </div>
  );
}
