import React from 'react'
import PokeChooser from './PokeChooser'
// import MoveContainer from './MoveContainer'
import PokeData from './PokeData'

// for a single pokemon

const PokeContainer = ({
  pokemon,
  setPokemon,
  selectedPokemon,
  setSelectedPokemon,
  selectedPokemonData,
  setSelectedPokemonData,
}) => {
  return (
    <div>
      <h1>{selectedPokemon ? selectedPokemon[0].name : 'missingno'}</h1>
      {/* <img src={image} alt='' /> */}
      {/* <Button>{single page link}</Button> */}
      <PokeChooser pokemon={pokemon} selectedPokemon={selectedPokemon} />
      <PokeData
        selectedPokemon={selectedPokemon}
        selectedPokemonData={selectedPokemonData}
      />
      {/* <MoveContainer selectedPokemonData={selectedPokemonData} /> */}
      {/* <StatContainer stats={selectedPokemonData.stats} /> */}
    </div>
  )
}

export default PokeContainer
