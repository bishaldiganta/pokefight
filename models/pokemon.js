const { Schema, model, Types } = require("mongoose");

const pokeSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: Object },
  type: { type: Array },
  base: { type: Object },
});

const Pokemon = model("Pokemon", pokeSchema);

module.exports = Pokemon;
