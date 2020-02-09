import React, { useContext } from "react";
import styled from "styled-components";
import { useHttp } from "./hooks/http";
import { Button, ListGroup, Table } from "react-bootstrap";
import ThemeContext from "./context/ThemeContext";
import AppTheme from "./layout/AppTheme";
import CatchPokemonBtn from "./layout/CatchPokemonBtn";

const PokemonDetail = props => {
  const [isLoading, data] = useHttp(
    `https://pokeapi.co/api/v2/pokemon/${props.match.params.id}/`,
    []
  );

  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  const Header = styled.header`
    text-transform: capitalize;
    background-color: "#fff";
    color: ${currentTheme.backgroundColor};
    display: inline-block;
    text-align: left;
    font-size: 3rem;
    padding: 10px;
  `;

  const Img = styled.img`
    width: 400px;
    filter: ${currentTheme.filter};
  `;

  let content = <p>Loading data...</p>;

  if (!isLoading && data) {
    content = (
      <div>
        <div style={{ height: "91px", textAlign: "left" }}>
          <Header>{data.name} </Header>
          <CatchPokemonBtn
            pokemon={{
              name: data.name,
              url: `https://pokeapi.co/api/v2/pokemon/${props.match.params.id}/`
            }}
            style={{ height: "91px", padding: "10px", display: "inline-block", float: "left" }}
          />
        </div>
        <div style={{ textAlign: "left", padding: "10px" }}>
          {data.types.map(type => (
            <Button
              variant={currentTheme.variant}
              style={{
                width: "200px",
                textAlign: "center",
                padding: "10px",
                marginRight: "10px",
                marginBottom: "10px"
              }}
            >
              {type.type.name}
            </Button>
          ))}

          <Table striped bordered responsive variant={currentTheme.variant}>
            <thead>
              <tr>
                <th>Sprites</th>
                <th>Abilities</th>
                <th>Stats</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ textAlign: "center", padding: "0" }}>
                  <Img src={data.sprites.front_default} />
                  <Img src={data.sprites.front_shiny} />
                </td>
                <td>
                  <ListGroup>
                    {data.abilities.map(ability => (
                      <ListGroup.Item key={ability.ability.name}>
                        <Button
                          variant={currentTheme.variant}
                          style={{
                            width: "100%",
                            textAlign: "center"
                          }}
                        >
                          {ability.ability.name}
                        </Button>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </td>
                <td>
                  <ListGroup>
                    {data.stats.map(stat => (
                      <ListGroup.Item key={stat.stat.name}>
                        {stat.stat.name}: {stat.base_stat}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }

  return content;
};

export default PokemonDetail;
