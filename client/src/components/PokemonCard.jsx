import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card w-20vh h-27.5vh shadow-inset-0 border-4 border-yellow-300 border-solid hover:shadow-lg hover:border-opacity-100">
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
      <div>
        
      </div>
    </div>
  );
};


export default PokemonCard;
