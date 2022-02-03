import React from 'react';
import { Link } from 'react-router-dom';

export default function CharacterList({ characters }) {
  return (
    <div>
      {characters.results.map((rickandmorty) => (
        <Link key={rickandmorty.id} to={`/character/${rickandmorty.id}`}>
          <p>Name:{rickandmorty.name}</p>
          <img src={rickandmorty.image} alt={rickandmorty.name}></img>
        </Link>
      ))}
    </div>
  );
}
