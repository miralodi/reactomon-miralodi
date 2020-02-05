import React, { Component } from "react";
import PropTypes from "prop-types";

export class Pokemon extends Component {

  render() {
    return (
      <div style={pokemonStyle}>
        <p>{this.props.pokemon.name}</p>
      </div>
    );
  }
}

// PropTypes
Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired
};

const pokemonStyle = {
  backgroundColor: "#f4f4f4"
};

export default Pokemon;
