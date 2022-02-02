export async function getAnimals() {
  const resp = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10');
  const data = await resp.json();
  console.log(data);
  return data;
}
