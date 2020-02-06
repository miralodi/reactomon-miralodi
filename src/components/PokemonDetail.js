import React from "react";
import styled from "styled-components";
import { useHttp } from "./hooks/http";
import { Button, ListGroup } from "react-bootstrap";

const Header = styled.header`
  text-transform: capitalize;
  color: "tial";
  text-align: left;
  font-size: 3rem;
  padding: 10px;
`;

const Img = styled.img`
  text-align: left;
  padding: 10px;
  width: 500px;
`;

const Table = styled.table`
  text-align: left;
  padding: 10px;
  width: 70%;
`;

const PokemonDetail = props => {
  const [isLoading, fetchedData] = useHttp(
    `https://pokeapi.co/api/v2/pokemon/${props.match.params.id}/`,
    []
  );

  let content = <p>Loading data...</p>;

  if (!isLoading && fetchedData) {
    content = (
      <div>
        <Header>{fetchedData.name}</Header>
        <div style={{ textAlign: "left", padding: "7px" }}>
          {fetchedData.types.map(type => (
            <Button
              variant="outline-success"
              style={{ width: "200px", textAlign: "center" }}
            >
              {type.type.name}
            </Button>
          ))}
        </div>

        <Table>
          <tr>
            <td>
              <div>
                <Img src={fetchedData.sprites.front_default} />
              </div>
              <div>
                <h1>Stats: </h1>
                <ListGroup>
                  {fetchedData.stats.map(stat => (
                    <ListGroup.Item key={stat.stat.name}>
                      {stat.stat.name}: {stat.base_stat}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
              <div>
                <h1>Abilities: </h1>
                <ListGroup>
                  {fetchedData.abilities.map(ability => (
                    <ListGroup.Item key={ability.ability.name}>
                      {ability.ability.name}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            </td>
          </tr>
        </Table>
      </div>
    );
  }

  return content;
};

export default PokemonDetail;
