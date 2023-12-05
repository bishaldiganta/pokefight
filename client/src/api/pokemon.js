import React from "react";
import axios from "axios";

const url = `http://localhost:8000/pokemon`;

const getPokemons = async ({ request }) => {
  try {
    console.log(request);
    const query = request.url.split("?")[1];
    // console.log(query);
    const result = await axios(`${url}?${query}`);
    // console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export default getPokemons;
