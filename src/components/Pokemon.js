import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Pokemon = props => {
  const [imgUrl, setImgUrl] = useState([]);
  const [id, setId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(props.pokemon.url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch.");
        }
        setIsLoading(false);
        return response.json();
      })
      .then(res => {
        setImgUrl(res.sprites.front_default);
        setId(res.id);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  let content = <p>Loading pokemons...</p>;

  if (!isLoading && imgUrl) {
    content = (
      <span style={{ display: "inline-block", padding: "20px" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={imgUrl} />
          <Card.Body>
            <Card.Title>
              <Link to={`/pokemon/${id}`}>{props.pokemon.name}</Link>
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
