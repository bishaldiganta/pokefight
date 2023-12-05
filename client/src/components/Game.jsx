import React, { useState, useEffect } from "react";
import pokeArray from "../game/pokearray";

const Card = ({ pokemon }) => {
  //which API should we get the card from and how?
  return (
    <div>
      {pokemon.name} - Power: {pokemon.power}
    </div>
  );
};

export default function Game () {
  const [playerHand, setPlayerHand] = useState([]);
  const [computerHand, setComputerHand] = useState([]);

 

  /* const generateRandomHand = () => {
    const randomNumber = Math.floor(Math.random() * pokeArray.length); // Return an array of Pokémon card objects. We can choose how many cards we want returned..
    console.log(randomNumber);
  }; */

  return (
    <div>
      <h2>Your Hand</h2>
      
    </div>
  );
};

/* export default function Game() {
  return (
    <div className="App">
      <h1>Poké Fight Card Game</h1>
      <Game />
    </div>
  );
}
 */