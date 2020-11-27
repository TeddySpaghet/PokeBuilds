import React from 'react'
import PokeContainer from './PokeContainer'

function PokeContainerList({ id }) {
  const pokemon = [1, 2, 3, 4, 5, 6]
  const pokemonList = pokemon.map((item, index) => {
    return <PokeContainer key={index} id={index} />
  })
  return <div>{pokemonList}</div>
}

export default PokeContainerList
