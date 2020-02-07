import React, { useContext } from "react";
import Pokemon from "./Pokemon";
import { useHttp } from './hooks/http';
import ThemeContext from "./context/ThemeContext";
import AppTheme from "./layout/AppTheme";

const PokemonList = props => {
  const [isLoading, fetchedData] = useHttp('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20', []);
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  let content = <p>Loading pokemons...</p>;

  if (!isLoading && fetchedData) {
    content = fetchedData.results.map(pokemon => (
      <Pokemon style={{ color: `${currentTheme.textColor}` }} key={pokemon.name} pokemon={pokemon} />
    ));
  }

  return content;
};

export default PokemonList;
