import React from "react";
import { useLoaderData } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";

const PokeList = () => {
  const pokemons = useLoaderData();
  console.log(pokemons);
  return (
    <div>
      <h1 className="border-solid border-red-700">Pokemons</h1>
      <div className="grid grid-cols-3">{pokemons.map((pokemon) =>{
        return <PokemonCard key={pokemon.id} pokemon={pokemon}/> //TO-DO - Create Poke Card component which has Pokemon as props.
      })}</div>
    </div>
  );
};

export default PokeList;
