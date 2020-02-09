import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import CatchedPokemons from "./components/CatchedPokemons";
import PokemonDetail from "./components/PokemonDetail";
import ThemeContext from "./components/context/ThemeContext";
import { CatchedPokemonProvider } from "./components/context/CatchedPokemonsContext";

const App = props => {
  const themeHook = useState("light");

  let content = (
    <ThemeContext.Provider value={themeHook}>
      <CatchedPokemonProvider>
        <Router>
          <div className="App" style={{ textAlign: "center" }}>
            <Navbar />
            <Route exact path="/pokemons" component={PokemonList} />
            <Route exact path="/types" component={TypeList} />
            <Route exact path="/catched-pokemons" component={CatchedPokemons} />
            <Route path="/pokemon/:id" component={PokemonDetail} />
          </div>
        </Router>
      </CatchedPokemonProvider>
    </ThemeContext.Provider>
  );

  return content;
};

export default App;
