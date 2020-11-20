import React, { useState, useEffect } from 'react'
import MoveBox from './MoveBox'

const MoveContainer = ({
  selectedPokemon,
  selectedPokemonData,
  pokeArray,
  setPokeArray,
  id,
}) => {
  const [movesObj, setMovesObj] = useState({
    0: 'tomato',
    1: 'tomato',
    2: 'tomato',
    3: 'tomato',
  })
  // useEffect(() => {}, [selectedPokemon])

  return (
    <div>
      <MoveBox
        key={'1'}
        moveId={'0'}
        selectedPokemonData={selectedPokemonData}
        movesObj={movesObj}
        setMovesObj={setMovesObj}
      />
      <MoveBox
        key={'2'}
        moveId={'1'}
        selectedPokemonData={selectedPokemonData}
        movesObj={movesObj}
        setMovesObj={setMovesObj}
      />
      <MoveBox
        key={'3'}
        moveId={'2'}
        selectedPokemonData={selectedPokemonData}
        movesObj={movesObj}
        setMovesObj={setMovesObj}
      />
      <MoveBox
        key={'4'}
        moveId={'3'}
        selectedPokemonData={selectedPokemonData}
        movesObj={movesObj}
        setMovesObj={setMovesObj}
      />
    </div>
  )
}

export default MoveContainer
