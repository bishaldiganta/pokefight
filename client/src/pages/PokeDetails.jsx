import React from "react";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion"

const PokeDetails = () => {
  const pokemon = useLoaderData();
  console.log(pokemon.data);
  const pokeData = pokemon.data;
  return (
    <>
    <div>
      <h2 className="text-2xl font-bold text-center">{pokeData[0].name}</h2>
      <p className="text-center">Information about pokemon</p>
      </div>
      <div className="flex justify-center">
        <div className="rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-40 p-10">
          {pokeData.map((pokemon) => {
            return (
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="shadow-lg overflow-hidden rounded-lg max-w-xs min-w-[250px] w-full mx-auto"
                key={pokemon.id}>
                <img 
                  className="w-full h-auto"
                  src={pokemon.images.large}
                  alt={`${pokemon.name} card`}
                /> {/* TO-DO- ADD COLORED BACKGROUND SHADOW TO CARDS BASED ON typeColors. Also add card flip animation. Check MIRO. */}
              </motion.div>
            );
          })}
        </div>
      </div>
      <p className="text-center">evolution stages??</p>
    </>
  );
};

export default PokeDetails;
