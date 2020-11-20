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
    0: null,
    1: null,
    2: null,
    3: null,
  })

  const [selectedMove, setSelectedMove] = useState(null)

  // useEffect(() => {}, [selectedPokemon])

  return (
    <div>
      <MoveBox
        key={'1'}
        moveId={0}
        selectedPokemonData={selectedPokemonData}
        selectedMove={selectedMove}
        setSelectedMove={setSelectedMove}
        movesObj={movesObj}
        setMovesObj={setMovesObj}
      />
      <MoveBox
        key={'2'}
        moveId={1}
        selectedPokemonData={selectedPokemonData}
        selectedMove={selectedMove}
        setSelectedMove={setSelectedMove}
        movesObj={movesObj}
        setMovesObj={setMovesObj}
      />
      <MoveBox
        key={'3'}
        moveId={2}
        selectedPokemonData={selectedPokemonData}
        selectedMove={selectedMove}
        setSelectedMove={setSelectedMove}
        movesObj={movesObj}
        setMovesObj={setMovesObj}
      />
      <MoveBox
        key={'4'}
        moveId={3}
        selectedPokemonData={selectedPokemonData}
        selectedMove={selectedMove}
        setSelectedMove={setSelectedMove}
        movesObj={movesObj}
        setMovesObj={setMovesObj}
      />
    </div>
  )
}

export default MoveContainer
