import { useLoaderData } from "react-router-dom";

const Leaderboard = () => {
  let pokemons = useLoaderData();

  console.log(pokemons);

  return (
    <div className="flex items-center flex-col ">
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Pokemon Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map((pokemon) => {
            if (pokemon.score) {
              return (
                <tr key={pokemon.name.english}>
                  <td>
                    <img
                      className="w-20 object-cover"
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
                      alt={pokemon.name.english}
                    />
                  </td>
                  <td>{pokemon.name.english}</td>
                  <td>{pokemon.score}</td>
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
