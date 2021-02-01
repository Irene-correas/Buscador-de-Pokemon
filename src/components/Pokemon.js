import React from "react";

const Pokemon = (props) => {
  // name, url, types, id
  const items = props.pokemon.types.map((type, index) => {
    return (
      <li key={index} id={index} className="poke-type">
        {type}
      </li>
    );
  });

  return (
    <ul>
      <li>
        <img
          src={props.pokemon.url}
          alt={props.pokemon.name}
          title={props.pokemon.name}
        />
        <h3>{props.pokemon.name}</h3>
        <ul>{items}</ul>
      </li>
    </ul>
  );
};
export default Pokemon;
