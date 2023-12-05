import React, { useState, useEffect } from "react";

const Card = ({ pokemon }) => { //which API should we get the card from and how?
  return (
    <div>
      {pokemon.name} - Power: {pokemon.power}
    </div>
  );
};

const Game = () => {
  const [playerHand, setPlayerHand] = useState([]);
  const [computerHand, setComputerHand] = useState([]);

  useEffect(() => {
    setPlayerHand(generateRandomHand());
    setComputerHand(generateRandomHand());
  }, []);

  const generateRandomHand = () => {
    return []; // Return an array of Pokémon card objects. We can choose how many cards we want returned..
  };

  return (
    <div>
      <h2>Your Hand</h2>
      {playerHand.map((pokemon, index) => (
        <Card key={index} pokemon={pokemon} /> // I need help here..again with the index and selecting where to get the card from.
      ))}
      {/* Add more game logic and UI components here */}
    </div>
  );
};

export default function Game() {
  return (
    <div className="App">
      <h1>Poké Fight Card Game</h1>
      <Game />
    </div>
  );
};
