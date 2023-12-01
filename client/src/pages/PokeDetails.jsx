import React from "react";
import { useLoaderData } from "react-router-dom";

const PokeDetails = () => {
  const pokemon = useLoaderData();
  console.log(pokemon.data);
  const pokeData = pokemon.data;
  return (
    <>
      <h2>Heading</h2>
      <p>Information about pokemon</p>
      <p>Grid with the pokemcards</p>
      {pokeData.map((pokemon) => {
        return <img src={pokemon.images.large} key={pokemon.id} />;
      })}
      <p>evolution stages??</p>
    </>
  );
};

export default PokeDetails;
