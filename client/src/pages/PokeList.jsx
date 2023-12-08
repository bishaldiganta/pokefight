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
      <form
        className="flex justify-center m-8 gap-4 pb-8"
        onSubmit={handleSearchSubmit}
      >
        <img src="../assets/images/pokesearch.png" alt="" width="50px" />
        <input
          className="px-3 text-xl text-gray-800 rounded-md bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent shadow-lg focus:shadow-outline"
          type="search"
          onChange={handleSearchChange}
        />
      </form>
      <div className=" max-w-5xl mx-auto place-content-center justify-center justify-items-center grid md:grid-cols-2 lg:grid-cols-3 gap-20 m-3">
        {pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
      <div className="flex gap-40 justify-center m-4 py-10">
        <button
          disabled={skip === 0}
          onClick={handlePrev}
          className={`px-4 py-2 text-gray-900 hover:text-gray-700 text-2xl bg-yellow-200 opacity-90 font-bold ${
            skip === 0
              ? "cursor-not-allowed opacity-40"
              : "bg-slate-50 opacity-90 rounded-lg"
          }`}
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 text-gray-900 hover:text-gray-700 text-2xl font-bold bg-yellow-200 opacity-90 rounded-lg"
        >
          Next
        </button>
      </div>

      {/* <div className="flex gap-2 justify-center m-4">
        <button disabled={skip === 0} onClick={handlePrev}>
          Prev
        </button>
        <button onClick={handleNext}>Next</button>
      </div> */}
    </div>
  );
};

export default PokeList;
