import React from "react";
import axios from "axios";

const url = `https://pokeapi.co/api/v2/pokemon/charizard`;

const getPokemons = async () => {
  try {
    const result = await axios(url);
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export default getPokemons;
