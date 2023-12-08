import { useLoaderData } from "react-router-dom";

const Leaderboard = () => {
  let pokemons = useLoaderData();

  return (
    <div className="flex items-center flex-col bg-yellow-200 rounded-xl p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Leaderboard</h1>
      <table className="table-auto text-lg text-gray-800">
        <thead>
          <tr className="bg-yellow-200 rounded-xl">
            <th className="p-2">Pokemon</th>
            <th className="p-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map((pokemon) => {
            if (pokemon.score) {
              return (
                <tr key={pokemon.name.english} className="text-center">
                  <td className="p-3 flex items-center justify-center">
                    <img
                      className="w-20 h-20 object-cover rounded-full mr-2"
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
                      alt={pokemon.name.english}
                    />
                    {pokemon.name.english}
                  </td>
                  <td className="p-3">{pokemon.score}</td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
