import React, {useState, createContext} from "react";

export const CatchedPokemonsContext = createContext();

export const CatchedPokemonProvider = (props) => {
    const [catchedPokemons, setCatchedPokemons] = useState([])
    
    return (
        <CatchedPokemonsContext.Provider value={[catchedPokemons, setCatchedPokemons]}>
            {props.children}
        </CatchedPokemonsContext.Provider>
    );
}