import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

const url = `https://api.pokemontcg.io/v2/cards/`;

export const getPokeCards = async ({ params }) => {
  try {
    const response = await axios(`${url}`, {
      params: { q: `name:${params.name}`, pageSize: 6 },
      headers: {
        "x-api-key": API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getpokeCard = async (pokeid) => {
  try {
    const response = await axios(`${url}/${pokeid}`, {
      headers: {
        "x-api-key": API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


