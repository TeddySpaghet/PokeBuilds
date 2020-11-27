import React from 'react'
import StatBox from './StatBox'

const StatContainer = ({ selectedPokemonData }) => {
  return (
    <div>
      <StatBox
        stat={'hp'}
        index={0}
        selectedPokemonData={selectedPokemonData}
      />
      <StatBox
        stat={'attack'}
        index={1}
        selectedPokemonData={selectedPokemonData}
      />
      <StatBox
        stat={'defense'}
        index={2}
        selectedPokemonData={selectedPokemonData}
      />
      <StatBox
        stat={'special attack'}
        index={3}
        selectedPokemonData={selectedPokemonData}
      />
      <StatBox
        stat={'special defense'}
        index={4}
        selectedPokemonData={selectedPokemonData}
      />
      <StatBox
        stat={'speed'}
        index={5}
        selectedPokemonData={selectedPokemonData}
      />
    </div>
  )
}

export default StatContainer
