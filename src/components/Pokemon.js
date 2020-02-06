import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHttp } from "./hooks/http";

const Pokemon = props => {
  const [isLoading, fetchedData] = useHttp(props.pokemon.url, []);

  let content = <p>Loading pokemons...</p>;

  if (!isLoading && fetchedData) {
    content = (
      <span style={{ display: "inline-block", padding: "20px" }}>
        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" src={fetchedData.sprites.front_default} />
          <Card.Body>
            <Card.Title>
              <Link to={`/pokemon/${fetchedData.id}`}>
                <Button
                  variant="outline-success"
                  style={{ width: "200px", textAlign: "center" }}
                >
                  {props.pokemon.name}
                </Button>
              </Link>
            </Card.Title>
          </Card.Body>
        </Card>
      </span>
    );
  }

  return content;
};

// PropTypes
Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default Pokemon;
