import React, { Component } from "react";
import Pokemon from "./Pokemon";
import axios from "axios";

class PokemonList extends Component {
  state = {
    pokemons: []
  };

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
      .then(res => this.setState({ pokemons: res.data.results }));
  }

  render() {
    return this.state.pokemons.map(pokemon => (
      <Pokemon key={pokemon.name} pokemon={pokemon} />
    ));
  }
}

export default PokemonList;
