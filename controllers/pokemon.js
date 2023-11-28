const data = require("../pokedex.json");

const getPokemons = async (req, res) => {
  console.log(data);
  res.json(data);
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
