import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden max-w-xs order-first lg:order-none border-8 border-solid border-amber-300 py-10 px-8">
      <div className="flex justify-end gap-2">
        <h2>{pokemon.name.english}</h2>
        <p>{pokemon.base.HP}</p>
        {/* <img src="" alt="" />  include the type icon*/}
      </div>
      <img
        className="w-full h-40 sm:h-48 object-cover bg-slate-400"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name.english}
      />

      <div></div>
      <div></div>
    </div>
  );
};

export default PokemonCard;
