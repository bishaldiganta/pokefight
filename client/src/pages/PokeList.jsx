import React from "react";
import { useLoaderData, useSearchParams, useLocation } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
import { useState } from "react";
import pokeArray from "../game/pokearray";

const PokeList = () => {
  let pokemons = useLoaderData();
  let location = useLocation();
  /*   console.log(pokemons);
   */
  const [searchParams, setSearchParams] = useSearchParams(); //these search parameters can be used by the loader function

  const [skip, setSkip] = useState(() => {
    const startingIndex = location.search.indexOf("skip");
    if (startingIndex === -1) return 0; // if there is no skip query provided then the initial state should be 0
    const number = +location.search.split("=")[1];
    console.log("Number:", number);
    return number;
  });
  const [query, setQuery] = useState("");
  console.log(skip);
  const handleNext = () => {
    setSkip((prev) => {
      const newSkip = prev + 9;
      setSearchParams(`skip=${newSkip}`);
      return newSkip;
    });
  };
  console.log(location.search);

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
      <div className=" max-w-5xl mx-auto place-content-center justify-center justify-items-center grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 m-3">
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
