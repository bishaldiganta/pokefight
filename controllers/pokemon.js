const data = require("../pokedex.json");
const Pokemon = require("../models/pokemon");

const getPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find({});
    res.json(pokemons);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

const getSinglePokemon = async (req, res) => {
  const { id } = req.params;
  const index = data.findIndex((pokemon) => {
    return pokemon.id === +id;
  });
  if (index === -1) {
    res.status(404).send("Pokemon Missing!");
  } else {
    res.json(data[index]);
  }
};

module.exports = { getPokemons, getSinglePokemon };
