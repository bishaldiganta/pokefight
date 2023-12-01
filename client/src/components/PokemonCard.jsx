import React from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

const typeColors = {
  normal: "bg-gray-400",
  fire: "bg-red-400",
  water: "bg-blue-400",
  electric: "bg-yellow-400",
  grass: "bg-gradient-to-b from-green-400 via-lime-600 to-emerald-800",
  ice: "bg-blue-200",
  fighting: "bg-red-600",
  poison: "bg-purple-400",
  ground: "bg-yellow-600",
  flying: "bg-blue-300",
  fairy: "",
  psychic: "",
  metal: "",
  dragon: "",
  lightning: "",
  darkness: "",
  colorless: "",
};

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/pokemon/${pokemon.name.english.toLowerCase()}`);
  };
  const backgroundColorClass =
    typeColors[pokemon.type[0].toLowerCase()] || "bg-gray-400";
  return (
    <div
      className={clsx(
        "shadow-lg rounded-md overflow-hidden max-w-xs order-first lg:order-none border-8 border-solid border-amber-300 py-10 px-8 pb-28",
        backgroundColorClass
      )}
      onClick={handleClick}
    >
      <div className="flex justify-end gap-2">
        <h2>{pokemon.name.english}</h2>
        <p className="text-4xl tracking-wider	text-stone-700/25 -mt-3 -ml-24">
          {pokemon.name.japanese}
        </p>
        <p>{pokemon.base.HP}</p>
        {/* <img src="" alt="" />  include the type icon*/}
      </div>
      {/* <img
        className="w-full h-40 sm:h-48 object-cover bg-slate-400"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name.english}
      /> */}
      {/* <img
        className="w-full h-40 sm:h-48 object-cover bg-slate-400"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        alt={pokemon.name.english}
      /> */}
      <img
        className="w-full h-40 sm:h-48 object-cover bg-slate-400"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
        alt={pokemon.name.english}
      />
    </div>
  );
};


export default PokemonCard;
