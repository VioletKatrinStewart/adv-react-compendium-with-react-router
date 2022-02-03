import React from 'react';

export default function CharacterDetail({ character }) {
  console.log(character);
  return (
    <div>
      <p>Name:{character.name}</p>
      <img src={character.image} alt={character.name}></img>
      <p>Status:{character.status}</p>
      <p>Species:{character.species}</p>
    </div>
  );
}
