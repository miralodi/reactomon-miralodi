import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

const PokemonList = props => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch.");
        }
        setIsLoading(false);
        return response.json();
      })
      .then(res => {
        setPokemons(res.results);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  let content = <p>Loading pokemons...</p>;

  if (!isLoading && pokemons) {
    content = pokemons.map(pokemon => (
      <Pokemon key={pokemon.name} pokemon={pokemon} />
    ));
  }

  return content;
};

export default PokemonList;
