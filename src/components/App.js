import React from "react";
import PokeList from "./PokeList";
import pokemons from "../data/pokemons.json";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokedex: pokemons,
    };
  }

  toggleFavorite(pokeId) {
    //this.state[pokeId].favorite = true; kakota
  }

  render() {
    console.log(this.state.pokedex);
    return (
      <div>
        App
        <PokeList list={this.state.pokedex} />
      </div>
    );
  }
}

export default App;
