import { useNavigate } from "react-router-dom";

const LosingPage = () => {
  const navigate = useNavigate();

  const playAgain = () => {
    navigate("/game");
  };

  return (
    <>
      <h1>YOU LOSE!!</h1>
      <button onClick={playAgain}>PLAY AGAIN</button>
    </>
  );
};

export default LosingPage;
