import React, { Component } from "react";
import axios from "axios";

export class PokemonDetail extends Component {
  state = {
    pokemonData: []
  };

  componentDidMount() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}/`)
      .then(res => this.setState({ pokemonData: res.data }));
  }

  render() {
    console.log(this.props.match.params.id);
    return <div>{this.state.pokemonData.name}</div>;
  }
}

export default PokemonDetail;
