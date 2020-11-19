import React, { useEffect } from 'react'
import MoveBox from './MoveBox'

const MoveContainer = ({ selectedPokemon, selectedPokemonData }) => {
  useEffect(() => {}, [selectedPokemon])
  return (
    <div>
      <MoveBox key={1} selectedPokemonData={selectedPokemonData} />
      <MoveBox key={2} selectedPokemonData={selectedPokemonData} />
      <MoveBox key={3} selectedPokemonData={selectedPokemonData} />
      <MoveBox key={4} selectedPokemonData={selectedPokemonData} />
    </div>
  )
}

export default MoveContainer
