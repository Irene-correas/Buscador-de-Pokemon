import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/pokeList.scss";
class PokeList extends React.Component {
  render() {
    const items = this.props.list.map((pokemon, index) => {
      return (
        <li key={pokemon.id} id={index} className="card" title={pokemon.name}>
          <Pokemon pokemon={pokemon} />
        </li>
      );
    });
    return (
      <div className="tittle">
        POKEMON
        <ul className="cards">{items}</ul>
      </div>
    );
  }
  // PokeList.propTypes = {
  //   name: PropTypes.string,
}

export default PokeList;
