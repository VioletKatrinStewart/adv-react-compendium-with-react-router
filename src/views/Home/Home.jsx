import React, { useEffect, useState } from 'react';
import { getCharacters } from '../../services/characters';
import CharacterList from '../../components/CharacterList/CharacterList';
import DarkModeOn from '../../Hooks/DarkMode';

export default function Animal() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacters();
      setCharacters(data);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);

  if (loading) return <h1>loading</h1>;

  return (
    <div>
      <h1>Rick and Morty!</h1>
      <CharacterList characters={characters} loading={loading} setLoading={setLoading} />
      <DarkModeOn />
    </div>
  );
}
