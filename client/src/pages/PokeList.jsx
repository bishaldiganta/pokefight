import React from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
import { useState } from "react";

const PokeList = () => {
  let pokemons = useLoaderData();
  console.log(pokemons);
  const [searchParams, setSearchParams] = useSearchParams();

  const [skip, setSkip] = useState(0);
  const [query, setQuery] = useState("");

  const handleNext = () => {
    setSkip((prev) => {
      const newSkip = prev + 9;
      setSearchParams(`skip=${newSkip}`);
      return newSkip;
    });
  };

  const handlePrev = () => {
    setSkip((prev) => {
      const newSkip = prev >= 9 ? prev - 9 : 0;
      setSearchParams(`skip=${newSkip}`);
      return newSkip;
    });
  };

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    console.log(query);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchParams(`q=${query}`);
  };

  return (
    <div className="min-h-screen sm:p-10 p-5 lg:px-10 bg-gray-100">
      <form className="flex justify-center m-8" onSubmit={handleSearchSubmit}>
        <img src="../assets/images/pokesearch.png" alt="" width="50px" />
        <input type="search" onChange={handleSearchChange} />
      </form>
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
