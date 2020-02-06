import React, { useState, useEffect } from "react";
import Type from "./Type";

const TypeList = props => {
  const [types, setTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://pokeapi.co/api/v2/type")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch.");
        }
        setIsLoading(false);
        return response.json();
      })
      .then(res => {
        setTypes(res.results);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  let content = <p>Loading types...</p>;

  if (!isLoading && types) {
    content = types.map(type => (
      <Type key={type.name} type={type} />
    ));
  }

  return content;
};


export default TypeList;

// if (!isLoading && pokemons) {
//   content = pokemons.map(pokemon => (
//     <Pokemon key={pokemon.name} pokemon={pokemon} />
//   ));
// }
