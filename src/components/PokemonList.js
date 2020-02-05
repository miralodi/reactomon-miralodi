import React, { Component } from "react";
import PropTypes from "prop-types";
import Pokemon from "./Pokemon";

class PokemonList extends Component {
  render() {
    return this.props.pokemons.map(pokemon => (
      <Pokemon key={pokemon.name} pokemon={pokemon} />
    ));
  }
}

// PropTypes
PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired
};

export default PokemonList;
