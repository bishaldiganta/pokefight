import pokeArray from "../game/pokearray"; // these are the card ids which are available to fight with
import { useEffect, useState } from "react";

const [computerCard, setComputerCard] = useState({}); // card object of computer gets saved here
const [playerCard, setPlayerCard] = useState(null); // card object of user gets saved here

const [computerHP, setComputerHP] = useState(1); // Health Points of computer
const [playerHP, setPlayerHP] = useState(1); // Health points of user
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
    openModal();
  }
  console.log(playerHP);
};

export { assignCards, generateRandomHand, playerDamage, computerDamage };
