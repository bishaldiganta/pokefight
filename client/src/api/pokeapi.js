import React from "react";
import axios from "axios";

const url = `https://pokeapi.co/api/v2/pokemon/`;

const getSinglePokemon = async (name) => {
  try {
    const result = await axios(`${url}${name}`);
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export default getSinglePokemon;
