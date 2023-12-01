import React from "react";
import { useLoaderData } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";

const PokeList = () => {
	const pokemons = useLoaderData();
	console.log(pokemons);
	return (
		<div className="min-h-screen sm:p-10 p-5 lg:px-10 bg-gray-100">
			<div className="min-h-screen max-w-5xl mx-auto place-content-center justify-center justify-items-center grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5">
				{pokemons.map((pokemon) => {
					return <PokemonCard key={pokemon.id} pokemon={pokemon} />; //TO-DO - Create Poke Card component which has Pokemon as props.
				})}
			</div>
		</div>
	);
};

export default PokeList;
