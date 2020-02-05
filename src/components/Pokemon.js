import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import axios from "axios";

export class Pokemon extends Component {
  state = {
    imgUrl: ""
  };

  componentDidMount() {
    axios
      .get(this.props.pokemon.url)
      .then(res => this.setState({ imgUrl: res.data.sprites.front_default }));
  }

  render() {
    return (
      <span style={{ display: "inline-block", padding: "20px" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.state.imgUrl} />
          <Card.Body>
            <Card.Title>{this.props.pokemon.name}</Card.Title>
          </Card.Body>
        </Card>
      </span>
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
