import axios from "axios";

const url = `https://pokeapi.co/api/v2/pokemon/`;

const getSinglePokemon = async (name) => {
	try {
		const { name } = params;
		const response = await axios(`${url}${name}`);
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export default getSinglePokemon;
