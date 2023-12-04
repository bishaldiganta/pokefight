import React from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
import getPokemons from "../api/pokemon";
import { useState } from "react";

const PokeList = () => {
  let pokemons = useLoaderData();
  console.log(pokemons);
  const [searchParams, setSearchParams] = useSearchParams();

  const [skip, setSkip] = useState(0);

  const handleNext = () => {
    setSkip((prev) => prev + 9);
    setSearchParams(`skip=${skip + 9}`);
  };

  const handlePrev = () => {
    setSkip((prev) => {
      if (prev >= 9) return prev - 9;
      return 0;
    });
    setSearchParams(`skip=${skip - 9}`);
  };

  return (
    <div className="min-h-screen sm:p-10 p-5 lg:px-10 bg-gray-100">
      <div className=" max-w-5xl mx-auto place-content-center justify-center justify-items-center grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5">
        {pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
      <div className="flex gap-2 justify-center m-4">
        <button disabled={skip === 0} onClick={handlePrev}>
          Prev
        </button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default PokeList;
