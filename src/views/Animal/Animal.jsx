import React, { useEffect, useState } from 'react';
import { getAnimals } from '../../services/animals';
import AnimalList from '../../components/AnimalList/AnimalList';

export default function Animal() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAnimals();
      setAnimals(data);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);

  if (loading) return <h1>loading</h1>;

  return (
    <div>
      <h1>Animals!</h1>
      <AnimalList animals={animals} loading={loading} setLoading={setLoading} />
    </div>
  );
}
