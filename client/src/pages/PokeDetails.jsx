import React from "react";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";

const PokeDetails = () => {
  const pokemon = useLoaderData();

  console.log(pokemon.data);
  const pokeData = pokemon.data;
  
//TO-DO - Ensure that gifs are loaded for the EvolvesTo and EvolvesFrom part.


/*   useEffect = () => {
    getSinglePokemon(pokeData[0].name), [];

  }; */

  return (
    <>
      <div className="bg-yellow-200 rounded-lg shadow-md p-2 m-0">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
          {pokeData[0].name}
        </h2>
        <p className="text-center text-xl text-gray-00 mb-1">
          {pokeData[0].flavorText}
        </p>
        <p className="text-center text-sm text-gray-800 italic">
          {pokeData[0].evolvesFrom ? (
            <>
              <p>Evolves from: {pokeData[0].evolvesFrom}</p>{" "}
              {/* <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokeData[0].nationalPokedexNumbers}.gif`}
              /> */}{" "}
            </>
          ) : (
            ""
          )}
        </p>
        <div className="text-center text-sm text-gray-800 italic mb-2">
          {pokeData[0].evolvesTo ? (
            <>
              <p>Evolves to: {pokeData[0].evolvesTo}</p>{" "}
              {/* <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokeData[0].nationalPokedexNumbers}.gif`}
              /> */}{" "}
            </>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <div className="rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-40 p-10">
          {pokeData.map((pokemon) => {
            return (
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="shadow-lg overflow-hidden rounded-lg max-w-xs min-w-[250px] w-full mx-auto"
                key={pokemon.id}
              >
                <img
                  className="w-full h-auto"
                  src={pokemon.images.large}
                  alt={`${pokemon.name} card`}
                />{" "}
                {/* TO-DO- ADD COLORED BACKGROUND SHADOW TO CARDS BASED ON typeColors. Also add card flip animation. Check MIRO. */}
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
