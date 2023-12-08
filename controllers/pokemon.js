const data = require("../pokedex.json");
const Pokemon = require("../models/pokemon");

const getPokemons = async (req, res) => {
  try {
    const { skip, limit = 9, q, sort } = req.query;
    console.log(sort);
    const sortBy = sort === "id" ? "id" : "score"; // Use the actual field for sorting
    const sortOrder = sort === "id" ? 1 : -1;

    if (!q) {
      const pokemons = await Pokemon.find({})
        .sort({ [sortBy]: sortOrder })
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

const updatePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const { score } = req.body;
    const filter = { id: +id };
    const poke = await Pokemon.findOne(filter);
    const pokemon = await Pokemon.findOneAndUpdate(filter, { $inc: { score } });
    res.json(pokemon);
  } catch (error) {
    console.log(error);
    res.status(500).send("Ops... Something Went Wrong");
  }
};

module.exports = { getPokemons, getSinglePokemon, updatePokemon };
