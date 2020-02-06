import React from "react";
import Type from "./Type";
import { useHttp } from "./hooks/http";

const TypeList = props => {
  const [isLoading, fetchedData] = useHttp(
    "https://pokeapi.co/api/v2/type",
    []
  );

  let content = <p>Loading types...</p>;

  if (!isLoading && fetchedData) {
    content = fetchedData.results.map(type => (
      <Type key={type.name} type={type} />
    ));
  }

  return content;
};

export default TypeList;

// if (!isLoading && pokemons) {
//   content = pokemons.map(pokemon => (
//     <Pokemon key={pokemon.name} pokemon={pokemon} />
//   ));
// }
