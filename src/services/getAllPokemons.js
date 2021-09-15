export const getAllPokemons = async () => {
  const api = await fetch("https://app.pokemon-api.xyz/pokemon/all");
  return await api.json();
};
