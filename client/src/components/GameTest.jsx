import { useEffect, useState } from "react";
import pokeArray from "../game/pokearray"; // these are the card ids which are available to fight with
import { getpokeCard } from "../api/tcgapi"; // Pokemon Card Api function which returns back objects for a card with one id
import Modal from "react-modal";
import { motion } from "framer-motion";
import { VscHeart, VscHeartFilled } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const GameTest = () => {
  const [computerCard, setComputerCard] = useState({}); // card object of computer gets saved here
  const [playerCard, setPlayerCard] = useState(null); // card object of user gets saved here

  const [computerHP, setComputerHP] = useState(1); // Health Points of computer
  const [playerHP, setPlayerHP] = useState(1); // Health points of user
  const [modalIsOpen, setIsOpen] = useState(false);

  const [playerLives, setPlayerLives] = useState(5);
  const [computerLives, setComputerLives] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    assignCards(); // once the page is rendered the computer and the user get assigned a random card from the pokearray array
  }, []);

  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
    assignCards();
  }

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
      return prev - damage;
    });
    if (computerHP - damage <= 0) {
      setComputerLives((prev) => {
        return prev - 1;
      });
      if (computerLives - 1 <= 0) {
        navigate("/win");
      }
      openModal();
    }
    console.log(computerHP);
    setTimeout(computerDamage, 500); // TO-DO Add framer motion for the health bar that reduces.
  };
  const barWidth = (computerHP / computerCard?.hp) * 100;

  const computerDamage = () => {
    const attackAmount = computerCard.attacks.length;
    const attackIndex = Math.floor(Math.random() * attackAmount);

    const damage = +computerCard.attacks[attackIndex].damage.replace(/\D/g, "");

    console.log("computer Damage", damage);
    setPlayerHP((prev) => {
      return prev - damage;
    });
    if (playerHP - damage <= 0) {
      setPlayerLives((prev) => {
        return prev - 1;
      });
      if (playerLives - 1 <= 0) {
        navigate("/lose");
      }
      openModal();
    }
    console.log("Playerlives", playerLives);
  };
  const playerBarWidth = (playerHP / playerCard?.hp) * 100;

  const generateHeartIcons = (count) => {
    const hearts = [];
    for (let i = 0; i < count; i++) {
      hearts.push(<VscHeartFilled key={i} />);
    }
    return hearts;
  };

  // TO-DO: create logic that the game should end after one lives are empty
  // after winning the information gets put on the leaderboard

  return (
    <div className="flex flex-row-reverse m-6 justify-center">
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
          {playerHP <= 0 ? "You Lose" : "You Win"}
        </h2>
        <img src="" alt="" />
        <button onClick={closeModal}>close</button>
      </Modal>
      <div className="computer-card">
        <h2>Computer Card</h2>
        <div className="flex gap-1">{generateHeartIcons(computerLives)}</div>

        <div className="flex justify-center">
          <img
            src={computerCard?.images?.large}
            className="m-2 max-w-sm mx-auto"
          />
        </div>

        <div className="flex justify-center">
          <div
            className="health-bar flex gap-1 items-center w-4/5 h-7 p-1 bg-gray-300 rounded relative"
            data-total="1000"
            data-value="1000"
          >
            <p>{computerHP}</p>
            <div
              className="bar bg-green-500 h-5 relative"
              style={{ width: `${barWidth}%` }}
            ></div>
            <div className="hit bg-white bg-opacity-60 absolute top-0 right-0 bottom-0 w-0"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center ">
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
        <motion.img
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
          src="../public/assets/svg/arenafight.svg"
          alt=""
          className="w-3/6"
        />
      </div>

      <div className="player-card">
        <h2>Player Card</h2>
        <div className="flex gap-1">{generateHeartIcons(playerLives)}</div>
        <div className="flex justify-center">
          <img
            src={playerCard?.images?.large}
            className="m-2 max-w-sm mx-auto"
          />
        </div>

        <div className="flex justify-center">
          <div
            className="health-bar flex-row-reverse flex gap-1 items-center w-4/5 h-7 p-1 bg-gray-300 rounded relative"
            data-total="1000"
            data-value="1000"
          >
            <p>{playerHP}</p>
            <div
              className="bar bg-green-500 h-5 relative"
              style={{ width: `${playerBarWidth}%` }}
            ></div>
            <div className="hit bg-white bg-opacity-60 absolute top-0 right-0 bottom-0 w-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameTest;
