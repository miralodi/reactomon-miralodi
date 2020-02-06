import React, { Component } from "react";
import axios from "axios";

export class PokemonDetail extends Component {
  state = {
    pokemonData: [],
    types: [],
    stats: []
  };

  componentDidMount() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}/`)
      .then(res =>
        this.setState({
          pokemonData: res.data,
          types: res.data.types,
          stats: res.data.stats
        })
      );
  }

  render() {
    console.log(this.state.stats);
    return (
      <div>
        <h1>{this.state.pokemonData.name}</h1>
        <p>Height: {this.state.pokemonData.height}</p>
        <p>Weight: {this.state.pokemonData.weight}</p>
        <h1>Types: </h1>
        <div>
          {this.state.types.map(type => (
            <li key={type.type.name}>{type.type.name}</li>
          ))}
        </div>
        <h1>Stats: </h1>
        <div>
          {this.state.stats.map(stat => (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </div>
      </div>
    );
  }

  // this.props.pokemons.map(pokemon => (
  //   <Pokemon key={pokemon.name} pokemon={pokemon}
}

export default PokemonDetail;
