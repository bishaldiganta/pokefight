import React from "react";
import axios from "axios";
import { Await } from "react-router-dom";

const url = `http://localhost:8000/pokemon`;

const getPokemons = async () => {
  try {
    const result = await axios(url);
    console.log(result.data);
    return result.data; // QUESTION - Do we have to map anything here? 
  } catch (error) {
    console.log(error);
  }
};

export default getPokemons;
