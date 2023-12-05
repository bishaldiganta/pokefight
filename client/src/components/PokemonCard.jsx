import React from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

const typeColors = {
  normal: "bg-gradient-to-b from-slate-600 via-gray-400 to-slate-800",
  fire: "bg-gradient-to-b from-orange-600 via-amber-400 to-yellow-800",
  water: "bg-gradient-to-b from-sky-700 via-cyan-400 to-sky-900",
  electric: "bg-gradient-to-b from-yellow-400 via-lime-200 to-yellow-600",
  grass: "bg-gradient-to-b from-green-600 via-lime-400 to-emerald-800",
  bug: "bg-gradient-to-b from-lime-800 via-green-400 to-lime-950",
  fighting: "bg-gradient-to-b from-red-400 via-orange-300 to-red-900",
  poison: "bg-gradient-to-b from-purple-700 via-fuchsia-400 to-purple-950",
  ground: "bg-gradient-to-b from-yellow-900 via-stone-500 to-stone-800",
  flying: "bg-gradient-to-b from-cyan-700 via-sky-200 to-sky-800",
  fairy: "bg-gradient-to-b from-pink-700 via-pink-300 to-pink-900",
  psychic: "bg-gradient-to-b from-violet-600 via-purple-200 to-violet-950",
  rock: "bg-gradient-to-b from-stone-900 via-neutral-400 to-stone-800",
  ghost: "bg-gradient-to-b from-slate-900 via-slate-400 to-slate-950",
  ice: "bg-gradient-to-b from-cyan-500 via-cyan-100 to-cyan-900",
  dragon: "bg-gradient-to-b from-teal-700 via-teal-300 to-teal-900",
  steel: "bg-gradient-to-b from-zinc-700 via-zinc-200 to-zinc-900",
  dark: "bg-gradient-to-b from-gray-700 via-gray-300 to-gray-950",
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
      //TO-DO: make the background round and the japanes text bigger
      //order-first lg:order-none border-8 border-solid border-amber-300 py-10 px-8 pb-28
      className={clsx(
        "shadow-lg rounded-full aspect-square max-w-xs",
        backgroundColorClass
      )}
      onClick={handleClick}
    >
      <div className="relative w-full">
        <h2 className="text-2xl absolute -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2">
          {pokemon.name.english}
        </h2>
        <p className="text-4xl tracking-wider	text-stone-700/50 absolute -translate-y-1/2 -translate-x-1/4 left-1/2 top-1/2 w-full ">
          {pokemon.name.japanese}
        </p>
      </div>

      <img
        className="w-full object-cover"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
        alt={pokemon.name.english}
      />
    </div>
  );
};

export default PokemonCard;
