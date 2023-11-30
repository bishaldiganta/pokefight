import React from "react";
import { useLoaderData } from "react-router-dom";

const PokeDetails = () => {
	const pokemon = useLoaderData();
	console.log(pokemon);
	return <div>{pokemon.name}, I choose you!</div>;
};

export default PokeDetails;
