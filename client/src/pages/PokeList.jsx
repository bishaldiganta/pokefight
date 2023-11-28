import React from "react";
import { useLoaderData } from "react-router-dom";

const PokeList = () => {
  const pokemons = useLoaderData();
  console.log(pokemons);
  return (
    <div>
      <h1>Pokemons</h1>
      <ul>{pokemons.map((pokemon) =>{
        return <li key={pokemon.id}>{pokemon.name.english}</li> //TO-DO - Create Poke Card component which has Pokemon as props.
      })}</ul>
    </div>
  );
};

export default PokeList;
