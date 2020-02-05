import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PokemonDetail from "./PokemonDetail";

export class Pokemon extends Component {
  state = {
    imgUrl: "",
    id: 0
  };

  componentDidMount() {
    axios.get(this.props.pokemon.url).then(res =>
      this.setState({
        imgUrl: res.data.sprites.front_default,
        id: res.data.id
      })
    );
  }

  render() {
    console.log(this.state.id);

    return (
      <span style={{ display: "inline-block", padding: "20px" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.state.imgUrl} />
          <Card.Body>
            <Card.Title>
              <Link to={`/pokemon/${this.state.id}`}>
                {this.props.pokemon.name}
              </Link>
            </Card.Title>
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
