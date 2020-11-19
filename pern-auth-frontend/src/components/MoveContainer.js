import React, { useEffect } from 'react'
import MoveBox from './MoveBox'

const MoveContainer = ({ selectedPokemonData }) => {
  return (
    <div>
      <MoveBox selectedPokemonData={selectedPokemonData} />
      <MoveBox selectedPokemonData={selectedPokemonData} />
      <MoveBox selectedPokemonData={selectedPokemonData} />
      <MoveBox selectedPokemonData={selectedPokemonData} />
    </div>
  )
}

export default MoveContainer
