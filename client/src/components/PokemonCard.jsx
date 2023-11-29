import React from 'react'

const PokemonCard = ({pokemon}) => {
  return (
    <div className='rounded-md border-4 border-solid border-amber-300'>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name.english}/>
        <h2>{pokemon.name.english}</h2>
        <div></div>
        <div></div>
    </div>
  )
}

export default PokemonCard