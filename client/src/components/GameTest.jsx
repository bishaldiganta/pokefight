import { useEffect, useState } from "react";
import pokeArray from "../game/pokearray";
import { getpokeCard } from "../api/tcgapi";

const GameTest = () => {
  const [computerCard, setComputerCard] = useState([]);
  const [playerCard, setPlayerCard] = useState(null);

  useEffect(() => {
    assignCards();
  }, []);

  const assignCards = () => {
    const computernumber = generateRandomHand();
    let playernumber = generateRandomHand();

    while (computernumber === playernumber) {
      playernumber = generateRandomHand();
    }

    getpokeCard(playernumber).then((data) => {
      setPlayerCard(data.data);
    });
    getpokeCard(computernumber).then((data) => {
      console.log(`aus dem useEffect`, playerCard);
      setComputerCard(data.data);
    });
  };

  const generateRandomHand = () => {
    const randomNumber = Math.floor(Math.random() * pokeArray.length); // Return an array of Pokémon card objects. We can choose how many cards we want returned..
    // console.log(randomNumber);
    return pokeArray[randomNumber];
  };
  // console.log(playerCard);
  // !playerCard
  //   ? console.log("loading..")
  //   : console.log(playerCard, computerCard);

  return (
    <div>
      <div>GameTest</div>
      <div className="player-card">
        <div className="flex gap-2 justify-center">
          {playerCard?.attacks.map((attack) => {
            return (
              <button className="rounded-lg px-4 py-2 bg-red-500 text-blue-100 hover:bg-blue-600 duration-300 m-2">
                {attack.name}
              </button>
            );
          })}{" "}
          {/* TO-DO Add conditional styling for buttons CLSX*/}{" "}
        </div>
        <div className="flex justify-center">
          <div
            className="health-bar w-4/5 h-5 p-1 bg-gray-300 rounded relative"
            data-total="1000"
            data-value="1000"
          >
            <div className="bar bg-red-600 w-full h-2.5 relative"></div>
            <div className="hit bg-white bg-opacity-60 absolute top-0 right-0 bottom-0 w-0"></div>
          </div>
          <p>{playerCard?.hp}</p>
        </div>
        <img src={playerCard?.images.large} />
      </div>
    </div>
  );
};

export default GameTest;
