const data = require("../pokedex.json");
const Pokemon = require("../models/pokemon");

const getPokemons = async (req, res) => {
  try {
    const { skip, limit = 9, q } = req.query;
    if (!q) {
      const pokemons = await Pokemon.find({})
        .sort({ id: 1 })
        .skip(skip)
        .limit(limit);
      res.json(pokemons);
    } else {
      const name = q.charAt(0).toUpperCase() + q.slice(1);
      console.log(name);
      const filterpokemons = await Pokemon.find({ "name.english": name });
      res.json(filterpokemons);
    }
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
