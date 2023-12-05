import React from "react";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion"


const PokeDetails = () => {
  const pokemon = useLoaderData();
  console.log(pokemon.data);
  const pokeData = pokemon.data;
  return (
    <>
      <h2 className="">{pokeData[0].name}</h2>
      <p>Information about pokemon</p>
      <p>Grid with the pokecards</p>
      <div className="rounded-md grid grid-cols-3 gap-10 p-10">
        {pokeData.map((pokemon) => {
          return <motion.img className="shadow-lg" whileHover={{ scale: 1.1 }}
           src={pokemon.images.large} key={pokemon.id} />; // TO-DO- ADD COLORED BACKGROUND SHADOW TO CARDS BASED ON typeColors. Also add card flip animation. Check MIRO.
        })}
      </div>
      <p>evolution stages??</p>
    </>
  );
};

export default PokeDetails;
