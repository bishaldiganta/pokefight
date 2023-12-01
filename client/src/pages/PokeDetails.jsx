import React from "react";
import { useLoaderData } from "react-router-dom";

const PokeDetails = () => {
  const pokemon = useLoaderData();
  console.log(pokemon);
  return (
    <div>
      more information about the pokemon from the pokeapi and not the json
    </div>
  );
};

export default PokeDetails;
