const express = require("express");
const pokeRouter = express.Router(); //makes this into a router.

//require all functions from controllers.
const { getPokemons, getSinglePokemon } = require("../controllers/pokemon");

pokeRouter.route("/").get(getPokemons);
pokeRouter.route("/:id").get(getSinglePokemon);

module.exports = pokeRouter;
