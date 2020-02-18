import React, { useContext } from "react";
import Pokemon from "./Pokemon";
import { CatchedPokemonsContext } from "./context/CatchedPokemonsContext";
import ThemeContext from "./context/ThemeContext";
import AppTheme from "./layout/AppTheme";

const PokemonList = props => {
  const [catchedPokemons] = useContext(CatchedPokemonsContext);
  
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  let content = <p>Loading pokemons...</p>;

  if (catchedPokemons) {
    content = catchedPokemons.map(pokemon => (
      <Pokemon style={{ color: `${currentTheme.textColor}` }} key={pokemon.name} pokemon={pokemon} />
    ));
  }

  return content;
};

export default PokemonList;
