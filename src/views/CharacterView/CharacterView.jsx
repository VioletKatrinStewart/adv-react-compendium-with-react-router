import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetail from '../../components/CharacterDetail/CharacterDetail';
import { getCharacterId } from '../../services/characters';

export default function CharacterView() {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getDetail = async () => {
      const detail = await getCharacterId(id);
      setCharacter(detail);
      setLoading(false);
    };
    getDetail();
  }, [id]);
  if (loading) return <h1>loading</h1>;

  return (
    <div>
      <CharacterDetail character={character} />
    </div>
  );
}
