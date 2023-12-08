import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LosingPage = () => {
  const navigate = useNavigate();

  const playAgain = () => {
    navigate("/game");
  };
  const handleLeaderboard = () => {
    navigate("/leaderboard");
  };

  return (
    // Use 'mt-0' to remove top margin and 'mb-auto' to push everything up
    <div className="flex flex-col items-center justify-start h-screen bg-slate-200 mt-0 mb-auto pt-40">
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-blue-800 mb-8"
      >
        YOU LOST!!
      </motion.h1>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={playAgain}
        className="rounded-lg px-4 py-2 bg-red-500 text-blue-100 hover:bg-blue-600 duration-200 m-2"
      >
        PLAY AGAIN
      </motion.button>{" "}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleLeaderboard}
        className="px-4 py-2 text-gray-900 hover:text-gray-700 bg-yellow-200 opacity-90 rounded-lg"
      >
        LEADERBOARD
      </motion.button>
    </div>
  );
};

export default LosingPage;
