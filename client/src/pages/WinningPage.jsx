import { useNavigate } from "react-router-dom";

const WinningPage = () => {
  const navigate = useNavigate();

  const playAgain = () => {
    navigate("/game");
  };
  return (
    <>
      <h1>YOU WIN</h1><button onClick={playAgain}>PLAY AGAIN</button>
    </>
  );
};

export default WinningPage;
