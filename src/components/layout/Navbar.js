import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeToggler from "./ThemeToggler";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "./AppTheme";

function Navbar() {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  const Header = styled.header`
    text-align: center;
    padding: 10px;
    background-color: ${currentTheme.backgroundColor};
    color: ${currentTheme.textColor};
  `;

  const StyledLink = styled(Link)`
    color: ${currentTheme.textColor};
    font-weight: bold;
  `;

  return (
    <Header>
      <h1>Pokemon</h1>
      <StyledLink to="/pokemons">Pokemons</StyledLink> |{" "}
      <StyledLink to="/types">Types</StyledLink>
      <ThemeToggler />
    </Header>
  );
}

export default Navbar;
