import React from "react";
import axios from "axios";

const url = `http://localhost:8000/pokemon`;

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
