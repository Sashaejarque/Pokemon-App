export const getAllPokemons = async () => {
  const api = await fetch("https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json");
  return await api.json();
};
