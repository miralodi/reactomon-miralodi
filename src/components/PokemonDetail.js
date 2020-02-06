import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonDetail = props => {
  const [pokemonData, setPokemonData] = useState([]);
  const [types, setTypes] = useState([]);
  const [stats, setStats] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.match.params.id}/`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch.");
        }
        setIsLoading(false);
        return response.json();
      })
      .then(res => {
        setPokemonData(res.sprites.front_default);
        setTypes(res.types);
        setStats(res.stats);
        setAbilities(res.abilities);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  let content = <p>Loading pokemons...</p>;

  if (!isLoading && pokemonData && types && stats && abilities) {
    content = (
      <div>
        <h1>{pokemonData.name}</h1>
        <p>Height: {pokemonData.height}</p>
        <p>Weight: {pokemonData.weight}</p>
        <h1>Types: </h1>
        <div>
          {types.map(type => (
            <li key={type.type.name}>{type.type.name}</li>
          ))}
        </div>
        <h1>Stats: </h1>
        <div>
          {stats.map(stat => (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </div>
        <h1>Abilities: </h1>
        <div>
          {abilities.map(ability => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))}
        </div>
      </div>
    );
  }

  return content;
};

export default PokemonDetail;
