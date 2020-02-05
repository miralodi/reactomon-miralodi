import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import PokemonDetail from "./components/PokemonDetail";
import axios from "axios";

class App extends Component {
  state = {
    pokemons: [],
    types: []
  };

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
      .then(res => this.setState({ pokemons: res.data.results }));
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then(res => this.setState({ types: res.data.results }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Navbar />
            {/* <PokemonList pokemons={this.state.pokemons} /> */}
            <Route
              exact
              path="/pokemons"
              render={props => (
                <React.Fragment>
                  <PokemonList pokemons={this.state.pokemons} />
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/types"
              render={props => (
                <React.Fragment>
                  <TypeList
                    style={{ textAlign: "center" }}
                    types={this.state.types}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/pokemon/:id" component={PokemonDetail} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
