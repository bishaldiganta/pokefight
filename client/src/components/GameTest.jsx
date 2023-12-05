import { useEffect, useState } from "react";
import pokeArray from "../game/pokearray";
import { getpokeCard } from "../api/tcgapi";
import WinningPage from "./WinningPage";

const GameTest = () => {
  const [computerCard, setComputerCard] = useState([]);
  const [playerCard, setPlayerCard] = useState(null);

  const [computerHP, setComputerHP] = useState(0);
  const [playerHP, setPlayerHP] = useState(0);

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
      setPlayerHP(data.data.hp);
    });
    getpokeCard(computernumber).then((data) => {
      setComputerCard(data.data);
      setComputerHP(data.data.hp);
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

  const playerDamage = (e) => {
    const attack = e.target.value;
    const damage = +playerCard.attacks
      .find((element) => {
        return element.name === attack;
      })
      .damage.replace(/\D/g, "");
    setComputerHP((prev) => {
      if (prev - damage <= 0) return "you won";
      return prev - damage;
    });
    console.log(computerHP);
    setTimeout(computerDamage, 2000);
  };
  const barWidth = (computerHP / computerCard?.hp) * 100;

  const computerDamage = () => {
    const attackAmount = computerCard.attacks.length;
    const attackIndex = Math.floor(Math.random() * attackAmount);
    console.log(
      "the length of the array is:",
      attackAmount,
      "the random number is",
      attackIndex
    );
    const damage = +computerCard.attacks[attackIndex].damage.replace(/\D/g, "");

    console.log("computer Damage", damage);
    setPlayerHP((prev) => {
      if (prev - damage <= 0) return "you lose";
      return prev - damage;
    });
    console.log(playerHP);
  };
  const playerBarWidth = (playerHP / playerCard?.hp) * 100;

  return computerHP === "you won" ? (
    <WinningPage />
  ) : playerHP === "you lose" ? (
    "you are a looser"
  ) : (
    <div>
      <div className="computer-card">
        <div className="flex justify-center">
          <img src={computerCard?.images?.large} className="m-2 w-2/6" />
        </div>

        <div className="flex justify-center">
          <p>{computerHP}</p>
          <div
            className="health-bar w-4/5 h-5 p-1 bg-gray-300 rounded relative"
            data-total="1000"
            data-value="1000"
          >
            <div
              className="bar bg-green-500 h-2.5 relative"
              style={{ width: `${barWidth}%` }}
            ></div>
            <div className="hit bg-white bg-opacity-60 absolute top-0 right-0 bottom-0 w-0"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img src="../../public/assets/images/15.png" alt="" className="w-1/6" />
      </div>

      <div className="player-card">
        <div className="flex gap-2 justify-center">
          {playerCard?.attacks.map((attack) => {
            return (
              <button
                className="rounded-lg px-4 py-2 bg-red-500 text-blue-100 hover:bg-blue-600 duration-300 m-2"
                value={attack.name}
                onClick={playerDamage}
              >
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
            <div
              className="bar bg-green-500 h-2.5 relative"
              style={{ width: `${playerBarWidth}%` }}
            ></div>
            <div className="hit bg-white bg-opacity-60 absolute top-0 right-0 bottom-0 w-0"></div>
          </div>
          <p>{playerHP}</p>
        </div>
        <div className="flex justify-center">
          <img src={playerCard?.images?.large} className="m-2 w-2/6" />
        </div>
      </div>
    </div>
  );
};

export default GameTest;
