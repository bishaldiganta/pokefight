import React from "react";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";

const PokeList = () => {
  const pokemons = useRouteLoaderData();
  console.log(pokemons);
  return <div>PokeList</div>;
};

export default PokeList;
