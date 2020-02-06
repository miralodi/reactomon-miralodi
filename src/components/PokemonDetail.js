import React, { useState, useEffect } from "react";
import { useHttp } from "./hooks/http";

const PokemonDetail = props => {
  const [isLoading, fetchedData] = useHttp(
    `https://pokeapi.co/api/v2/pokemon/${props.match.params.id}/`,
    []
  );

  let content = <p>Loading data...</p>;

  if (!isLoading && fetchedData) {
    content = (
      <div>
        <h1>{fetchedData.name}</h1>
        <p>Height: {fetchedData.height}</p>
        <p>Weight: {fetchedData.weight}</p>
        <h1>Types: </h1>
        <div>
          {fetchedData.types.map(type => (
            <li key={type.type.name}>{type.type.name}</li>
          ))}
        </div>
        <h1>Stats: </h1>
        <div>
          {fetchedData.stats.map(stat => (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </div>
        <h1>Abilities: </h1>
        <div>
          {fetchedData.abilities.map(ability => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))}
        </div>
      </div>
    );
  }

  return content;
};

export default PokemonDetail;
