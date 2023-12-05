import { useEffect, useState } from "react";
import pokeArray from "../game/pokearray";
import { getpokeCard } from "../api/tcgapi";

const GameTest = () => {
  const [computerCard, setComputerCard] = useState([]);
  const [playerCard, setPlayerCard] = useState(null);
  useEffect(() => {
    getpokeCard(generateRandomHand()).then((data) => {
      setPlayerCard(data.data);
    });
    getpokeCard(generateRandomHand()).then((data) => {
      /* if (data.data.id === data) */
      setComputerCard(data.data); //TO-DO? QUESTION? How can we compare that both random numbers are not the same.
    });
  }, []);

  const generateRandomHand = () => {
    const randomNumber = Math.floor(Math.random() * pokeArray.length); // Return an array of Pokémon card objects. We can choose how many cards we want returned..
    console.log(randomNumber);
    return pokeArray[randomNumber];
  };
  console.log(playerCard);
  !playerCard
    ? console.log("loading..")
    : console.log(playerCard, computerCard);

  return (
  <div>
    <div>GameTest</div>
    <div className="player-card"><img src={playerCard?.images.large}/></div>
  </div>
)};

export default GameTest;
