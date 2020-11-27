import React from 'react'
import PokeContainer from './PokeContainer'

function PokeContainerList() {
  const numPokemon = [1, 2, 3, 4, 5, 6]
  const pokemonList = numPokemon.map((item, index) => {
    return <PokeContainer key={index} id={index} />
  })
  return <React.Fragment>{pokemonList}</React.Fragment>
}

export default PokeContainerList
