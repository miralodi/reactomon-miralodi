import React from "react";
import Pokemon from "./Pokemon";
import { useHttp } from './hooks/http';

const PokemonList = props => {
  const [isLoading, fetchedData] = useHttp('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20', []);

  let content = <p>Loading pokemons...</p>;

  if (!isLoading && fetchedData) {
    content = fetchedData.results.map(pokemon => (
      <Pokemon key={pokemon.name} pokemon={pokemon} />
    ));
  }

  return content;
};

export default PokemonList;
