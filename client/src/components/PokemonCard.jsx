import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="rounded-md border-4 border-solid border-amber-300">
      <div>
        <h2>{pokemon.name.english}</h2>
        <p>{pokemon.base.HP}</p>
        {/* <img src="" alt="" />  include the type icon*/}
      </div>
      <img
        className="border-solid border-4  bg-slate-600	"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name.english}
      />

      <div></div>
      <div></div>
    </div>
  );
};

export default PokemonCard;
