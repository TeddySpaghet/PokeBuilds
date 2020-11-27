import React, { useEffect } from 'react'

const StatBox = ({ stat, index, selectedPokemonData }) => {
  useEffect(() => {}, [selectedPokemonData])
  return (
    <div>
      {selectedPokemonData ? (
        <div>
          <p>{stat}</p>
          <p>{selectedPokemonData.stats[index].base_stat}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default StatBox
