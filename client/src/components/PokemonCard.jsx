import React from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

const typeColors = {
  normal: "bg-gradient-to-b from-slate-600 via-gray-400 to-slate-800",
  fire: "bg-gradient-to-b from-orange-600 via-amber-400 to-yellow-800",
  water: "bg-gradient-to-b from-sky-700 via-cyan-400 to-sky-900",
  electric: "bg-gradient-to-b from-yellow-400 via-lime-200 to-yellow-600",
  grass: "bg-gradient-to-b from-green-600 via-lime-400 to-emerald-800",
  ice: "",
  fighting: "bg-gradient-to-b from-red-400 via-orange-300 to-red-900",
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
      //order-first lg:order-none border-8 border-solid border-amber-300 py-10 px-8 pb-28
      className={clsx("shadow-lg rounded-md max-w-xs", backgroundColorClass)}
      onClick={handleClick}
    >
      <div className="flex justify-end gap-2">
        <h2>{pokemon.name.english}</h2>
        <p className="text-4xl tracking-wider	text-stone-700/25 -mt-3 -ml-24">
          {pokemon.name.japanese}
        </p>
        <p>{pokemon.base.HP}</p>
      </div>

      <img
        className="w-full h-40 sm:h-48 object-cover"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
        alt={pokemon.name.english}
      />
    </div>
  );
};

export default PokemonCard;
