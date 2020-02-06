import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import PokemonDetail from "./components/PokemonDetail";

const App = props => {
  let content = (
    <Router>
      <div className="App" style={{ textAlign: "center" }}>
        <Navbar />
        <Route exact path="/pokemons" component={PokemonList} />
        <Route exact path="/types" component={TypeList} />
        <Route path="/pokemon/:id" component={PokemonDetail} />
      </div>
    </Router>
  );

  return content;
};

export default App;
