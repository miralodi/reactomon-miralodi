import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px
`;

function Navbar() {
  return (
    <Header>
      <h1>Pokemon</h1>
      <Link style={linkStyle} to="/pokemons">
        Pokemons
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/types">
        Types
      </Link>
    </Header>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none"
};

export default Navbar;
