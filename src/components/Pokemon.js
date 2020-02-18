import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHttp } from "./hooks/http";
import ThemeContext from "./context/ThemeContext";
import AppTheme from "./layout/AppTheme";
import CatchPokemonBtn from "./layout/CatchPokemonBtn";

const Pokemon = props => {
  const [isLoading, fetchedData] = useHttp(props.pokemon.url, []);
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  let content = <p>Loading pokemons...</p>;

  if (!isLoading && fetchedData) {
    content = (
      <span
        style={{
          display: "inline-block",
          padding: "20px",
          color: `${currentTheme.textColor}`
        }}
      >
        <Card style={{ width: "15rem" }}>
          <Card.Img
            variant="top"
            style={{ filter: `${currentTheme.filter}` }}
            src={fetchedData.sprites.front_default}
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "left" }}>
              <CatchPokemonBtn
                pokemon={{name: props.pokemon.name, url: props.pokemon.url}}
              />
              <Link to={`/pokemon/${fetchedData.id}`}>
                <Button
                  variant={currentTheme.variant}
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
