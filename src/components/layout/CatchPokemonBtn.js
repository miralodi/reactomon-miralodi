import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "./AppTheme";
import { CatchedPokemonsContext } from "../context/CatchedPokemonsContext";
import pokeball from "../layout/static/images/pokeball.png"

const CatchPokemonBtn = props => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const [catchedPokemons, setCatchedPokemons] = useContext(
    CatchedPokemonsContext
  );

  const catchPokemon = () => {
    setCatchedPokemons(prevCatchedPokemons => [
      ...prevCatchedPokemons,
      { name: props.pokemon.name, url: props.pokemon.url }
    ]);
  };

  const Button = styled.button`
    width: 60px;
    height: 64px;
    border: none;
    background-color: #fff;
    color: ${currentTheme.backgroundColor};
    overflow: hidden;
    transition: width 1s;
    white-space: nowrap;

    &:hover {
      width: 145px;
      transition: width 1s;
    }

    &:hover::after {
      content: "Catch!";
    }
  `;

  const Img = styled.img`
    width: 47px;
    height: 58px;
    filter: ${currentTheme.filter};
    padding: 7px;
  `;

  return (
    <Button onClick={catchPokemon}>
      <Img src={pokeball} alt="pokeball" />
    </Button>
  );
};

export default CatchPokemonBtn;
